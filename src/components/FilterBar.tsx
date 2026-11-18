import { useTaskDispatch, useTaskState } from "../state/TaskContext";
import type { Filter } from "../types";

const FILTERS: Filter[] = ["all", "active", "done"];

export function FilterBar() {
  const { filter, tasks } = useTaskState();
  const dispatch = useTaskDispatch();
  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <div className="filter-bar">
      <div>
        {FILTERS.map((f) => (
          <button
            key={f}
            aria-pressed={f === filter}
            onClick={() => dispatch({ type: "filterChanged", filter: f })}
          >
            {f}
          </button>
        ))}
      </div>
      <button
        disabled={doneCount === 0}
        onClick={() => dispatch({ type: "completedCleared" })}
      >
        Clear done ({doneCount})
      </button>
    </div>
  );
}
