import { useState } from "react";
import type { RankedCandidate } from "../types";

interface Props {
  candidate: RankedCandidate;
  defaultOpen?: boolean;
}

function familyLabel(name: string): string {
  if (name === "gene_target") return "Gene–target";
  if (name === "pathway") return "Pathway";
  if (name === "ml") return "ML";
  return name;
}

export function CandidateCard({ candidate, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article
      className={`candidate${open ? " open" : ""}`}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={open}
    >
      <div className="candidate-rank">{String(candidate.rank).padStart(2, "0")}</div>

      <div>
        <h3 className="candidate-name">{candidate.drugName}</h3>
        <div className="candidate-id">
          {candidate.drugId}
          {candidate.matchedGenes.length > 0 && (
            <> · genes {candidate.matchedGenes.slice(0, 3).join(", ")}</>
          )}
        </div>
        <div className="candidate-tags">
          {candidate.generationMethods.map((m) => (
            <span key={m} className="tag">
              {m.replace("_", "–")}
            </span>
          ))}
        </div>

        {open && (
          <div className="detail" onClick={(e) => e.stopPropagation()}>
            <div className="detail-grid">
              <div className="detail-prose">
                <p className="text-label">Why this rank</p>
                <p>{candidate.explanation.summary}</p>
                <div className="limitations">{candidate.explanation.limitations}</div>
              </div>
              <div>
                <p className="text-label">Evidence families</p>
                {candidate.explanation.biologicalEvidence.map((ev) => (
                  <div key={ev.name} className="evidence-row">
                    <span className="evidence-name">{familyLabel(ev.name)}</span>
                    <div className="evidence-track" title={ev.description}>
                      <i
                        style={{
                          width: ev.available && ev.value != null ? `${ev.value * 100}%` : "0%",
                          opacity: ev.available ? 1 : 0.25,
                        }}
                      />
                    </div>
                    <span className="evidence-pts">
                      {ev.available && ev.contributionPoints != null
                        ? `+${ev.contributionPoints.toFixed(1)}`
                        : "—"}
                    </span>
                  </div>
                ))}
                <p className="text-muted" style={{ marginTop: "0.85rem" }}>
                  Provider: {candidate.explanation.provider}
                  {candidate.matchedPathways.length > 0 && (
                    <> · pathways {candidate.matchedPathways.slice(0, 2).join(", ")}</>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="score-block">
        <div className="score-value">{candidate.repurposingScore.toFixed(1)}</div>
        <span className="score-label">repurposing score</span>
        <div className="score-bar">
          <span style={{ width: `${Math.min(100, candidate.repurposingScore)}%` }} />
        </div>
      </div>
    </article>
  );
}
