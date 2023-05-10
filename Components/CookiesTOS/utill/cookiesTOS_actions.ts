export const cookiesTOS_actions = () => {
  const target = document.getElementById("cookie-container") as HTMLElement;
  const timer = setTimeout(() => {
    target.style.bottom = "0";
    clearTimeout(timer);
  }, 10000);

  const closeButton = document.getElementById(
    "close-btn-cookie"
  ) as HTMLElement;
  closeButton.addEventListener("click", (event: MouseEvent) => {
    target.style.bottom = "-200px";
  });
};
