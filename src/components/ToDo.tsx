import { useState } from "react";
import Plus from "../assets/plus.svg?react";

import styleAddTask from "./AddTask.module.css";
import stylesInfos from "./Infos.module.css";
import { EmptyTasks } from "./EmptyTasks";
import { Task } from "./Task";

export interface ITask {
  id: number;
  description: string;
  isDone: boolean;
}

export function ToDo() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState("");

  function handleNewTaskChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskDescription(event.target.value);
  }

  function handleCreateNewTask(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      description: newTaskDescription,
      isDone: false,
    };
    setTasks((state) => [...state, newTask]);
    setNewTaskDescription("");
  }

  function handleToggleTask(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: number) {
    const filtredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filtredTasks);
  }

  return (
    <>
      <form className={styleAddTask.container}>
        <textarea
          required
          onChange={handleNewTaskChange}
          placeholder="Adicionar uma nova tarefa"
          value={newTaskDescription}
        />
        <button type="submit" onClick={handleCreateNewTask}>
          <span>Criar</span>
          <Plus />
        </button>
      </form>

      <div className={stylesInfos.container}>
        <div className={stylesInfos.table}>
          <span className={stylesInfos.created__text}>Tarefas criadas</span>
          <span className={stylesInfos.numbers}>{tasks.length}</span>
        </div>
        <div className={stylesInfos.table}>
          <span className={stylesInfos.completed__text}>Concluídas</span>
          <span className={stylesInfos.numbers}>
            {tasks.length === 0
              ? "0"
              : `${tasks.filter((task) => task.isDone).length} de ${
                  tasks.length
                }`}
          </span>
        </div>
      </div>
      <div>
        {tasks.length === 0 ? (
          <EmptyTasks />
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              isDone={task.isDone}
              deleteTask={handleDeleteTask}
              toggleTask={handleToggleTask}
            />
          ))
        )}
      </div>
    </>
  );
}
