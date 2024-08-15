import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.text !== taskToDelete));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
