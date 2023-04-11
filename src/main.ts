import "./style.css";

const egg = document.querySelector("#egg") as HTMLElement;

egg.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  target.style.setProperty("--x", String(Math.random()));
  target.style.setProperty("--y", String(Math.random()));
  target.style.setProperty("--hue", String(Math.floor(Math.random() * 360)));
});
