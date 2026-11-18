import { Card } from "./components/Card";
import { FilterBar } from "./components/FilterBar";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TaskProvider } from "./state/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <main>
        <Card>
          <Card.Header>
            <h1>Task Board</h1>
            <TaskForm />
          </Card.Header>
          <Card.Body>
            <TaskList />
          </Card.Body>
          <Card.Footer>
            <FilterBar />
          </Card.Footer>
        </Card>
      </main>
    </TaskProvider>
  );
}
