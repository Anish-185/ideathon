import type { DiseaseSuggestion, SearchResult } from "../types";

export const DISCLAIMER =
  "SideEffect2Cure AI is a research prototype for drug repurposing discovery. " +
  "It does not diagnose, treat, or cure any disease and is not a clinical " +
  "decision-support tool. All output is hypothesis-generating only.";

export const SUGGESTIONS: DiseaseSuggestion[] = [
  {
    query: "Glioblastoma",
    name: "Glioblastoma",
    blurb: "Aggressive primary brain tumor with limited approved options.",
  },
  {
    query: "Parkinson disease",
    name: "Parkinson disease",
    blurb: "Neurodegenerative movement disorder with pathway-linked candidates.",
  },
  {
    query: "Rheumatoid arthritis",
    name: "Rheumatoid arthritis",
    blurb: "Autoimmune inflammatory disease with rich target overlap.",
  },
  {
    query: "Alzheimer disease",
    name: "Alzheimer disease",
    blurb: "Progressive dementia — hypothesis generation only.",
  },
];

const DEMO_LIBRARY: Record<string, SearchResult> = {
  glioblastoma: {
    diseaseId: "MONDO_0018177",
    diseaseName: "Glioblastoma",
    nCandidates: 5,
    source: "demo",
    disclaimer: DISCLAIMER,
    candidates: [
      {
        rank: 1,
        drugId: "DRUG:000412",
        drugName: "Temozolomide",
        diseaseId: "MONDO_0018177",
        diseaseName: "Glioblastoma",
        repurposingScore: 78.4,
        generationMethods: ["gene_target", "pathway"],
        matchedGenes: ["MGMT", "TP53"],
        matchedPathways: ["R-HSA-73894", "R-HSA-69563"],
        explanation: {
          provider: "deterministic",
          summary:
            "Temozolomide ranks highest because gene-target and pathway evidence both support investigating DNA-repair and apoptotic signalling overlap with glioblastoma biology. The ML component further elevates prioritization based on Level-5 feature patterns seen in known clinical indications.",
          limitations:
            "This ranking reflects computational evidence only. It does not establish clinical efficacy, dosing, safety, or suitability for any patient.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.82,
              contributionPoints: 28.1,
              supportingIds: ["MGMT", "TP53"],
              description:
                "Shared disease genes and drug targets on DNA-damage response nodes.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.74,
              contributionPoints: 25.3,
              supportingIds: ["R-HSA-73894"],
              description:
                "Overlap on Reactome DNA repair / cell-cycle checkpoint pathways.",
            },
            {
              name: "ml",
              available: true,
              value: 0.71,
              contributionPoints: 25.0,
              supportingIds: [],
              description:
                "Model output favors pairs with similar feature geometry to known indications.",
            },
          ],
        },
      },
      {
        rank: 2,
        drugId: "DRUG:000088",
        drugName: "Bevacizumab",
        diseaseId: "MONDO_0018177",
        diseaseName: "Glioblastoma",
        repurposingScore: 71.2,
        generationMethods: ["gene_target", "pathway"],
        matchedGenes: ["VEGFA", "EGFR"],
        matchedPathways: ["R-HSA-194138"],
        explanation: {
          provider: "deterministic",
          summary:
            "Bevacizumab is prioritized via angiogenesis and receptor-signalling overlap with glioblastoma-associated genes. Pathway evidence contributes most of the score; ML support is moderate.",
          limitations:
            "Hypothesis-generating only — not a treatment recommendation.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.76,
              contributionPoints: 26.0,
              supportingIds: ["VEGFA", "EGFR"],
              description: "VEGF / EGFR-related target overlap with disease genes.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.69,
              contributionPoints: 23.6,
              supportingIds: ["R-HSA-194138"],
              description: "Shared signalling pathway context from Reactome.",
            },
            {
              name: "ml",
              available: true,
              value: 0.62,
              contributionPoints: 21.6,
              supportingIds: [],
              description: "Moderate ML support relative to labeled indication pairs.",
            },
          ],
        },
      },
      {
        rank: 3,
        drugId: "DRUG:000251",
        drugName: "Everolimus",
        diseaseId: "MONDO_0018177",
        diseaseName: "Glioblastoma",
        repurposingScore: 64.8,
        generationMethods: ["pathway"],
        matchedGenes: ["MTOR"],
        matchedPathways: ["R-HSA-165159", "R-HSA-162582"],
        explanation: {
          provider: "deterministic",
          summary:
            "Everolimus rises through mTOR / PI3K pathway overlap with disease biology. Gene-target evidence is thinner than top ranks; pathway contribution dominates.",
          limitations:
            "Missing evidence is excluded from scoring — never treated as negative. Not clinical advice.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.48,
              contributionPoints: 16.4,
              supportingIds: ["MTOR"],
              description: "Limited direct gene-target intersection.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.81,
              contributionPoints: 27.7,
              supportingIds: ["R-HSA-165159"],
              description: "Strong Reactome pathway intersection on mTOR signalling.",
            },
            {
              name: "ml",
              available: true,
              value: 0.59,
              contributionPoints: 20.7,
              supportingIds: [],
              description: "ML component adds moderate prioritization signal.",
            },
          ],
        },
      },
      {
        rank: 4,
        drugId: "DRUG:000903",
        drugName: "Dasatinib",
        diseaseId: "MONDO_0018177",
        diseaseName: "Glioblastoma",
        repurposingScore: 58.1,
        generationMethods: ["gene_target"],
        matchedGenes: ["SRC", "PDGFRB"],
        matchedPathways: [],
        explanation: {
          provider: "deterministic",
          summary:
            "Dasatinib is surfaced primarily by kinase gene-target bridges. Pathway evidence was not assessed for this pair in the demo slice.",
          limitations:
            "Incomplete pathway coverage does not imply absence of biology — only that it was not scored here.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.72,
              contributionPoints: 36.0,
              supportingIds: ["SRC", "PDGFRB"],
              description: "Kinase target overlap with disease-associated genes.",
            },
            {
              name: "pathway",
              available: false,
              value: null,
              contributionPoints: null,
              supportingIds: [],
              description: "Pathway evidence not assessed for this candidate.",
            },
            {
              name: "ml",
              available: true,
              value: 0.44,
              contributionPoints: 22.1,
              supportingIds: [],
              description: "Lower ML output than higher-ranked candidates.",
            },
          ],
        },
      },
      {
        rank: 5,
        drugId: "DRUG:000124",
        drugName: "Aspirin",
        diseaseId: "MONDO_0018177",
        diseaseName: "Glioblastoma",
        repurposingScore: 41.3,
        generationMethods: ["pathway"],
        matchedGenes: ["PTGS2"],
        matchedPathways: ["R-HSA-140480"],
        explanation: {
          provider: "deterministic",
          summary:
            "Aspirin appears lower in the ordered list: weak-to-moderate pathway context without strong gene-target or ML support for this disease.",
          limitations:
            "A lower computational rank is not a safety or efficacy judgment.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.31,
              contributionPoints: 10.6,
              supportingIds: ["PTGS2"],
              description: "Sparse gene-target bridge.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.55,
              contributionPoints: 18.8,
              supportingIds: ["R-HSA-140480"],
              description: "Partial inflammatory / prostaglandin pathway overlap.",
            },
            {
              name: "ml",
              available: true,
              value: 0.34,
              contributionPoints: 11.9,
              supportingIds: [],
              description: "Low ML prioritization relative to labeled pairs.",
            },
          ],
        },
      },
    ],
  },
  "parkinson disease": {
    diseaseId: "MONDO_0005180",
    diseaseName: "Parkinson disease",
    nCandidates: 3,
    source: "demo",
    disclaimer: DISCLAIMER,
    candidates: [
      {
        rank: 1,
        drugId: "DRUG:000331",
        drugName: "Rasagiline",
        diseaseId: "MONDO_0005180",
        diseaseName: "Parkinson disease",
        repurposingScore: 74.6,
        generationMethods: ["gene_target", "pathway"],
        matchedGenes: ["MAOB", "SNCA"],
        matchedPathways: ["R-HSA-112316"],
        explanation: {
          provider: "deterministic",
          summary:
            "Rasagiline leads on monoamine oxidase and synuclein-adjacent evidence bridges, with balanced contributions across gene-target and pathway families.",
          limitations: DISCLAIMER,
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.8,
              contributionPoints: 27.4,
              supportingIds: ["MAOB"],
              description: "Direct MAO-B target alignment with disease biology.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.7,
              contributionPoints: 24.0,
              supportingIds: ["R-HSA-112316"],
              description: "Neurotransmitter metabolism pathway overlap.",
            },
            {
              name: "ml",
              available: true,
              value: 0.68,
              contributionPoints: 23.2,
              supportingIds: [],
              description: "ML features resemble known indication geometry.",
            },
          ],
        },
      },
      {
        rank: 2,
        drugId: "DRUG:000512",
        drugName: "Amantadine",
        diseaseId: "MONDO_0005180",
        diseaseName: "Parkinson disease",
        repurposingScore: 61.9,
        generationMethods: ["pathway"],
        matchedGenes: ["GRIN2B"],
        matchedPathways: ["R-HSA-442755"],
        explanation: {
          provider: "deterministic",
          summary:
            "Amantadine is prioritized mainly through glutamatergic pathway context rather than dense gene-target overlap.",
          limitations: "Computational prioritization only.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.42,
              contributionPoints: 14.4,
              supportingIds: ["GRIN2B"],
              description: "Limited NMDA-related gene bridge.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.77,
              contributionPoints: 26.3,
              supportingIds: ["R-HSA-442755"],
              description: "Activation of NMDA receptors pathway overlap.",
            },
            {
              name: "ml",
              available: true,
              value: 0.62,
              contributionPoints: 21.2,
              supportingIds: [],
              description: "Moderate ML contribution.",
            },
          ],
        },
      },
      {
        rank: 3,
        drugId: "DRUG:000077",
        drugName: "Caffeine",
        diseaseId: "MONDO_0005180",
        diseaseName: "Parkinson disease",
        repurposingScore: 49.5,
        generationMethods: ["gene_target"],
        matchedGenes: ["ADORA2A"],
        matchedPathways: [],
        explanation: {
          provider: "deterministic",
          summary:
            "Caffeine surfaces via adenosine receptor gene-target evidence. Pathway assessment was unavailable in this demo result.",
          limitations: "Not a clinical recommendation.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.66,
              contributionPoints: 33.0,
              supportingIds: ["ADORA2A"],
              description: "Adenosine A2A receptor target bridge.",
            },
            {
              name: "pathway",
              available: false,
              value: null,
              contributionPoints: null,
              supportingIds: [],
              description: "Not assessed.",
            },
            {
              name: "ml",
              available: true,
              value: 0.33,
              contributionPoints: 16.5,
              supportingIds: [],
              description: "Weak ML signal.",
            },
          ],
        },
      },
    ],
  },
  "rheumatoid arthritis": {
    diseaseId: "MONDO_0008389",
    diseaseName: "Rheumatoid arthritis",
    nCandidates: 3,
    source: "demo",
    disclaimer: DISCLAIMER,
    candidates: [
      {
        rank: 1,
        drugId: "DRUG:000201",
        drugName: "Methotrexate",
        diseaseId: "MONDO_0008389",
        diseaseName: "Rheumatoid arthritis",
        repurposingScore: 81.2,
        generationMethods: ["gene_target", "pathway"],
        matchedGenes: ["DHFR", "TNF"],
        matchedPathways: ["R-HSA-6785807"],
        explanation: {
          provider: "deterministic",
          summary:
            "Methotrexate ranks first on dense folate-metabolism and inflammatory gene-target overlap, reinforced by pathway and ML evidence.",
          limitations: DISCLAIMER,
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.88,
              contributionPoints: 30.1,
              supportingIds: ["DHFR", "TNF"],
              description: "Strong disease-gene / drug-target intersection.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.75,
              contributionPoints: 25.7,
              supportingIds: ["R-HSA-6785807"],
              description: "Interleukin / immune signalling pathway overlap.",
            },
            {
              name: "ml",
              available: true,
              value: 0.74,
              contributionPoints: 25.4,
              supportingIds: [],
              description: "High similarity to labeled clinical-indication geometry.",
            },
          ],
        },
      },
      {
        rank: 2,
        drugId: "DRUG:000455",
        drugName: "Tocilizumab",
        diseaseId: "MONDO_0008389",
        diseaseName: "Rheumatoid arthritis",
        repurposingScore: 72.0,
        generationMethods: ["gene_target", "pathway"],
        matchedGenes: ["IL6R", "IL6"],
        matchedPathways: ["R-HSA-6785807"],
        explanation: {
          provider: "deterministic",
          summary:
            "Tocilizumab is prioritized through IL-6 receptor biology shared with rheumatoid arthritis disease genes.",
          limitations: "Hypothesis generation only.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.84,
              contributionPoints: 28.7,
              supportingIds: ["IL6R", "IL6"],
              description: "IL-6 / IL-6R target bridge.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.7,
              contributionPoints: 23.9,
              supportingIds: ["R-HSA-6785807"],
              description: "Cytokine signalling pathway overlap.",
            },
            {
              name: "ml",
              available: true,
              value: 0.57,
              contributionPoints: 19.4,
              supportingIds: [],
              description: "Moderate ML contribution.",
            },
          ],
        },
      },
      {
        rank: 3,
        drugId: "DRUG:000612",
        drugName: "Hydroxychloroquine",
        diseaseId: "MONDO_0008389",
        diseaseName: "Rheumatoid arthritis",
        repurposingScore: 55.4,
        generationMethods: ["pathway"],
        matchedGenes: ["TLR9"],
        matchedPathways: ["R-HSA-168898"],
        explanation: {
          provider: "deterministic",
          summary:
            "Hydroxychloroquine appears via Toll-like receptor pathway context with weaker gene-target density than higher ranks.",
          limitations: "Not a medical recommendation.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.4,
              contributionPoints: 13.7,
              supportingIds: ["TLR9"],
              description: "Sparse innate-immunity gene bridge.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.68,
              contributionPoints: 23.2,
              supportingIds: ["R-HSA-168898"],
              description: "Toll-like receptor cascades overlap.",
            },
            {
              name: "ml",
              available: true,
              value: 0.54,
              contributionPoints: 18.5,
              supportingIds: [],
              description: "Mid-range ML output.",
            },
          ],
        },
      },
    ],
  },
  "alzheimer disease": {
    diseaseId: "MONDO_0004975",
    diseaseName: "Alzheimer disease",
    nCandidates: 3,
    source: "demo",
    disclaimer: DISCLAIMER,
    candidates: [
      {
        rank: 1,
        drugId: "DRUG:000018",
        drugName: "Donepezil",
        diseaseId: "MONDO_0004975",
        diseaseName: "Alzheimer disease",
        repurposingScore: 76.9,
        generationMethods: ["gene_target", "pathway"],
        matchedGenes: ["ACHE", "APP"],
        matchedPathways: ["R-HSA-1489509"],
        explanation: {
          provider: "deterministic",
          summary:
            "Donepezil ranks highest on cholinesterase gene-target evidence aligned with Alzheimer-associated cholinergic pathways.",
          limitations: DISCLAIMER,
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.86,
              contributionPoints: 29.4,
              supportingIds: ["ACHE"],
              description: "Acetylcholinesterase target bridge.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.72,
              contributionPoints: 24.6,
              supportingIds: ["R-HSA-1489509"],
              description: "Neurotransmitter system pathway overlap.",
            },
            {
              name: "ml",
              available: true,
              value: 0.67,
              contributionPoints: 22.9,
              supportingIds: [],
              description: "Strong ML resemblance to labeled indication pairs.",
            },
          ],
        },
      },
      {
        rank: 2,
        drugId: "DRUG:000290",
        drugName: "Memantine",
        diseaseId: "MONDO_0004975",
        diseaseName: "Alzheimer disease",
        repurposingScore: 68.3,
        generationMethods: ["gene_target", "pathway"],
        matchedGenes: ["GRIN1", "GRIN2A"],
        matchedPathways: ["R-HSA-442755"],
        explanation: {
          provider: "deterministic",
          summary:
            "Memantine is prioritized through NMDA receptor gene and pathway bridges relevant to Alzheimer disease biology in the knowledge graph.",
          limitations: "Hypothesis-generating only.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.78,
              contributionPoints: 26.7,
              supportingIds: ["GRIN1", "GRIN2A"],
              description: "NMDA receptor subunit target overlap.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.7,
              contributionPoints: 23.9,
              supportingIds: ["R-HSA-442755"],
              description: "NMDA receptor activation pathway overlap.",
            },
            {
              name: "ml",
              available: true,
              value: 0.52,
              contributionPoints: 17.7,
              supportingIds: [],
              description: "Moderate ML contribution.",
            },
          ],
        },
      },
      {
        rank: 3,
        drugId: "DRUG:000740",
        drugName: "Ibuprofen",
        diseaseId: "MONDO_0004975",
        diseaseName: "Alzheimer disease",
        repurposingScore: 44.7,
        generationMethods: ["pathway"],
        matchedGenes: ["PTGS2"],
        matchedPathways: ["R-HSA-140480"],
        explanation: {
          provider: "deterministic",
          summary:
            "Ibuprofen appears lower via inflammatory pathway context without dense disease-gene target overlap for Alzheimer disease.",
          limitations: "Not evidence of clinical benefit.",
          biologicalEvidence: [
            {
              name: "gene_target",
              available: true,
              value: 0.29,
              contributionPoints: 9.9,
              supportingIds: ["PTGS2"],
              description: "Weak COX-2 gene bridge.",
            },
            {
              name: "pathway",
              available: true,
              value: 0.58,
              contributionPoints: 19.8,
              supportingIds: ["R-HSA-140480"],
              description: "Prostaglandin biosynthesis pathway overlap.",
            },
            {
              name: "ml",
              available: true,
              value: 0.44,
              contributionPoints: 15.0,
              supportingIds: [],
              description: "Low-to-moderate ML signal.",
            },
          ],
        },
      },
    ],
  },
};

function normalizeKey(q: string): string {
  return q.trim().toLowerCase().replace(/\s+/g, " ");
}

export function lookupDemoSearch(query: string): SearchResult | null {
  const key = normalizeKey(query);
  if (DEMO_LIBRARY[key]) return structuredClone(DEMO_LIBRARY[key]);

  const alias: Record<string, string> = {
    gbm: "glioblastoma",
    parkinson: "parkinson disease",
    parkinsons: "parkinson disease",
    "parkinson's disease": "parkinson disease",
    ra: "rheumatoid arthritis",
    alzheimer: "alzheimer disease",
    alzheimers: "alzheimer disease",
    "alzheimer's disease": "alzheimer disease",
  };

  const mapped = alias[key];
  if (mapped && DEMO_LIBRARY[mapped]) return structuredClone(DEMO_LIBRARY[mapped]);

  // Fuzzy: match suggestion names contained in query or vice versa
  for (const [k, result] of Object.entries(DEMO_LIBRARY)) {
    if (key.includes(k) || k.includes(key)) return structuredClone(result);
  }

  return null;
}
