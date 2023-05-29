import { useEffect, useState } from "react";

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

  useEffect(() => {
    elements.forEach((element: React.RefObject<HTMLElement>) => {
      const refTarget = element.current as HTMLElement;
      refTarget?.addEventListener("mousemove", (event: MouseEvent) => {
        const [newCenterX, newCenterY]: [
          newCenterX: number,
          newCenterY: number
        ] = getMousePosition(refTarget, event);

        color = setColorShade();

        refTarget.style.background = "none";
        refTarget.style.backgroundImage = `radial-gradient(circle at ${newCenterX}px ${newCenterY}px, ${color})`;
      });

      elements.forEach((element: React.RefObject<HTMLElement>) => {
        const refTarget = element.current as HTMLElement;
        refTarget.addEventListener("mouseleave", () => {
          refTarget.style.backgroundImage = "unset";
          refTarget.style.backgroundColor = "";
        });
      });
    }, []);
  });

  return null;
};

export default useRadialGradient;
