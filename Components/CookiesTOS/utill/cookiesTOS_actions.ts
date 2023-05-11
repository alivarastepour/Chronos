const cookieAppear = (target: HTMLElement) => {
  const timer = setTimeout(() => {
    target.style.bottom = "0";
    clearTimeout(timer);
  }, 10000);
};

const cookieDisappear = (target: HTMLElement) => {
  const closeButtons: HTMLElement[] = [
    document.getElementById("close-btn-cookie") as HTMLElement,
    document.getElementById("cookie-consent") as HTMLElement,
    document.getElementById("cookie-minimum") as HTMLElement,
    document.getElementById("cookie-deny") as HTMLElement,
  ];

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      target.style.bottom = "-300px";
    });
  });
};

export const cookiesTOS_actions = () => {
  const target = document.getElementById("cookie-container") as HTMLElement;

  cookieAppear(target);

  cookieDisappear(target);
};
