export const addHoverStyle = () => {
  const element = document.getElementById("item-1");
  element?.addEventListener("mousemove", (e) => {
    const newCenterX = e.clientX;
    const newCenterY = e.clientY;
    let timer = setTimeout(() => {
      element.style.backgroundImage = `radial-gradient(ellipse farthest-corner at ${newCenterX}px ${newCenterY}px, red,green)`;
      clearTimeout(timer);
    }, 100);
  });
};
