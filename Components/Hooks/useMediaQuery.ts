import { useEffect, useState } from "react";

type TqueryKey = "min-width" | "max-width" | "min-height" | "max-height";

type TuseMediaQueryAuxilary = {
  [key in TqueryKey]?: number;
};

type TuseMediaQuery =
  | Required<Pick<TuseMediaQueryAuxilary, "max-height">>
  | Required<Pick<TuseMediaQueryAuxilary, "min-height">>
  | Required<Pick<TuseMediaQueryAuxilary, "max-width">>
  | Required<Pick<TuseMediaQueryAuxilary, "min-width">>;

type TwindowRect = {
  width: number;
  height: number;
};

const useMediaQuery = ({ queries }: { queries: TuseMediaQuery[] }) => {
  const [windowRect, setWindowRect] = useState<TwindowRect>({
    width: 0,
    height: 0,
  });

  const [queryResult, setQueryResult] = useState<boolean[]>([]);

  const resizeListener = (event: Event): void => {
    const target: Window = event.target as Window;
    setWindowRect({
      width: target.innerWidth,
      height: target.innerHeight,
    });
  };

  const isQueryTrue = (
    selector: TqueryKey,
    value: number,
    width: number,
    height: number
  ) => {
    let res: boolean;
    switch (selector) {
      case "max-height":
        res = height <= value;
        break;
      case "min-height":
        res = height >= value;
        break;
      case "max-width":
        res = width <= value;
        break;
      case "min-width":
        res = width >= value;
        break;
    }
    return res;
  };

  const getQueryResults = (): boolean[] => {
    const { width, height }: TwindowRect = windowRect;

    const result: boolean[] = [];

    queries.forEach((query: TuseMediaQuery) => {
      const [selector, value] = Object.entries(query)[0];
      const currentQueryResult = isQueryTrue(
        selector as TqueryKey,
        value,
        width,
        height
      );
      result.push(currentQueryResult);
    });
    return result;
  };

  useEffect(() => {
    window.addEventListener("resize", resizeListener);

    setWindowRect({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    const queryResults: boolean[] = getQueryResults();
    setQueryResult(queryResults);
  }, [windowRect]);

  return queryResult;
};

export default useMediaQuery;
