import styles from "./Task.module.css";

import { Trash } from "phosphor-react";
import { ITask } from "./ToDo";

interface TaskProps extends ITask {
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

export function Task({
  id,
  description,
  isDone,
  deleteTask,
  toggleTask,
}: TaskProps) {
  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <input className={styles.hidden} type="checkbox" name="" id={`${id}`} />
        <label
          onClick={() => toggleTask(id)}
          className={`${styles.symbol} `.concat(isDone ? styles.doneSymbol : "")}
          htmlFor={`${id}`}
        ></label>
        <label
          onClick={() => toggleTask(id)}
          htmlFor={`${id}`}
          className={styles.taskDescription.concat(
            ` ${isDone ? styles.taskDescriptionChecked : ""}`
          )}
        >
          {description}
        </label>
      </div>
      <button
        title="Deletar tarefa"
        className={styles.trashButton}
        onClick={() => deleteTask(id)}
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
