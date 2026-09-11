import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <div className="page-enter">
      <section className="section">
        <div className="container content-centered">
          <p className="text-label">About</p>
          <h1 className="text-h1 prose-block" style={{ maxWidth: "28rem" }}>
            Open medical research, made explorable
          </h1>
          <p className="text-body prose-block" style={{ marginTop: "1rem" }}>
            SideEffect2Cure AI answers one question: for a given disease, which existing
            drugs are potentially promising candidates for repurposing, and why? It is a
            discovery and hypothesis-generation tool — never a claim that a drug cures a
            disease, and never clinical decision support.
          </p>

          <div style={{ marginTop: "3rem" }}>
            <h2 className="text-h2">What the score means</h2>
            <p className="text-body prose-block" style={{ marginTop: "0.75rem" }}>
              The <em className="italic">repurposing score</em> (0–100) is an internal
              research prioritization signal. Higher means more of the available
              computational and biological evidence supports investigating this drug for
              this disease. It is not clinical efficacy, treatment probability, or a
              medical recommendation. Missing evidence is excluded and weights are
              renormalized — never treated as negative.
            </p>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h2 className="text-h2">Evidence families</h2>
            <ul className="source-list" style={{ marginTop: "1.25rem" }}>
              <li>
                <strong>Gene–target</strong>
                <span className="text-muted">
                  Disease genes intersecting drug targets (HGNC-linked)
                </span>
              </li>
              <li>
                <strong>Pathway</strong>
                <span className="text-muted">Shared Reactome pathway bridges</span>
              </li>
              <li>
                <strong>ML</strong>
                <span className="text-muted">
                  Interpretable model on Level-5 features vs known indications
                </span>
              </li>
              <li>
                <strong>Explanation</strong>
                <span className="text-muted">
                  Grounded narration — structural fields stay deterministic
                </span>
              </li>
            </ul>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h2 className="text-h2">Inspired by open exploration</h2>
            <p className="text-body prose-block" style={{ marginTop: "0.75rem" }}>
              The experience draws from the spirit of tools like RepurposeX — search-first
              biomedical exploration with plain-language rationale — while preserving the
              SideEffect2Cure pipeline: resolve → generate → feature → predict → fuse →
              rank → explain.
            </p>
          </div>

          <p className="disclaimer-banner">
            SideEffect2Cure AI does not diagnose, treat, or cure any disease. All output
            is hypothesis-generating only.
          </p>

          <div style={{ marginTop: "2rem" }}>
            <Link className="btn btn-primary" to="/">
              Start a search
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
