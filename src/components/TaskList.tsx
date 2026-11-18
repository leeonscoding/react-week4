import { useTaskDispatch, useVisibleTasks } from "../state/TaskContext";

export function TaskList() {
  const tasks = useVisibleTasks();
  const dispatch = useTaskDispatch();

  if (tasks.length === 0) return <p className="empty">Nothing here.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? "done" : ""}>
          <label>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => dispatch({ type: "toggled", id: task.id })}
            />
            {task.title}
          </label>
          <button
            onClick={() => dispatch({ type: "removed", id: task.id })}
            aria-label={`Remove ${task.title}`}
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
