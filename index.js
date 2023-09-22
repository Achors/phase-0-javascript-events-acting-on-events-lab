// Your code here
dodger.style.backgroundColor = "#FF69B4";
const dodger = document.getElementById("dodger")
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

  if (left < 200) {
    dodger.style.left = `${left + 10}px`;
  }
}


document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else {
        moveDodgerRight();
    }
  })
