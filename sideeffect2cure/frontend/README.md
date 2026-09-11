# Frontend — SideEffect2Cure AI

React + TypeScript dashboard for drug-repurposing discovery.

## Stack

- Vite + React 19 + TypeScript
- React Router
- Classic serif typography on a black grid canvas

## Run

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

The Vite dev server proxies `/api` to `http://127.0.0.1:8000`. Start the FastAPI
backend if you want live `/api/health` and `/api/meta`. Ranking falls back to
curated demo results until a `/api/rank` endpoint exists.

```bash
npm run build    # production bundle → dist/
npm run preview  # preview the build
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Brand hero + disease search |
| `/explore` | Curated disease tiles |
| `/results?q=` | Ranked candidates + evidence + explanation |
| `/about` | Pipeline meaning & disclaimers |

All output is hypothesis-generating research prioritization — not clinical advice.
