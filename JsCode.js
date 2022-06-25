var power = false;

function addToCalculator(value) {
  document.getElementById("DisplayNum").value += value;
  if (power) {
    var numbers = document.getElementById("DisplayNum").value.split("^");
    document.getElementById("DisplayNum").value = Math.pow(
      numbers[0],
      numbers[1]
    );
    power = false;
  }
}
function EqualCalculator() {
  document.getElementById("DisplayNum").value = eval(
    document.getElementById("DisplayNum").value
  );
}
function clean() {
  document.getElementById("DisplayNum").value = "";
}
function MathCal(value) {
  if (value == "Power") {
    power = true;
    document.getElementById("DisplayNum").value += "^";
  }
  if (value == "Rounded") {
    document.getElementById("DisplayNum").value = Math.round(
      document.getElementById("DisplayNum").value
    );
  }
  if (value == "Radical") {
    document.getElementById("DisplayNum").value = Math.sqrt(
      document.getElementById("DisplayNum").value
    );
  }
}
