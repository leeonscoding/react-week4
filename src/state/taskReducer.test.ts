import { describe, expect, it } from "vitest";
import { taskReducer } from "./taskReducer";
import type { TaskState } from "../types";

const base: TaskState = {
  filter: "all",
  tasks: [
    { id: "a", title: "A", done: false },
    { id: "b", title: "B", done: true },
  ],
};

describe("taskReducer", () => {
  it("adds a task without mutating the previous state", () => {
    const next = taskReducer(base, {
      type: "added",
      task: { id: "c", title: "C", done: false },
    });
    expect(next.tasks).toHaveLength(3);
    expect(base.tasks).toHaveLength(2);
  });

  it("toggles only the matching task", () => {
    const next = taskReducer(base, { type: "toggled", id: "a" });
    expect(next.tasks.map((t) => t.done)).toEqual([true, true]);
  });

  it("removes a task", () => {
    const next = taskReducer(base, { type: "removed", id: "a" });
    expect(next.tasks.map((t) => t.id)).toEqual(["b"]);
  });

  it("clears completed tasks", () => {
    const next = taskReducer(base, { type: "completedCleared" });
    expect(next.tasks.map((t) => t.id)).toEqual(["a"]);
  });

  it("changes the filter", () => {
    expect(taskReducer(base, { type: "filterChanged", filter: "done" }).filter).toBe("done");
  });
});
