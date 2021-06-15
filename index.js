const d = document,
  $displayPreviousValue = d.getElementById("previous-value"),
  $displayCurrentValue = d.getElementById("current-value"),
  $numbersButtons = d.querySelectorAll(".number"),
  $operatorsButtons = d.querySelectorAll(".operator"),
  display = new Display($displayPreviousValue,$displayCurrentValue);

$numbersButtons.forEach(button => {
  button.addEventListener("click", () => {
    display.addNumber(button.innerHTML);
  });
});

$operatorsButtons.forEach(button => {
  button.addEventListener("click", () => {
    display.compute(button.value);
  });
});
