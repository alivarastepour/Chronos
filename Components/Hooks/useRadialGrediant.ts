import { useEffect } from "react";

import getUserTheme from "@/public/util/userTheme";
import getMousePosition from "@/public/util/mousePosition";

import type { TuserTheme } from "@/public/util/userTheme";

type TcolorShade = {
  light: string;
  dark: string;
};

interface IuseRadialGradient {
  elements: React.RefObject<HTMLDivElement>[];
  colorShade: TcolorShade;
}

const useRadialGradient = ({ elements, colorShade }: IuseRadialGradient) => {
  let color: string = "";

  const setColorShade = (): string => {
    const theme: TuserTheme = getUserTheme();
    return theme === "dark" ? colorShade.dark : colorShade.light;
  };

  const refEventRoutine = (event: MouseEvent, refTarget: HTMLElement): void => {
    const [newCenterX, newCenterY]: [newCenterX: number, newCenterY: number] =
      getMousePosition(refTarget, event);

    color = setColorShade();

    refTarget.style.background = "none";
    refTarget.style.backgroundImage = `radial-gradient(circle at ${newCenterX}px ${newCenterY}px, ${color})`;
  };

  const refRemoveEventRoutine = (refTarget: HTMLElement): void => {
    refTarget.style.backgroundImage = "unset";
    refTarget.style.backgroundColor = "";
  };

  useEffect(() => {
    elements.forEach((element: React.RefObject<HTMLElement>) => {
      const refTarget = element.current as HTMLElement;
      refTarget?.addEventListener("mousemove", (event: MouseEvent) =>
        refEventRoutine(event, refTarget)
      );

      elements.forEach((element: React.RefObject<HTMLElement>) => {
        const refTarget = element.current as HTMLElement;
        refTarget.addEventListener("mouseleave", () =>
          refRemoveEventRoutine(refTarget)
        );
      });
    }, []);
  });

  return null;
};

export default useRadialGradient;
