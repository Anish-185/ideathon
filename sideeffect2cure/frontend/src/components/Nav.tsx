import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { fetchHealth } from "../api/client";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [apiOk, setApiOk] = useState<boolean | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchHealth().then((ok) => {
      if (!cancelled) setApiOk(ok);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          SideEffect2Cure <span>AI</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <ul className={`nav-links${open ? " open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" onClick={() => setOpen(false)}>
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <span className={`status-dot${apiOk ? " ok" : ""}`}>
              <i />
              {apiOk === null ? "Checking API" : apiOk ? "API online" : "Demo mode"}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
