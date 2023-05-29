let color: string = "";

type userTheme = "dark" | "light";

const getUserTheme = (): userTheme => {
  const isThemeDark: boolean =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme: userTheme = isThemeDark ? "dark" : "light";
  return theme;
};

const getMousePosition = (
  element: HTMLElement,
  event: MouseEvent
): [newCenterX: number, newCentetY: number] => {
  const elementRect: DOMRect = element.getBoundingClientRect();

  const newCenterX: number = event.clientX - elementRect.left;
  const newCenterY: number = event.clientY - elementRect.top;

  return [newCenterX, newCenterY];
};

const getContainerShape = (
  element: HTMLElement
): [width: number, height: number] => {
  const elementRect: DOMRect = element.getBoundingClientRect();

  const width: number = elementRect.right - elementRect.left;
  const height: number = elementRect.bottom - elementRect.top;

  return [width, height];
};

// since in our usecase we always know that our value is between 0 and 100, we have simplified the interpolation formula
const linearInterpolationTransformer = (
  min: number,
  max: number,
  value: number
): number => {
  return min + ((max - min) / 100) * value;
};

const mapToEdge = (
  percentageX: number,
  percentageY: number,
  calculatedX: number,
  calculatedY: number
): [calculatedX: number, calculatedY: number] => {
  if (percentageX >= 50) {
    if (percentageY >= 50) calculatedY *= -1;
    else {
      calculatedY *= -1;
      calculatedX *= -1;
    }
  } else {
    if (percentageY < 50) calculatedX *= -1;
  }
  return [calculatedX, calculatedY];
};

const addFadingBackground = (elements: (HTMLElement | null)[]): void => {
  elements.forEach((element: HTMLElement | null) => {
    element?.addEventListener("mousemove", (event: MouseEvent) => {
      const [newCenterX, newCenterY]: [newCenterX: number, newCenterY: number] =
        getMousePosition(element, event);

      const theme: userTheme = getUserTheme();

      if (theme == "dark") color = "#424059, #191825e6, #191825e6, #191825e6";
      else color = "#ffe5e51a, #f7e4e4, #f7e4e4,#f7e4e4";

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

const addRotation = (elements: (HTMLElement | null)[]): void => {
  elements.forEach((element: HTMLElement | null) => {
    element?.addEventListener("mousemove", (event: MouseEvent) => {
      const [width, height]: [width: number, height: number] =
        getContainerShape(element);

      const [hoverPositionX, hoverPositionY]: [
        hoverPositionX: number,
        hoverPositionY: number
      ] = getMousePosition(element, event);

      const percentageX: number = (100 * hoverPositionX) / width;
      const percentageY: number = (100 * hoverPositionY) / height;

      // use linear interpolation to map a value between 0 and 100 to a desired range

      let [calculatedX, calculatedY]: [
        calculatedX: number,
        calculatedY: number
      ] = [
        Math.abs(linearInterpolationTransformer(-1, 1, percentageX)),
        Math.abs(linearInterpolationTransformer(-1.5, 1.5, percentageY)),
      ];

      // interpolated values must map to 4 edges, so we use a combinations of actuall and negated values

      [calculatedX, calculatedY] = mapToEdge(
        percentageX,
        percentageY,
        calculatedX,
        calculatedY
      );

      element.style.transform = `perspective(1000px) rotateY(${calculatedY}deg) rotateX(${calculatedX}deg)`;
    });
  });

  elements.forEach((element: HTMLElement | null) => {
    element?.addEventListener("mouseout", () => {
      element.style.transform = "unset";
    });
  });
};

export const handleHoverStyles = (): void => {
  const elements: (HTMLElement | null)[] = [1, 2, 3, 4, 5, 6].map((num) =>
    document.getElementById(`trust-item-${num}`)
  );
  // addFadingBackground(elements);
  addRotation(elements);
};
