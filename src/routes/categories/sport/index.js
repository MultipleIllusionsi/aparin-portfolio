import { h } from "preact";
import { Link } from "preact-router";
import cn from "classnames";

import style from "./index.scss";
import gridStyles from "./grid.scss";

import CategoriesList from "../../../components/CategoriesList";

const CDN_HOST = `https://res.cloudinary.com/aparinsite/image/upload`;

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
          <img
            id="img"
            src={`${CDN_HOST}/v1609840806/1920px/Ragby1_e7b8ou.png`}
            srcset={`${CDN_HOST}/c_scale,w_640/v1609840806/1920px/Ragby1_e7b8ou.png 640w, 
            ${CDN_HOST}/c_scale,w_920/v1609840806/1920px/Ragby1_e7b8ou.png 920w, 
            ${CDN_HOST}/c_scale,w_1280/v1609840806/1920px/Ragby1_e7b8ou.png 1280w, 
            ${CDN_HOST}/c_scale,w_1600/v1609840806/1920px/Ragby1_e7b8ou.png 1600w,
            ${CDN_HOST}/v1609840806/1920px/Ragby1_e7b8ou.png 2000w`}
            alt="Ragby first photo"
          />
        </div>

        <div className={cn(gridStyles.cl, gridStyles.centerSide)}>
          <img
            id="img"
            src={`${CDN_HOST}/v1609840806/1920px/Ragby2_rz9r5i.png`}
            srcset={`${CDN_HOST}/c_scale,w_640/v1609840806/1920px/Ragby2_rz9r5i 640w, 
            ${CDN_HOST}/c_scale,w_920/v1609840806/1920px/Ragby2_rz9r5i 920w, 
            ${CDN_HOST}/c_scale,w_1280/v1609840806/1920px/Ragby2_rz9r5i 1280w, 
            ${CDN_HOST}/c_scale,w_1600/v1609840806/1920px/Ragby2_rz9r5i 1600w,
            ${CDN_HOST}/v1609840806/1920px/Ragby2_rz9r5i 2000w`}
            alt="Ragby second photo"
          />
        </div>

        <div className={cn(gridStyles.cl, gridStyles.centerSide)}>
          <img
            id="img"
            src={`${CDN_HOST}/v1609840806/1920px/Sea1_sirzmn.png`}
            srcset={`${CDN_HOST}/c_scale,w_640/v1609840806/1920px/Sea1_sirzmn.png 640w, 
            ${CDN_HOST}/c_scale,w_920/v1609840806/1920px/Sea1_sirzmn.png 920w, 
            ${CDN_HOST}/c_scale,w_1280/v1609840806/1920px/Sea1_sirzmn.png 1280w, 
            ${CDN_HOST}/c_scale,w_1600/v1609840806/1920px/Sea1_sirzmn.png 1600w,
            ${CDN_HOST}/v1609840806/1920px/Sea1_sirzmn.png 2000w`}
            className={cn(gridStyles.cl10, gridStyles.rightSide)}
            alt="Sea first photo"
          />
        </div>

        <div className={cn(gridStyles.cl, gridStyles.centerSide)}>
          <img
            id="img"
            src={`${CDN_HOST}/v1609840806/1920px/Sand1_kha7fw.png`}
            srcset={`${CDN_HOST}/c_scale,w_640/v1609840806/1920px/Sand1_kha7fw.png 640w, 
            ${CDN_HOST}/c_scale,w_920/v1609840806/1920px/Sand1_kha7fw.png 920w, 
            ${CDN_HOST}/c_scale,w_1280/v1609840806/1920px/Sand1_kha7fw.png 1280w, 
            ${CDN_HOST}/c_scale,w_1600/v1609840806/1920px/Sand1_kha7fw.png 1600w,
            ${CDN_HOST}/v1609840806/1920px/Sand1_kha7fw.png 2000w`}
            alt="Sand first photo"
          />
        </div>

        <div className={gridStyles.cl}>
          <img
            id="img"
            src={`${CDN_HOST}/v1609840806/1920px/Sea2_s99pfq.png`}
            srcset={`${CDN_HOST}/c_scale,w_640/v1609840806/1920px/Sea2_s99pfq.png 640w, 
            ${CDN_HOST}/c_scale,w_920/v1609840806/1920px/Sea2_s99pfq.png 920w, 
            ${CDN_HOST}/c_scale,w_1280/v1609840806/1920px/Sea2_s99pfq.png 1280w, 
            ${CDN_HOST}/c_scale,w_1600/v1609840806/1920px/Sea2_s99pfq.png 1600w,
            ${CDN_HOST}/v1609840806/1920px/Sea2_s99pfq.png 2000w`}
            className={cn(gridStyles.cl12, gridStyles.leftSide)}
            alt="Sea second photo"
          />
        </div>

        <div className={gridStyles.fullSize}>
          <img
            id="img"
            src={`${CDN_HOST}/v1609840806/1920px/Snow1_zwsp7q.png`}
            srcset={`${CDN_HOST}/c_scale,w_640/v1609840806/1920px/Snow1_zwsp7q.png 640w, 
            ${CDN_HOST}/c_scale,w_920/v1609840806/1920px/Snow1_zwsp7q.png 920w, 
            ${CDN_HOST}/c_scale,w_1280/v1609840806/1920px/Snow1_zwsp7q.png 1280w, 
            ${CDN_HOST}/c_scale,w_1600/v1609840806/1920px/Snow1_zwsp7q.png 1600w,
            ${CDN_HOST}/v1609840806/1920px/Snow1_zwsp7q.png 2000w`}
            alt="Snow first photo"
          />
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
            src={`${CDN_HOST}/v1609840806/1920px/Snow2_qopgh1.png`}
            srcset={`${CDN_HOST}/c_scale,w_640/v1609840806/1920px/Snow2_qopgh1.png 640w, 
            ${CDN_HOST}/c_scale,w_920/v1609840806/1920px/Snow2_qopgh1.png 920w, 
            ${CDN_HOST}/c_scale,w_1280/v1609840806/1920px/Snow2_qopgh1.png 1280w, 
            ${CDN_HOST}/c_scale,w_1600/v1609840806/1920px/Snow2_qopgh1.png 1600w,
            ${CDN_HOST}/v1609840806/1920px/Snow2_qopgh1.png 2000w`}
            className={gridStyles.cl7}
            alt="Snow second photo"
          />

          <img
            id="img"
            src={`${CDN_HOST}/v1609840806/1920px/Snow3_sfx4wh.png`}
            srcset={`${CDN_HOST}/c_scale,w_640/v1609840806/1920px/Snow3_sfx4wh.png 640w, 
            ${CDN_HOST}/c_scale,w_920/v1609840806/1920px/Snow3_sfx4wh.png 920w, 
            ${CDN_HOST}/c_scale,w_1280/v1609840806/1920px/Snow3_sfx4wh.png 1280w, 
            ${CDN_HOST}/c_scale,w_1600/v1609840806/1920px/Snow3_sfx4wh.png 1600w,
            ${CDN_HOST}/v1609840806/1920px/Snow3_sfx4wh.png 2000w`}
            className={cn(gridStyles.cl4, gridStyles.rightSide)}
            alt="Snow third photo"
          />
        </div>

        <div className={gridStyles.fullSize}>
          <img
            id="img"
            src={`${CDN_HOST}/v1609840806/1920px/Snow4_cfw5g4.png`}
            srcset={`${CDN_HOST}/c_scale,w_640/v1609840806/1920px/Snow4_cfw5g4.png 640w, 
            ${CDN_HOST}/c_scale,w_920/v1609840806/1920px/Snow4_cfw5g4.png 920w, 
            ${CDN_HOST}/c_scale,w_1280/v1609840806/1920px/Snow4_cfw5g4.png 1280w, 
            ${CDN_HOST}/c_scale,w_1600/v1609840806/1920px/Snow4_cfw5g4.png 1600w,
            ${CDN_HOST}/v1609840806/1920px/Snow4_cfw5g4.png 2000w`}
            alt="Snow fourth photo"
          />
        </div>
      </div>

      <div className={gridStyles.categoriesListWrapper}>
        <CategoriesList thisCategory={path} />
      </div>
    </section>
  );
};

export default Sport;
