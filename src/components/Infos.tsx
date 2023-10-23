import styles from "./Statistics.module.css";

export function Statistics() {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <span className={styles.created__text}>Tarefas criadas</span>
        <span className={styles.numbers}>0</span>
      </div>
      <div className={styles.table}>
        <span className={styles.completed__text}>Concluídas</span>
        <span className={styles.numbers}>0</span>
      </div>
    </div>
  );
}
