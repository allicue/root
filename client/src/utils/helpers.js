export const onResize = () => {
  const menu = document.getElementById("menu");
  const width = menu?.clientWidth;
  menu.style.transition = "none";
  if (width <= 500) {
    setTimeout(() => {
      menu.style.transition = "transform 0.4s ease-in-out";
    }, 200);
  }
};
