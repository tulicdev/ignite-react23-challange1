import { EmptyTasks } from "./EmptyTasks";
import { Statistics } from "./Statistics";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <section className={styles.container}>
      <Statistics />
      {/* <EmptyTasks /> */}
      <Task />
    </section>
  )
}
