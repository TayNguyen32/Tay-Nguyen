console.log("ok");

// portfolio setup
const portfolio = document.querySelector("#portfolio");
const video = document.getElementById("video");

lightGallery(portfolio, {
  selector: "a",
  mode: "lg-slide",
  download: false,
  cssEasing: "ease",
  startClass: "lg-start-zoom",
  subHtmlSelectorRelative: true,
  zoom: true,
  scale: 0.5
});
