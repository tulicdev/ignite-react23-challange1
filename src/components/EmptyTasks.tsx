import styles from "./EmptyTasks.module.css";

import { ClipboardText } from "phosphor-react";

export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <div className={styles.svg}>
        <ClipboardText size={56}/>
      </div>
      <div className={styles.textos}>
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
