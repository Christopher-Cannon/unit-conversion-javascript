// Temperature conversion formula
const celsiusToFahrenheit = (celsius) => { return celsius * 1.8 + 32 };

const fahrenheitToCelsius = (fahrenheit) => { return (fahrenheit - 32) / 1.8 };

const celsiusToKelvin = (celsius) => { return celsius + 273.15 };

const kelvinToCelsius = (kelvin) => { return kelvin - 273.15 };

const fahrenheitToKelvin = (fahrenheit) => { return (fahrenheit + 459.67) / 1.8 };

const kelvinToFahrenheit = (fahrenheit) => { return fahrenheit * 1.8 - 459.67 };

function validateNumber(input) {
  if (!input.trim()) return false;
  
  input = Number(input.trim());

  if (Number.isNaN(input)) return false;

  return input;
}

const pageSections = {
  distance: "sectionDistance",
  weight: "sectionWeight",
  speed: "sectionSpeed",
  temperature: "sectionTemperature"
};

const inputFilter = document.querySelector("#inputFilter");
const inputDistanceMetric = document.querySelector("#distanceMetric");

// Show/hide sections depending on the value entered into the filter input
inputFilter.addEventListener("input", (event) => {
  let input = event.target.value.toLowerCase();

  for (const key in pageSections) {
    const section = document.querySelector("#" + pageSections[key]);

    if (!key.startsWith(input)) {
      section.classList.add("hide");
    } else {
      section.classList.remove("hide");
    }
  }
});

inputDistanceMetric.addEventListener("change", (event) => {
  let input = validateNumber(event.target.value);

  if (input) {
    console.log("Success: " + input);
  } else {
    console.log("Invalid: " + input);
  }
});