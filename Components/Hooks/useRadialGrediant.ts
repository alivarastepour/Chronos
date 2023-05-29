import { useEffect, useState } from "react";
import getUserTheme from "@/public/util/userTheme";
import type { TuserTheme } from "@/public/util/userTheme";
import getMousePosition from "@/public/util/mousePosition";
type TcolorShade = {
  light: string;
  dark: string;
};

interface IuseRadialGradient {
  elements: React.RefObject<HTMLDivElement>[];
  colorShade: TcolorShade;
}

const useRadialGradient = ({ elements, colorShade }: IuseRadialGradient) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    elements.forEach((element: React.RefObject<HTMLElement>) => {
      const refTarget = element.current as HTMLElement;
      refTarget?.addEventListener("mousemove", (event: MouseEvent) => {
        const [newCenterX, newCenterY]: [
          newCenterX: number,
          newCenterY: number
        ] = getMousePosition(refTarget, event);

        const theme: TuserTheme = getUserTheme();

        setColor((_) => {
          return theme === "dark" ? colorShade.dark : colorShade.light;
        });

        refTarget.style.background = "none";
        refTarget.style.backgroundImage = `radial-gradient(circle at ${newCenterX}px ${newCenterY}px, ${color})`;
      });

      elements.forEach((element: React.RefObject<HTMLElement>) => {
        const refTarget = element.current as HTMLElement;
        refTarget?.addEventListener("mouseleave", () => {
          refTarget.style.backgroundImage = "unset";
          refTarget.style.backgroundColor = color.split(",")[1];
        });
      });
    }, []);
  });

  return null;
};

export default useRadialGradient;
