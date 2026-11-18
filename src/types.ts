export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type Filter = "all" | "active" | "done";

export type TaskState = {
  tasks: Task[];
  filter: Filter;
};

// A discriminated union: `type` tells TypeScript which payload to expect.
export type TaskAction =
  | { type: "added"; task: Task }
  | { type: "toggled"; id: string }
  | { type: "removed"; id: string }
  | { type: "filterChanged"; filter: Filter }
  | { type: "completedCleared" };
