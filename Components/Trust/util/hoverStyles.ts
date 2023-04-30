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
      const rrect = e.getBoundingClientRect();

      var newCenterX = ee.clientX - rrect.left; //x position within the element.
      var newCenterY = ee.clientY - rrect.top;

      // const newCenterX = ee.pageX - e.offsetLeft;
      // const newCenterY = ee.pageY - e.offsetTop;
      console.log(newCenterX, newCenterY);

      // var rect = ee.pageX - e.offsetLeft;
      // var x = e.clientX - rect.left; //x position within the element.
      // var y = e.clientY - rect.top; //y position within the element.

      isThemeDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (isThemeDark) color = "rgba(25, 24, 37, 0.9) , #191825";
      else color = "#ffe5e5 , rgba(255, 229, 229, 0.1) ";
      // else color = "red, yellow";
      const radCol = color.split(",")[0];
      e.style.background = "none";
      e.style.backgroundImage = `radial-gradient(circle at ${newCenterX}px ${newCenterY}px, ${color})`;
    });

    [e1, e2, e3, e4, e5].forEach((e) => {
      e?.addEventListener("mouseleave", () => {
        e.style.backgroundColor = color.split(",")[0];
        // e.style.backgroundImage = "none";
      });
    });
  });
};
