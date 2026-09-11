import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchDisease } from "../api/client";
import { CandidateCard } from "../components/CandidateCard";
import { SearchBar } from "../components/SearchBar";
import type { SearchResult } from "../types";

export function ResultsPage() {
  const [params] = useSearchParams();
  const query = params.get("q")?.trim() ?? "";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SearchResult | null>(null);

  useEffect(() => {
    if (!query) {
      setResult(null);
      setError(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    searchDisease(query, 10)
      .then((data) => {
        if (!cancelled) setResult(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Search failed.");
          setResult(null);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [query]);

  return (
    <div className="page-enter">
      <div className="container">
        <div className="results-head">
          <p className="text-label">Results</p>
          {query ? (
            <h1 className="text-h1">
              Candidates for <em className="italic">{query}</em>
            </h1>
          ) : (
            <h1 className="text-h1">Search a disease</h1>
          )}
          <SearchBar initialQuery={query} />
        </div>

        {loading && (
          <div className="loading-state">
            <div className="spinner" />
            <p className="text-muted">Running resolve → generate → fuse → rank…</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <p className="text-h3">{error}</p>
            <Link className="btn" to="/explore" style={{ marginTop: "1rem" }}>
              Browse diseases
            </Link>
          </div>
        )}

        {!loading && !error && query && result && result.nCandidates === 0 && (
          <div className="empty-state">
            <p className="text-h2">Not in the supported set</p>
            <p className="text-body" style={{ marginTop: "0.75rem" }}>
              “{query}” could not be resolved to a disease with demo or API results. Try
              Glioblastoma, Parkinson disease, Rheumatoid arthritis, or Alzheimer disease.
            </p>
            <Link className="btn" to="/explore" style={{ marginTop: "1.25rem" }}>
              Explore supported diseases
            </Link>
          </div>
        )}

        {!loading && result && result.nCandidates > 0 && (
          <>
            <div className="results-meta">
              <div className="meta-item">
                <strong>{result.diseaseName}</strong>
                <span>{result.diseaseId}</span>
              </div>
              <div className="meta-item">
                <strong>{result.nCandidates}</strong>
                <span>ranked candidates</span>
              </div>
              <div className="meta-item">
                <strong>{result.source === "api" ? "Live" : "Demo"}</strong>
                <span>evidence source</span>
              </div>
            </div>

            <div className="candidate-list">
              {result.candidates.map((c, i) => (
                <CandidateCard key={c.drugId} candidate={c} defaultOpen={i === 0} />
              ))}
            </div>

            <p className="disclaimer-banner">{result.disclaimer}</p>
          </>
        )}
      </div>
    </div>
  );
}
