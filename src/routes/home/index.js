import { h } from "preact";
import style from "./style.scss";

const CATEGORIES = [
  { name: "Люди" },
  { name: "Путешествия" },
  { name: "Спорт" },
  { name: "Вечеринки" },
];

const Home = () => (
  <section class={style.home}>
    <ul>
      {CATEGORIES.map(({ name }) => (
        <li>{name}</li>
      ))}
    </ul>
  </section>
);

export default Home;
