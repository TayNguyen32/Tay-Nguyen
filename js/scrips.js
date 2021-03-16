console.log("ok");

// Store Background Classes
const backgrounds = ["bg0", "bg1", "bg2"];

// Get Random Number
var numRand;
numRand = Math.floor(Math.random() * backgrounds.length);

// Get element
let pageBackground = document.querySelector("body");

// Set class name from stored values
pageBackground.className = backgrounds[numRand];

// portfolio setup
const portfolio = document.querySelector("#portfolio");
const video = document.getElementById("video");

lightGallery(portfolio, {
  selector: "a",
  mode: "lg-slide",
  download: false,
  cssEasing: "ease",
  startClass: "lg-start-zoom",
  subHtmlSelectorRelative: true
});
