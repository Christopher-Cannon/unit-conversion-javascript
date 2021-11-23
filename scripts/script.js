const inputDistanceMetric = document.querySelector("#distanceMe");
const inputDistanceImperial = document.querySelector("#distanceIm");

const selectDistanceMetric = document.querySelector("#selDistanceMetricUnits");
const selectDistanceImperial = document.querySelector("#selDistanceImperialUnits");

// Temperature conversion formula
const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

const celsiusToKelvin = (celsius) => celsius + 273.15;

const kelvinToCelsius = (kelvin) => kelvin - 273.15;

const fahrenheitToKelvin = (fahrenheit) => (fahrenheit + 459.67) / 1.8;

const kelvinToFahrenheit = (fahrenheit) => fahrenheit * 1.8 - 459.67;

const truncNumber = (expr, trunc) => Number(expr).toFixed(trunc);

function validateNumber(input) {
  if (!input.trim()) return "";

  input = Number(input.trim());

  if (Number.isNaN(input)) return false;

  return input;
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

function convertDistanceMetricToImperial() {
  let input = validateDistanceInput(inputDistanceMetric, inputDistanceImperial);

  if (input) {
    let metricValue = input;

    const conversion = selectDistanceMetric.value + selectDistanceImperial.value;

    switch (conversion) {
      case "cmin":
        inputDistanceImperial.value = truncNumber(metricValue / 2.54, 4);
        break;
      case "mein":
        inputDistanceImperial.value = truncNumber(metricValue / 0.0254, 4);
        break;
      case "kmin":
        inputDistanceImperial.value = truncNumber(metricValue * 39370.1, 4);
        break;
      case "cmfe":
        inputDistanceImperial.value = truncNumber(metricValue / 30.48, 4);
        break;
      case "mefe":
        inputDistanceImperial.value = truncNumber(metricValue / 3.280839895, 4);
        break;
      case "kmfe":
        inputDistanceImperial.value = truncNumber(metricValue * 3280.84 , 4);
        break;
      case "cmmi":
        inputDistanceImperial.value = truncNumber(metricValue / 160934.4, 4);
        break;
      case "memi":
        inputDistanceImperial.value = truncNumber(metricValue / 1609.344, 4);
        break;
      case "kmmi":
        inputDistanceImperial.value = truncNumber(metricValue * 1.609344 , 4);
        break;

      default:
        break;
    }
  }
};

function convertDistanceImperialToMetric() {
  let input = validateDistanceInput(inputDistanceImperial, inputDistanceMetric);

  if (input) {
    let imperialValue = input;

    const conversion = selectDistanceMetric.value + selectDistanceImperial.value;

    switch (conversion) {
      case "cmin":
        inputDistanceMetric.value = truncNumber(imperialValue * 2.54, 4);
        break;
      case "mein":
        inputDistanceMetric.value = truncNumber(imperialValue * 0.0254, 4);
        break;
      case "kmin":
        inputDistanceMetric.value = truncNumber(imperialValue / 39370.1, 4);
        break;
      case "cmfe":
        inputDistanceMetric.value = truncNumber(imperialValue * 30.48, 4);
        break;
      case "mefe":
        inputDistanceMetric.value = truncNumber(imperialValue * 3.280839895, 4);
        break;
      case "kmfe":
        inputDistanceMetric.value = truncNumber(imperialValue / 3280.84, 4);
        break;
      case "cmmi":
        inputDistanceMetric.value = truncNumber(imperialValue * 160934.4, 4);
        break;
      case "memi":
        inputDistanceMetric.value = truncNumber(imperialValue * 1609.344, 4);
        break;
      case "kmmi":
        inputDistanceMetric.value = truncNumber(imperialValue / 1.609344, 4);
        break;

      default:
        break;
    }
  }
}

inputDistanceMetric.addEventListener("input", () => convertDistanceMetricToImperial() );
inputDistanceImperial.addEventListener("input", () => convertDistanceImperialToMetric() );

selectDistanceMetric.addEventListener("change", () => convertDistanceMetricToImperial() );
selectDistanceImperial.addEventListener("change", () => convertDistanceImperialToMetric() );