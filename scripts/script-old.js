const pageSections = {
  distance: "sectionDistance",
  weight: "sectionWeight",
  speed: "sectionSpeed",
  temperature: "sectionTemperature"
};
const FEET_IN_A_MILE = 5280;

const inputFilter = document.querySelector("#inputFilter");

const inputDistanceMetric = document.querySelector("#distanceMetric");
const inputDistanceImperial = document.querySelector("#distanceImperial");

const selectDistanceMetric = document.querySelector("#selectDistanceUnitsMetric");
const selectDistanceImperial = document.querySelector("#selectDistanceUnitsImperial");

// Temperature conversion formula
const celsiusToFahrenheit = (celsius) => { return celsius * 1.8 + 32 };

const fahrenheitToCelsius = (fahrenheit) => { return (fahrenheit - 32) / 1.8 };

const celsiusToKelvin = (celsius) => { return celsius + 273.15 };

const kelvinToCelsius = (kelvin) => { return kelvin - 273.15 };

const fahrenheitToKelvin = (fahrenheit) => { return (fahrenheit + 459.67) / 1.8 };

const kelvinToFahrenheit = (fahrenheit) => { return fahrenheit * 1.8 - 459.67 };

const kilometresToMiles = (kilometres) => { return Number((kilometres * 0.6214).toFixed(4)) };

function validateNumber(input) {
  if (!input.trim()) return "";
  
  input = Number(input.trim());

  if (Number.isNaN(input)) return false;

  return input;
}

function distanceMetric(input) {
  if (input === "") {
    inputDistanceMetric.classList.remove("invalid");
    inputDistanceImperial.value = "";
  } else if (input) {
    inputDistanceMetric.classList.remove("invalid");

    // Return a short string describing the conversion operation to carry out
    conversion = selectDistanceMetric.value + selectDistanceImperial.value;

    switch (conversion) {
      case "kmmi":
        inputDistanceImperial.value = kilometresToMiles(input);
        
        break;

      case "memi":
        inputDistanceImperial.value = kilometresToMiles(input / 1000);
        
        break;

      case "kmfe":
        inputDistanceImperial.value = kilometresToMiles(input) * FEET_IN_A_MILE;

        break;
    
      case "mefe":
        inputDistanceImperial.value = kilometresToMiles(input / 1000) * FEET_IN_A_MILE;
        
        break;
    
      default:
        break;
    }

  } else {
    inputDistanceMetric.classList.add("invalid");
  }
}

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

inputDistanceMetric.addEventListener("input", (event) => {
  let input = validateNumber(event.target.value);

  distanceMetric(input);
});

selectDistanceMetric.addEventListener("change", () => {
  let input = validateNumber(inputDistanceMetric.value);

  distanceMetric(input);
})

// What to do if imperial dropdown changed? Which input to update?