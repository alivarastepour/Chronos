import { useEffect } from "react";

interface IuseAppear {
  target: React.RefObject<HTMLDivElement>;
  direction: "top" | "right" | "left" | "bottom";
  delay: number;
  directionOffset: number;
}

const useAppear = ({
  target,
  delay,
  direction,
  directionOffset,
}: IuseAppear) => {
  useEffect(() => {
    const element: HTMLElement = target.current as HTMLElement;

    const timer = setTimeout(() => {
      element.style[direction] = `${directionOffset}`;
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return null;
};

export default useAppear;
