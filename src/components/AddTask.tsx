import { useState } from "react";
import Plus from "../assets/plus.svg?react";
import style from "./AddTask.module.css";

interface Task {
  description: string;
  isDone: boolean;
}

export function AddTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState("");

  function handleNewTaskChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskDescription(event.target.value);
    console.log(newTaskDescription);
  }

  function handleCreateNewTask(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    const task = { description: newTaskDescription, isDone: false };
    setTasks((state) => [...state, task]);
    setNewTaskDescription('');
  }

  return (
    <form className={style.container}>
      <textarea
        required
        onChange={handleNewTaskChange}
        placeholder="Adicionar uma nova tarefa"
      />
      <button type="submit" onClick={handleCreateNewTask}>
        <span>Criar</span>
        <Plus />
      </button>
    </form>
  );
}
