import { h } from "preact";

import CategoriesList from "../../components/CategoriesList";

import style from "./index.scss";

const Home = () => (
  <section class={style.home}>
    <CategoriesList />
  </section>
);

export default Home;
