import { useEffect, useState, useRef } from "preact/hooks";

export const useWindowData = () => {
  const initialWinSize = { width: 0, height: 0 };
  const [winsize, setWinsize] = useState(initialWinSize);
  const [docScroll, setDocScroll] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const calcWinsize = () => {
      setWinsize({ width: window.innerWidth, height: window.innerHeight });
    };

    if (isFirstRender) {
      calcWinsize();
      setIsFirstRender(false);
    }

    window.addEventListener("resize", calcWinsize);
    return () => window.removeEventListener("resize", calcWinsize);
  }, [isFirstRender, winsize]);

  useEffect(() => {
    const getPageYScroll = () => {
      setDocScroll(window.pageYOffset || document.documentElement.scrollTop);
    };

    if (isFirstRender) {
      getPageYScroll();
      setIsFirstRender(false);
    }

    window.addEventListener("scroll", getPageYScroll);
    return () => window.removeEventListener("scroll", getPageYScroll);
  }, [isFirstRender, docScroll]);

  return {
    winsize,
    docScroll,
  };
};

export const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};
