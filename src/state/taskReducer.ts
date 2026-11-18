import type { TaskAction, TaskState } from "../types";

export const initialState: TaskState = {
  tasks: [
    { id: "1", title: "Read the useReducer docs", done: true },
    { id: "2", title: "Split context into state + dispatch", done: false },
  ],
  filter: "all",
};

// Pure function: same input -> same output, no side effects.
// That is why ids are created by the caller, not here.
export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "added":
      return { ...state, tasks: [...state.tasks, action.task] };

    case "toggled":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.id ? { ...t, done: !t.done } : t,
        ),
      };

    case "removed":
      return { ...state, tasks: state.tasks.filter((t) => t.id !== action.id) };

    case "filterChanged":
      return { ...state, filter: action.filter };

    case "completedCleared":
      return { ...state, tasks: state.tasks.filter((t) => !t.done) };

    default: {
      // Compile-time exhaustiveness check: add an action and forget a case
      // and TypeScript will complain here.
      const _exhaustive: never = action;
      return _exhaustive;
    }
  }
}
