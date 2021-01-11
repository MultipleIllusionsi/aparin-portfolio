import {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "preact/hooks";

import { MathUtils } from "../../utils/utils";
import { useConstructor, useWindowData } from "../../utils/hooks";
// import Item from "../Item/Item";

const SmoothScroll = ({ main, scrollable }) => {
  const { winsize, docScroll } = useWindowData();
  // console.log("docScroll", docScroll);
  // amount to interpolate
  const ease = 0.1;
  const initialRenderedStyles = {
    previous: 0,
    current: 0,
  };

  const [renderedStyles, setRenderedStyles] = useState(initialRenderedStyles);
  // const [items, setItems] = useState([]);
  // const [count, setCount] = useState(0);

  useConstructor(() => {
    console.log("winsize", winsize);

    // set main styles
    main.style.position = "fixed";
    main.style.width = main.style.height = "100%";
    main.style.top = main.style.left = 0;
    main.style.overflow = "hidden";

    // sets the initial value (no interpolation) - translate the scroll value
    setRenderedStyles((prev) => ({
      ...prev,
      current: docScroll,
      previous: docScroll,
    }));

    // translate the scrollable element
    scrollable.style.transform = `translate3d(0,${
      -1 * renderedStyles.previous
    }px,0)`;

    // нужно просто инициализировать этот массив из классов, и потом уже к нему докидывать обновленные значения скролла и окна, а не каждый
    // будет работать, если будут загружены изображения (иначе ошибка)
    // main
    //   .querySelectorAll("#content > div")
    //   .forEach((item) =>
    //     setItems((prev) => [...prev, new Item(item, winsize, docScroll)])
    //   );

    // console.log("items", items);
  });

  useLayoutEffect(() => {
    const setSize = () => {
      if (scrollable) {
        document.body.style.height = `${scrollable.scrollHeight}px`;
      }
    };

    setSize();

    window.addEventListener("resize", setSize);
    return () => {
      document.body.style.height = "auto";
      window.removeEventListener("resize", setSize);
    };
  }, [scrollable]);

  const render = useCallback(() => {
    setRenderedStyles((prev) => ({
      current: docScroll,
      previous: MathUtils.lerp(prev.previous, prev.current, ease),
    }));

    // translates the scrollable element
    if (scrollable) {
      scrollable.style.transform = `translate3d(0,${
        -1 * renderedStyles.previous
      }px,0)`;
    }
    // for (const item of items) {
    //   if (item.isVisible) {
    //     item.render();
    //   }
    // }

    // loop..
    // requestAnimationFrame(render);
  }, [docScroll, renderedStyles.previous, scrollable]);

  useEffect(() => {
    render();
  }, [docScroll, render]);

  // useEffect(() => {
  //   requestAnimationFrame(render);
  //   return () => cancelAnimationFrame(render);
  // }, [render]);

  // start the render loop
  // requestAnimationFrame(render);
};

export default SmoothScroll;
