import { useEffect, useState } from "react";

type TqueryKey = "min-width" | "max-width" | "min-height" | "max-height";

type Tquery = {
  [key in TqueryKey]?: number;
};

type TwindowRect = {
  width: number;
  height: number;
};

const useMediaQuery = ({ queries }: { queries: Tquery[] }) => {
  const [windowRect, setWindowRect] = useState<TwindowRect>({
    width: 0,
    height: 0,
  });

  const [queryResult, setQueryResult] = useState();

  const resizeListener = (event: Event) => {
    const target: Window = event.target as Window;
    setWindowRect({
      width: target.innerWidth,
      height: target.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeListener);
    () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    console.log(queries);
  }, [windowRect]);

  return null;
};
export default useMediaQuery;
