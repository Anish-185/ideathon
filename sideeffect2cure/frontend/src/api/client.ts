import { DISCLAIMER, lookupDemoSearch } from "../data/demo";
import type { MetaResponse, SearchResult } from "../types";

const API_BASE = import.meta.env.VITE_API_BASE ?? "";

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

export async function fetchHealth(): Promise<boolean> {
  try {
    const data = await getJson<{ status: string }>("/api/health");
    return data.status === "ok";
  } catch {
    return false;
  }
}

export async function fetchMeta(): Promise<MetaResponse | null> {
  try {
    return await getJson<MetaResponse>("/api/meta");
  } catch {
    return null;
  }
}

/**
 * Prefer a live ranking endpoint when the backend exposes one.
 * Until then, fall back to curated demo results that mirror the
 * SideEffect2Cure pipeline (rank + score + grounded explanation).
 */
export async function searchDisease(query: string, topN = 10): Promise<SearchResult> {
  const trimmed = query.trim();
  if (!trimmed) {
    throw new Error("Enter a disease name to search.");
  }

  try {
    const params = new URLSearchParams({
      q: trimmed,
      top_n: String(topN),
    });
    const live = await getJson<SearchResult>(`/api/rank?${params}`);
    return { ...live, source: "api" };
  } catch {
    const demo = lookupDemoSearch(trimmed);
    if (demo) {
      return {
        ...demo,
        candidates: demo.candidates.slice(0, topN),
        nCandidates: Math.min(demo.nCandidates, topN),
      };
    }

    return {
      diseaseId: "UNSUPPORTED",
      diseaseName: trimmed,
      nCandidates: 0,
      candidates: [],
      disclaimer: DISCLAIMER,
      source: "demo",
    };
  }
}
