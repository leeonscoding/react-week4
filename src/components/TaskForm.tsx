import { useState, type FormEvent } from "react";
import { useTaskDispatch } from "../state/TaskContext";

export function TaskForm() {
  const dispatch = useTaskDispatch(); // no state subscription -> no needless re-renders
  const [title, setTitle] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    dispatch({
      type: "added",
      task: { id: crypto.randomUUID(), title: trimmed, done: false },
    });
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task..."
        aria-label="Task title"
      />
      <button type="submit">Add</button>
    </form>
  );
}
