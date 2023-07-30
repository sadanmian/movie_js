const arrow = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrow.forEach((event, index) => {
  const itemNumber = movieList[index].querySelectorAll("img").length;
  let clickCounter = 0;
  event.addEventListener("click", () => {
    clickCounter++;
    if (
      itemNumber - (Math.floor(window.innerWidth / 270) + clickCounter) >=
      0
    ) {
      movieList[index].style.transform = `translateX(${
        movieList[index].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[index].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((event) => {
    event.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
