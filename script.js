var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function RGBToHex(rgb) {
  //RGB to Hex conversion function
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

function onLoadSet() {
  //function called on page load
  var defaultGradient = getComputedStyle(body).backgroundImage; //extacting CSS gradient value
  var rgb1 = defaultGradient.slice(26, 40); //splicing for individual RGB values
  var rgb2 = defaultGradient.slice(42, 58);

  hex1 = RGBToHex(rgb1); //Converting default RGB to hex
  hex2 = RGBToHex(rgb2);

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

function randomRgbParameter() {
  //create a random number between 0 and 255
  return Math.floor(Math.random() * 256);
}

function randomColors() {
  //create 2 RGB values and set gradient
  var col1 =
    "rgb(" +
    randomRgbParameter() +
    ", " +
    randomRgbParameter() +
    ", " +
    randomRgbParameter() +
    ")";
  var col2 =
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

color1.addEventListener("input", setGradient); //listening to color input events

color2.addEventListener("input", setGradient);
