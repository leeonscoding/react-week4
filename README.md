# React State Patterns

Context API + `useReducer` + component composition, in one small Task Board.

## Run it (Windows, macOS, Linux)

Requires Node.js 20+.

```bash
npm install
npm run dev     # http://localhost:5173
npm test        # reducer unit tests
npm run build   # type-check + production build
```

## Structure

```
src/
├── types.ts                 # Task, state, and the action union
├── state/
│   ├── taskReducer.ts       # pure reducer
│   ├── taskReducer.test.ts
│   └── TaskContext.tsx      # provider + custom hooks
└── components/
    ├── Card.tsx             # compound component
    ├── TaskForm.tsx
    ├── TaskList.tsx
    └── FilterBar.tsx
```
