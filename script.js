const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

const calculateTotal = function () {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  let totalValue;

  if (Number(billValue) < 0 || Number(tipValue) < 0) {
    alert`Negative numbers are not allowed`;
    billInput.value = "";
    tipInput.value = "";
    return;
  }
  if (
    isNaN(billValue) ||
    isNaN(tipValue) ||
    billValue === "" ||
    tipValue === ""
  ) {
    alert`Please enter valid numbers for bill and tip`;
    billInput.value = "";
    tipInput.value = "";
    return;
  }
  //   const tip = billValue * (tipValue / 100);
  //   const totalValue = billValue + tip;
  totalValue = billValue * (1 + tipValue / 100);

  totalSpan.innerText = totalValue.toFixed(2);

  //   console.log(totalValue);
};

[billInput, tipInput].forEach((input) => {
  input.addEventListener("click", () => {
    totalSpan.innerText = "";
  });
});

btnEl?.addEventListener("click", calculateTotal);
