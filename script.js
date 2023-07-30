const arrow = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrow.forEach((event, index) => {
  const itemNumber = movieList[index].querySelectorAll("img").length;
  let clickCounter = 0;
  event.addEventListener("click", () => {
    clickCounter++;
    if (itemNumber - (4 + clickCounter) > 0) {
      movieList[index].style.transform = `translateX(${
        movieList[index].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[index].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  console.log();
});
