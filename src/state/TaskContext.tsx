import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";
import type { Task, TaskAction, TaskState } from "../types";
import { initialState, taskReducer } from "./taskReducer";

// Two contexts: components that only dispatch (e.g. the form)
// don't re-render when the state changes.
const TaskStateContext = createContext<TaskState | null>(null);
const TaskDispatchContext = createContext<Dispatch<TaskAction> | null>(null);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskStateContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  );
}

// Custom hooks hide the context and fail loudly when used outside the provider.
export function useTaskState(): TaskState {
  const ctx = useContext(TaskStateContext);
  if (!ctx) throw new Error("useTaskState must be used inside <TaskProvider>");
  return ctx;
}

export function useTaskDispatch(): Dispatch<TaskAction> {
  const ctx = useContext(TaskDispatchContext);
  if (!ctx) throw new Error("useTaskDispatch must be used inside <TaskProvider>");
  return ctx;
}

// Derived data is computed, never stored in state.
export function useVisibleTasks(): Task[] {
  const { tasks, filter } = useTaskState();
  return useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.done);
    if (filter === "done") return tasks.filter((t) => t.done);
    return tasks;
  }, [tasks, filter]);
}
