let counter = 0;
const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrese")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else if (styles.contains("reset")) {
      counter = 0;
    }
    if (counter === 0) {
      value.style.color = "black";
    }
    if (counter < 0) {
      value.style.color = "red";
    }
    if (counter > 0) {
      value.style.color = "green";
    }
    value.textContent = counter;
  });
});
