function calculateMortgage() {
  const price = parseFloat(document.getElementById('price').value) || 0;
  const downPayment = parseFloat(document.getElementById('downPayment').value) || 0;
  const loanTerm = parseInt(document.getElementById('loanTerm').value) || 0;
  const interestRate = parseFloat(document.getElementById('interestRate').value) || 0;

  const principal = price - downPayment;
  const monthlyRate = (interestRate / 100) / 12;
  const numberOfPayments = loanTerm * 12;

  if (monthlyRate === 0) {
    var monthlyPayment = principal / numberOfPayments;
  } else {
    var monthlyPayment = 
      (principal * monthlyRate) / 
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  }

  document.getElementById('monthlyPayment').innerText = 
    `$${monthlyPayment.toFixed(2)}`;
}