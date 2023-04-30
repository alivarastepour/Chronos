let isThemeDark: boolean = false;

let color: string = "";

export const addHoverStyle = () => {
  const elements: (HTMLElement | null)[] = [1, 2, 3, 4, 5, 6].map((num) =>
    document.getElementById(`item-${num}`)
  );

  elements.forEach((element: HTMLElement | null) => {
    element?.addEventListener("mousemove", (event: MouseEvent) => {
      const elementRect: DOMRect = element.getBoundingClientRect();

      const newCenterX: number = event.clientX - elementRect.left;
      const newCenterY: number = event.clientY - elementRect.top;

      isThemeDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (isThemeDark) color = "rgba(25, 24, 37, 0.9) , #191825";
      else color = "#ffe5e5 , rgba(255, 229, 229, 0.1) ";

      element.style.background = "none";
      element.style.backgroundImage = `radial-gradient(circle at ${newCenterX}px ${newCenterY}px, ${color})`;
    });

    elements.forEach((element: HTMLElement | null) => {
      element?.addEventListener("mouseleave", () => {
        element.style.backgroundColor = color.split(",")[0];
      });
    });
  });
};


