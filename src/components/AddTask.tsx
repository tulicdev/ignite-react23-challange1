import Plus from "../assets/plus.svg?react";
import style from "./AddTask.module.css";

export function AddTask() {
  return (
    <section className={style.container}>
      <textarea placeholder="Adicionar uma nova tarefa" />
      <button>
        <span>Criar</span>
        <Plus />
      </button>
    </section>
  );
}
