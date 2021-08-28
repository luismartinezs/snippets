// config
MIN_RATINGS = 20;

list = [...document.querySelectorAll("#g-items > li")];

bookList = list
  .map((item) => {
    title = item.querySelector("h3").textContent.trim();
    rating = item
      .querySelector(".reviewStarsPopoverLink > i > span")
      .textContent.trim()
      .split(" ")[0];
    nRatings = DOMRegex(/^review_count_/, item)[0]
      .textContent.trim()
      .replace(".", "");
    return { title, rating, nRatings };
  })
  .filter((item) => item.nRatings >= MIN_RATINGS)
  .sort((a, b) => b.rating - a.rating);

bookList;

function DOMRegex(regex, el = document) {
  let output = [];
  for (let i of el.querySelectorAll("*")) {
    if (regex.test(i.id)) {
      // or whatever attribute you want to search
      output.push(i);
    }
  }
  return output;
}
