import { h } from "preact";
import { Link } from "preact-router";
import cn from "classnames";

import style from "./index.scss";
import gridStyles from "./grid.scss";

import Ragby1 from "../../../assets/images/Ragby1.png";
import Ragby2 from "../../../assets/images/Ragby2.png";

import Sea1 from "../../../assets/images/Sea1.png";
import Sea2 from "../../../assets/images/Sea2.png";
import Sand1 from "../../../assets/images/Sand1.png";

import Snow1 from "../../../assets/images/Snow1.png";
import Snow2 from "../../../assets/images/Snow2.png";
import Snow3 from "../../../assets/images/Snow3.png";
import Snow4 from "../../../assets/images/Snow4.png";
import CategoriesList from "../../../components/CategoriesList";

const Sport = ({ path = "" }) => {
  return (
    <section className={style.sport}>
      <div className={style.headingWrapper}>
        <div className={style.headingContainer}>
          <div className={style.backButton}>
            <Link href="/">« Назад</Link>
          </div>
          <h1 className={style.sectionHeading}>Спорт</h1>
        </div>
      </div>

      <div className={style.photosWrapper}>
        <div className={gridStyles.fullSize}>
          <img id="img" src={Ragby1} alt="Ragby first photo" />
        </div>

        <div className={cn(gridStyles.cl, gridStyles.centerSide)}>
          <img id="img" src={Ragby2} alt="Ragby second photo" />
        </div>

        <div className={cn(gridStyles.cl, gridStyles.centerSide)}>
          <img
            id="img"
            src={Sea1}
            className={cn(gridStyles.cl10, gridStyles.rightSide)}
            alt="Sea first photo"
          />
        </div>

        <div className={cn(gridStyles.cl, gridStyles.centerSide)}>
          <img id="img" src={Sand1} alt="Sand first photo" />
        </div>

        <div className={gridStyles.cl}>
          <img
            id="img"
            src={Sea2}
            className={cn(gridStyles.cl12, gridStyles.leftSide)}
            alt="Sea second photo"
          />
        </div>

        <div className={gridStyles.fullSize}>
          <img id="img" src={Snow1} alt="Snow first photo" />
        </div>

        <div
          className={cn(
            gridStyles.cl,
            gridStyles.flex,
            gridStyles.flexEnd,
            gridStyles.centerSide
          )}
        >
          <img
            id="img"
            src={Snow2}
            className={gridStyles.cl7}
            alt="Snow second photo"
          />

          <img
            id="img"
            src={Snow3}
            className={cn(gridStyles.cl4, gridStyles.rightSide)}
            alt="Snow third photo"
          />
        </div>

        <div className={gridStyles.fullSize}>
          <img id="img" src={Snow4} alt="Snow fourth photo" />
        </div>
      </div>

      <div className={gridStyles.categoriesListWrapper}>
        <CategoriesList thisCategory={path} />
      </div>
    </section>
  );
};

export default Sport;
