import Logo from "../assets/rocket.svg?react";

import style from "./Header.module.css";

export function Header() {
  return (
    <>
      <header className={style.container}>
        <Logo />
        <div className={style.words}>
          <span className={style["words--blue"]}>to</span>
          <span className={style["words--purple-dark"]}>do</span>
        </div>
      </header>
    </>
  );
}
