let carousel = document.querySelector(".carousel");
let slider = document.querySelector(".slider");

let prev = document.querySelector(".btn-prev");
let next = document.querySelector(".btn-next");

var direction;

next.addEventListener("click", () => {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-25%)";
  console.log(direction);
});

prev.addEventListener("click", () => {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(25%)";
  console.log(direction);
});

slider.addEventListener(
  "transitionend",
  () => {
    if (direction === 1) {
      slider.prepend(slider.lastElementChild);
    } else {
      slider.appendChild(slider.firstElementChild);
    }

    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(() => {
      slider.style.transition = "all 0.5s";
    });
  },
  false
);
