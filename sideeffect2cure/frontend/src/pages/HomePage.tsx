import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { Pipeline } from "../components/Pipeline";

export function HomePage() {
  return (
    <div className="page-enter">
      <section className="hero">
        <div className="container">
          <p className="text-label" style={{ marginBottom: "1rem" }}>
            Drug repurposing discovery
          </p>
          <h1 className="hero-brand">SideEffect2Cure</h1>
          <p className="hero-lead">
            We search the world&apos;s largest open medical databases, surface drugs that
            share biological pathways with diseases they weren&apos;t built for, and explain
            the science in plain English.
          </p>
          <p className="hero-detail">
            An open interface to computational drug–disease evidence. Enter a disease to
            discover existing medicines that may warrant investigation beyond their
            approved labels — ranked by gene–target overlap, pathway bridges, and
            interpretable machine learning. Every candidate ships with inspectable
            evidence and grounded rationale, so you can see <em className="italic">why</em>{" "}
            the pipeline ranked it — never invented biology.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/explore">
              Explore diseases
            </Link>
            <Link className="btn" to="/about">
              How it works
            </Link>
          </div>
          <SearchBar autoFocus />
        </div>
      </section>

      <hr className="divider" />

      <Pipeline />

      <hr className="divider" />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="text-label">Evidence sources</p>
            <h2 className="text-h1">Built on public biomedical knowledge</h2>
            <p>
              Nothing is fabricated. Unreachable sources are reported, not invented.
              Scores prioritize investigation — they do not claim efficacy.
            </p>
          </div>
          <ul className="source-list">
            <li>
              <strong>Open Targets</strong>
              <span className="text-muted">Disease–gene associations &amp; clinical labels</span>
            </li>
            <li>
              <strong>ChEMBL</strong>
              <span className="text-muted">Drug identity, targets, mechanisms</span>
            </li>
            <li>
              <strong>SIDER</strong>
              <span className="text-muted">Documented side-effect context</span>
            </li>
            <li>
              <strong>Reactome</strong>
              <span className="text-muted">Pathway bridges for candidate generation</span>
            </li>
          </ul>
          <p className="disclaimer-banner">
            SideEffect2Cure AI is a research prototype. It does not diagnose, treat, or
            cure any disease and is not clinical decision support. All output is
            hypothesis-generating only.
          </p>
        </div>
      </section>
    </div>
  );
}
