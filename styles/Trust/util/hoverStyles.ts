let isThemeDark = false;

let color = "";

export const addHoverStyle = () => {
  const e1 = document.getElementById("item-1");
  const e2 = document.getElementById("item-2");
  const e3 = document.getElementById("item-3");
  const e4 = document.getElementById("item-4");
  const e5 = document.getElementById("item-5");

  [e1, e2, e3, e4, e5].forEach((e) => {
    e?.addEventListener("mousemove", (ee) => {
      const newCenterX = ee.clientX;
      const newCenterY = ee.clientY;
      isThemeDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (isThemeDark) color = "#191825,rgba(25, 24, 37, 0.9)";
      else color = "#ffe5e5, rgba(255, 229, 229, 0.1)";

      e.style.background = "none";
      e.style.backgroundImage = `radial-gradient(ellipse farthest-corner at ${newCenterX}px ${newCenterY}px, ${color})`;
    });

    [e1, e2, e3, e4, e5].forEach((e) => {
      e?.addEventListener("mouseleave", () => {
        e.style.backgroundImage = "none";
        e.style.backgroundColor = color.split(",")[0];
      });
    });
  });
};
