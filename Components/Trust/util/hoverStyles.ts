let isThemeDark: boolean = false;

let color: string = "";

const addFadingBackground = (elements: (HTMLElement | null)[]) => {
  elements.forEach((element: HTMLElement | null) => {
    element?.addEventListener("mousemove", (event: MouseEvent) => {
      const elementRect: DOMRect = element.getBoundingClientRect();

      const newCenterX: number = event.clientX - elementRect.left;
      const newCenterY: number = event.clientY - elementRect.top;

      isThemeDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (isThemeDark) color = "rgb(66, 64, 89) , rgba(25, 24, 37, 0.9)";
      else color = " rgba(255, 229, 229, 0.1), #ffe5e5 ";

      element.style.background = "none";
      element.style.backgroundImage = `radial-gradient(circle at ${newCenterX}px ${newCenterY}px, ${color})`;
    });

    elements.forEach((element: HTMLElement | null) => {
      element?.addEventListener("mouseleave", () => {
        element.style.backgroundImage = "unset";
        element.style.backgroundColor = color.split(",")[1].split(" ")[0];
      });
    });
  });
};

const addRotation = (elements: (HTMLElement | null)[]) => {
  elements.forEach((element: HTMLElement | null) => {
    element?.addEventListener("mousemove", (event: MouseEvent) => {
      const elementRect: DOMRect = element.getBoundingClientRect();

      const height: number = elementRect.bottom - elementRect.top;
      const width: number = elementRect.right - elementRect.left;

      const hoverPositionX: number = event.clientX - elementRect.left;
      const hoverPositionY: number = event.clientY - elementRect.top;

      const percentageX: number = (100 * hoverPositionX) / width;
      const percentageY: number = (100 * hoverPositionY) / height;

      let calculatedX: number = Math.abs(-1 + 0.02 * percentageX);
      let calculatedY: number = Math.abs(-1.5 + 0.03 * percentageY);

      if (percentageX >= 50) {
        if (percentageY >= 50) calculatedY *= -1;
        else {
          calculatedY *= -1;
          calculatedX *= -1;
        }
      } else {
        if (percentageY < 50) calculatedX *= -1;
      }
      element.style.transform = `perspective(400px) rotateY(${calculatedY}deg) rotateX(${calculatedX}deg)`;
    });
  });

  elements.forEach((element: HTMLElement | null) => {
    element?.addEventListener("mouseout", (event: MouseEvent) => {
      element.style.transform = "unset";
    });
  });
};

export const handleHoverStyles = () => {
  const elements: (HTMLElement | null)[] = [1, 2, 3, 4, 5, 6].map((num) =>
    document.getElementById(`item-${num}`)
  );
  addFadingBackground(elements);
  addRotation(elements);
};
