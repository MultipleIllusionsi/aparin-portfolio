import { h } from "preact";
import { Link } from "preact-router";

import style from "./index.scss";

const CATEGORIES = [
  { name: "Люди" },
  { name: "Путешествия" },
  { name: "Спорт", link: "/sport" },
  { name: "Вечеринки" },
];

const CategoriesList = ({ thisCategory = false }) => {
  return (
    <ul className={style.categoriesList}>
      {CATEGORIES.map(({ name, link }) => (
        <li className={!link ? style.noLink : style.hasLink}>
          {thisCategory === link ? (
            <a href="#">{name}</a>
          ) : (
            <Link href={link}>{name}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
