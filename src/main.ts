import "./style.css";

const egg = document.querySelector("#egg") as HTMLElement;
const timeContainer = document.querySelector("#time") as HTMLElement;
const infoContainer = document.querySelector("#info") as HTMLElement;
const resultCountContainer = document.querySelector("#result-count") as HTMLElement;
const commentContainer = document.querySelector("#comment") as HTMLElement;

const comments = [
  { color: "#FF0000", msg: "bad" },
  { color: "#FFA700", msg: "medium" },
  { color: "#FFB600", msg: "good" },
  { color: "#2BFF00", msg: "amazing !" },
  { color: "#00FFB8", msg: "impossible" },
  { color: "#004BFF", msg: "really ?" },
  { color: "#41009C", msg: "hacker ?!" },
];
const padding = 10;
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

let time = 0;
let interval = 0;
let countClickedEggs = 0;
let isRunning = false;

egg.addEventListener("click", () => {
  if (!isRunning) start();
  countClickedEggs++;
  document.body.style.setProperty("--x", `${random(padding, 100 - padding)}%`);
  document.body.style.setProperty("--y", `${random(padding, 100 - padding)}%`);
  document.body.style.setProperty("--hue", `${random(0, 360)}`);
});

function start() {
  countClickedEggs = 0;
  document.body.classList.add("running");
  isRunning = true;
  time = 10;
  timeContainer.textContent = `${time}`;
  interval = setInterval(() => {
    time--;
    if (time === 0) stop();
    timeContainer.textContent = `${time}`;
  }, 1000);
  infoContainer.textContent = "";
}

function stop() {
  isRunning = false;
  clearInterval(interval);
  resultCountContainer.textContent = `${countClickedEggs}`;
  const comment = comments[Math.floor(countClickedEggs / 8) ?? comments.length - 1];
  commentContainer.textContent = `${comment.msg}`;
  commentContainer.style.setProperty("--color", comment.color);
  document.body.style.setProperty("--x", "50%");
  document.body.style.setProperty("--y", "45%");
  infoContainer.textContent = "click on the egg to restart";
  document.body.classList.remove("running");
}
