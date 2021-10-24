let carousel = document.getElementById("carousel");
let carouselItems = [...carousel.children];

const interval = setInterval(() => {
  let item = carousel.children[0];

  item.style.opacity = 0;
  setTimeout(function () {
    carousel.removeChild(item);
  }, 1000);

  setTimeout(function () {
    item.style.opacity = 1;
    carousel.appendChild(item);
  }, 2000);
}, 3000);
