const STEPS = [
  {
    num: "01",
    title: "Resolve disease",
    body: "Map a query to a supported disease profile — genes, pathways, provenance.",
  },
  {
    num: "02",
    title: "Generate candidates",
    body: "Union gene–target and pathway bridges to existing drugs. No score yet.",
  },
  {
    num: "03",
    title: "Engineer features",
    body: "Deterministic counts, ratios, and availability flags for each pair.",
  },
  {
    num: "04",
    title: "Predict & fuse",
    body: "Interpretable ML plus gene–target and pathway families into a 0–100 score.",
  },
  {
    num: "05",
    title: "Rank",
    body: "Pure ordering by repurposing score — ties broken by drug id.",
  },
  {
    num: "06",
    title: "Explain",
    body: "Grounded narration of evidence already computed. Never invents biology.",
  },
];

export function Pipeline() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="text-label">The pipeline</p>
          <h2 className="text-h1">From disease query to ranked hypothesis</h2>
          <p>
            Every stage is deterministic until the optional explanation layer — and even
            then, structural fields stay grounded in pipeline evidence.
          </p>
        </div>
        <div className="pipeline-grid">
          {STEPS.map((step) => (
            <div key={step.num} className="pipeline-step">
              <div className="num">{step.num}</div>
              <h3 className="text-h3">{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
