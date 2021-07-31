console.log("ok");

// portfolio setup
const portfolio = document.querySelector("#portfolio");
const portfolio2 = document.querySelector("#portfolio2");
const video = document.getElementById("video");

lightGallery(portfolio, {
  selector: "a",
  mode: "lg-slide-circular",
  download: false,
  cssEasing: "ease",
  startClass: "lg-start-zoom",
  subHtmlSelectorRelative: true,
  zoom: true,
  scale: 0.5,
  thumbnail: false
});

lightGallery(portfolio2, {
  selector: "a",
  mode: "lg-slide-circular",
  download: false,
  cssEasing: "ease",
  startClass: "lg-start-zoom",
  subHtmlSelectorRelative: true,
  zoom: true,
  scale: 0.5,
  thumbnail: false
});
