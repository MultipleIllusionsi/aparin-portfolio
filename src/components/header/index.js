import { h } from "preact";
import { Link } from "preact-router/match";

import style from "./index.scss";

const Header = () => (
  <header class={style.header}>
    <Link activeClassName={style.active} href="/">
      Алексей Апарин
    </Link>
    <Link activeClassName={style.active} href="/about">
      О себе
    </Link>
  </header>
);

export default Header;
