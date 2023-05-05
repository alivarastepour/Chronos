export const tieEventListener = (): void => {
  const targetElement: HTMLElement | null =
    document.getElementById("header-content");
  const closeBTN: HTMLElement | null = document.getElementById("close-btn");
  const openBTN: HTMLElement | null = document.getElementById("open-btn");

  if (!targetElement || !closeBTN || !openBTN) return;

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
