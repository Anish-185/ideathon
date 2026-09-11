export type EvidenceFamily = "gene_target" | "pathway" | "ml";

export interface EvidenceBreakdown {
  name: EvidenceFamily;
  available: boolean;
  value: number | null;
  contributionPoints: number | null;
  supportingIds: string[];
  description: string;
}

export interface CandidateExplanation {
  summary: string;
  limitations: string;
  provider: "deterministic" | "deepseek";
  biologicalEvidence: EvidenceBreakdown[];
}

export interface RankedCandidate {
  rank: number;
  drugId: string;
  drugName: string;
  diseaseId: string;
  diseaseName: string;
  repurposingScore: number;
  generationMethods: string[];
  matchedGenes: string[];
  matchedPathways: string[];
  explanation: CandidateExplanation;
}

export interface SearchResult {
  diseaseId: string;
  diseaseName: string;
  nCandidates: number;
  candidates: RankedCandidate[];
  disclaimer: string;
  source: "api" | "demo";
}

export interface DiseaseSuggestion {
  query: string;
  name: string;
  blurb: string;
}

export interface MetaResponse {
  app: string;
  version: string;
  environment: string;
  disclaimer: string;
}
