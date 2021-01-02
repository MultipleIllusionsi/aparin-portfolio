import { h } from "preact";
import cn from "classnames";
import { Link } from "preact-router";

import style from "./index.scss";
import gridStyles from "./grid.scss";

import Ragby1 from "../../../assets/images/Ragby1.png";
import Ragby2 from "../../../assets/images/Ragby2.png";
import Sea1 from "../../../assets/images/Sea1.png";
import Sand1 from "../../../assets/images/Sand1.png";

const Sport = () => {
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
        <img
          src={Ragby1}
          className={gridStyles.fullSize}
          alt="Ragby first photo"
        />

        <img
          src={Ragby2}
          className={cn(gridStyles.cl, gridStyles.cl12)}
          alt="Ragby second photo"
        />

        <div className={gridStyles.cl}>
          <img
            src={Sea1}
            className={cn(gridStyles.cl10, gridStyles.rightSide)}
            alt="Sea first photo"
          />
        </div>

        <div className={gridStyles.cl}>
          <img
            src={Sand1}
            className={cn(gridStyles.cl12, gridStyles.centerSide)}
            alt="Sand first photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Sport;
