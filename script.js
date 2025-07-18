const form = document.getElementById("calculatorForm");
const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  try {
    display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch {
    display.value = "Error";
  }
});
