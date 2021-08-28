list = [...document.querySelectorAll("#g-items > li")];

bookList = list
  .map((item) => {
    title = item.querySelector("h3").textContent.trim();
    rating = item
      .querySelector(".reviewStarsPopoverLink > i > span")
      .textContent.trim()
      .split(" ")[0];
    return { title, rating };
  })
  .sort((a, b) => b.rating - a.rating);
