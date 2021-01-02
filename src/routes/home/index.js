import { h } from "preact";
import { Link } from "preact-router";
import style from "./index.scss";

const CATEGORIES = [
  { name: "Люди" },
  { name: "Путешествия" },
  { name: "Спорт", link: "/sport" },
  { name: "Вечеринки" },
];

const Home = () => (
  <section class={style.home}>
    <ul>
      {CATEGORIES.map(({ name, link }) => (
        <li className={!link ? style.noLink : style.hasLink}>
          <Link href={link}>{name}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export default Home;
