let index = 0;
function changeColor() {
  let colors = ["red", "green", "blue", "orange", "purple", "skyblue"];
  document.getElementsByTagName("body")[0].style.background = colors[index++];
  if (index >= colors.length) {
    index = 0;
  }
}
