import { useEffect, useState } from "react";
import { fetchMeta } from "../api/client";
import { DISCLAIMER } from "../data/demo";

export function Footer() {
  const [disclaimer, setDisclaimer] = useState(DISCLAIMER);

  useEffect(() => {
    let cancelled = false;
    fetchMeta().then((meta) => {
      if (!cancelled && meta?.disclaimer) setDisclaimer(meta.disclaimer);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">SideEffect2Cure AI</div>
          <p>{disclaimer}</p>
        </div>
        <p className="text-muted">
          Built on Open Targets, ChEMBL, SIDER &amp; Reactome.
          <br />
          Research prototype · hypothesis generation only.
        </p>
      </div>
    </footer>
  );
}
