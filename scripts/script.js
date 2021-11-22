const centimetresToInches = (centimetres) => Number((centimetres * 2.54));
const inchesToCentimetres = (inches) => Number((inches / 2.54));

const inputDistanceMetric = document.querySelector("#distanceMe");
const inputDistanceImperial = document.querySelector("#distanceIm");

const selectDistanceMetric = document.querySelector("#selDistanceMetricUnits");
const selectDistanceImperial = document.querySelector("#selDistanceImperialUnits");

function validateNumber(input) {
  if (!input.trim()) return "";

  input = Number(input.trim());

  if (Number.isNaN(input)) return false;

  return input;
}

function convertDistanceMetricToImperial(input) {
  let metricValue = input;
  let imperialValue = centimetresToInches(metricValue);

  inputDistanceImperial.value = imperialValue;
}

function convertDistanceImperialToMetric(input) {
  let imperialValue = input
  let metricValue = inchesToCentimetres(imperialValue);

  inputDistanceMetric.value = metricValue;
}

function validateDistanceInput(inputElem, outputElem) {
  const input = validateNumber(inputElem.value);
  
  if (input === "") {
    inputElem.classList.remove("invalid");
    outputElem.value = "";
  } else if (input) {
    inputElem.classList.remove("invalid");
    
    return input;
  } else {
    inputElem.classList.add("invalid");
  }
  return false;
}

function distanceMetricToImperial() {
  let input = validateDistanceInput(inputDistanceMetric, inputDistanceImperial);
  
  if (input) convertDistanceMetricToImperial(input);
};

function distanceImperialToMetric() {
  let input = validateDistanceInput(inputDistanceImperial, inputDistanceMetric);
  
  if (input) convertDistanceImperialToMetric(input);
};

inputDistanceMetric.addEventListener("input", () => distanceMetricToImperial() );
inputDistanceImperial.addEventListener("input", () => distanceImperialToMetric() );

// selectDistanceMetric.addEventListener("change", () => distanceMetricToImperial() );
// selectDistanceImperial.addEventListener("change", () => distanceImperialToMetric() );