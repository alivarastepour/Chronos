export const tieEventListener = (): void => {
  const targetElement: HTMLElement = document.getElementById(
    "header-content"
  ) as HTMLElement;
  const closeBTN: HTMLElement = document.getElementById(
    "close-btn"
  ) as HTMLElement;
  const openBTN: HTMLElement = document.getElementById(
    "open-btn"
  ) as HTMLElement;

  openBTN.addEventListener("click", () => {
    targetElement.style.visibility = "visible";
    closeBTN.style.display = "block";
    openBTN.style.display = "none";
  });

  closeBTN.addEventListener("click", () => {
    targetElement.style.visibility = "hidden";
    closeBTN.style.display = "none";
    openBTN.style.display = "block";
  });

  window.addEventListener("resize", (event) => {
    const width: number = (event.currentTarget as Window).innerWidth;
    if (width > 720) targetElement.style.visibility = "visible";
    else targetElement.style.visibility = "hidden";
  });
};
