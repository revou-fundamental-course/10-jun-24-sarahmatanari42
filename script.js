const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const konversiButton = document.getElementById('konversi');
const resetButton = document.getElementById('reset');
const reverseButton = document.getElementById('reverse');

konversiButton.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9 / 5) + 32;
  fahrenheitInput.value = fahrenheit.toFixed(2);
});

resetButton.addEventListener('click', () => {
  celsiusInput.value = '0';
  fahrenheitInput.value = '';
});

reverseButton.addEventListener('click', () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = (fahrenheit - 32) * 5 / 9;
  celsiusInput.value = celsius.toFixed(2);
});