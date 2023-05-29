const cookieDisappear = (
  target: HTMLElement,
  disappearDispatchers: HTMLElement[]
): void => {
  disappearDispatchers.forEach((closeButton: HTMLElement) => {
    closeButton.addEventListener("click", () => {
      target.style.bottom = "-300px";
    });
  });
};

const getDisappearDispatchers = (): HTMLElement[] => {
  return [
    document.getElementById("cookie-consent") as HTMLElement,
    document.getElementById("cookie-minimum") as HTMLElement,
    document.getElementById("cookie-deny") as HTMLElement,
    document.getElementById("close-btn-cookie") as HTMLElement,
  ];
};

export const cookiesTOS_actions = (): void => {
  const target: HTMLElement = document.getElementById(
    "cookie-container"
  ) as HTMLElement;

  cookieDisappear(target, getDisappearDispatchers());
};
