//mouseover and mouseout process
function setNewImage() {
  document.getElementById("phone").src = "resources/img/app-iphone2.png";
}
function setOldImage() {
  document.getElementById("phone").src = "resources/img/app-iPhone.png";
}

//onfocus and onblur event

function focusFunction() {
  // Focus = Changes the background color of input to yellow
  document.getElementById("name").style.background = "orange";
}

function blurFunction() {
  // No focus = Changes the background color of input to red
  document.getElementById("name").style.background = "";
}
//mousemove
window.onload = () => {
  document.getElementById("logoimg").addEventListener("mousemove", hover);
  document.getElementById("logoimg").addEventListener("mouseout", notHover);
};

function hover() {
  document
    .getElementById("logoimg")
    .setAttribute("style", "transform: scale(1.4);");
}
function notHover() {
  document
    .getElementById("logoimg")
    .setAttribute("style", "transform: scale(1);");
}
