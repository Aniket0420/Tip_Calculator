let bill = 0,
  tipPerc = 15;
const calculateFinalBill = () => {
  const tipAmount = bill * tipPerc / 100;
  document.getElementById('tipAmount').value = tipAmount;
  document.getElementById('totalAmount').value = tipAmount + Number(bill);
};
const onBillAmountChange = ({ value }) => {
  if (value < 0) {
  	alert('Value cannot be less than zero.');
  } else {
    bill = value;
    calculateFinalBill();
  }
}
const onTipPercentageChange = (rangeElem) => {
  tipPerc = rangeElem.value;
  document.getElementById('tipPercentage').innerText = `${tipPerc}%`;
  calculateFinalBill();
}