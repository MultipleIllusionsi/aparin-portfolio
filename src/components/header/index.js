import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.scss";

const Header = () => (
  <header class={style.header}>
    <nav class={style.nav}>
      <ul class={style.list}>
        <Link activeClassName={style.active} href="/">
          Алексей Апарин
        </Link>
        <Link activeClassName={style.active} href="/about">
          О себе
        </Link>
      </ul>
    </nav>
  </header>
);

export default Header;
