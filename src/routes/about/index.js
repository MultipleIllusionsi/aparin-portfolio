import { h } from "preact";

import style from "./index.scss";

const About = () => {
  return (
    <div class={style.aboutPage}>
      <div class={style.aboutTextWrapper}>
        <div>
          Привет, я <span class={style.name}>Алексей Апарин</span>, молодой
          российский фотограф.
        </div>
        <div>
          Я делаю пленочные фотографии и заинтересован в креативных проектах.
        </div>
      </div>
    </div>
  );
};

export default About;
