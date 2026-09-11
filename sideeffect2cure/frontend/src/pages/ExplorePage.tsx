import { useNavigate } from "react-router-dom";
import { SUGGESTIONS } from "../data/demo";
import { SearchBar } from "../components/SearchBar";

export function ExplorePage() {
  const navigate = useNavigate();

  return (
    <div className="page-enter">
      <section className="explore-intro">
        <div className="container">
          <p className="text-label">Explore</p>
          <h1 className="text-h1">Browse supported disease queries</h1>
          <p className="text-body" style={{ marginTop: "0.75rem" }}>
            Select a disease to run the ranking pipeline, or search by name. Results show
            ordered candidates with evidence-family breakdowns and grounded explanations.
          </p>
          <SearchBar />
          <div className="disease-grid">
            {SUGGESTIONS.map((d) => (
              <button
                key={d.query}
                type="button"
                className="disease-tile"
                onClick={() => navigate(`/results?q=${encodeURIComponent(d.query)}`)}
              >
                <h3>{d.name}</h3>
                <p>{d.blurb}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
