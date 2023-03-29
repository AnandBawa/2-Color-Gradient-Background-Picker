let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

color1.addEventListener("input", setGradient); //listening to color input events

color2.addEventListener("input", setGradient);

onLoadSet(); //set color picker values to css values on first page load

function RGBToHex(rgb) {
  //RGB to Hex conversion function
  rgb = rgb.substr(4).split(")")[0].split(",");

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

function randomRgbParameter() {
  //create a random number between 0 and 255
  return Math.floor(Math.random() * 256);
}

function onLoadSet() {
  //function called on page load to set color picker values to CSS values
  let [rgb1, rgb2] =
    getComputedStyle(body).backgroundImage.match(/rgb\(.+?\)/g); //extacting CSS gradient value

  let hex1 = RGBToHex(rgb1); //Converting default RGB to hex
  let hex2 = RGBToHex(rgb2);

  color1.value = hex1; //Updating input color element to default values
  color2.value = hex2;
  setGradient();
}

function printGradient() {
  // print the current gradient
  css.textContent = body.style.background + ";";
}

function setGradient() {
  //function to set default gradient
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  printGradient();
}

function randomColors() {
  //create 2 RGB values and set gradient
  let col1 =
    "rgb(" +
    randomRgbParameter() +
    ", " +
    randomRgbParameter() +
    ", " +
    randomRgbParameter() +
    ")";
  let col2 =
    "rgb(" +
    randomRgbParameter() +
    ", " +
    randomRgbParameter() +
    ", " +
    randomRgbParameter() +
    ")";

  body.style.background =
    "linear-gradient(to right, " + col1 + ", " + col2 + ")";
  printGradient();

  color1.value = RGBToHex(col1); //Updating input color element to new values
  color2.value = RGBToHex(col2);
}
