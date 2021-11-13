// Temperature conversion formula
const celsiusToFahrenheit = (celsius) => { return celsius * 1.8 + 32 };

const fahrenheitToCelsius = (fahrenheit) => { return (fahrenheit - 32) / 1.8 };

const celsiusToKelvin = (celsius) => { return celsius + 273.15 };

const kelvinToCelsius = (kelvin) => { return kelvin - 273.15 };

const fahrenheitToKelvin = (fahrenheit) => { return (fahrenheit + 459.67) / 1.8 };

const kelvinToFahrenheit = (fahrenheit) => { return fahrenheit * 1.8 - 459.67 };
