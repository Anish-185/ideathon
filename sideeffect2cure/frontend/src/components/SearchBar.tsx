import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { SUGGESTIONS } from "../data/demo";

interface SearchBarProps {
  initialQuery?: string;
  autoFocus?: boolean;
}

export function SearchBar({ initialQuery = "", autoFocus = false }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  function submit(q: string) {
    const trimmed = q.trim();
    if (!trimmed) return;
    navigate(`/results?q=${encodeURIComponent(trimmed)}`);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    submit(query);
  }

  return (
    <div className="search-panel">
      <p className="text-label" style={{ marginBottom: "0.75rem" }}>
        Search a disease
      </p>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Glioblastoma, Parkinson disease…"
          aria-label="Disease search"
          autoFocus={autoFocus}
        />
        <button className="btn btn-primary" type="submit">
          Discover
        </button>
      </form>
      <div className="suggestions" aria-label="Suggested diseases">
        {SUGGESTIONS.map((s) => (
          <button
            key={s.query}
            type="button"
            className="chip"
            onClick={() => {
              setQuery(s.query);
              submit(s.query);
            }}
          >
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}
