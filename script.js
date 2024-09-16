const  form = document.querySelector("#form")
const  result = document.querySelector("#result")
const  unitIn= document.querySelector("#unitIn")
const  unitTo = document.querySelector("#unitTo")

form.addEventListener("submit",  (event) => {
  event.preventDefault();
  const  input = parseInt(document.querySelector("#input").value);

  if (unitIn.value === "Celcius") {
    if (unitTo.value === "Fahrenhiet") {
      const converTamp =  (input * 9/5) + 32
      result.innerHTML = `${input}° Celsius is equal to  ${converTamp}° Fahrenheit`
    }
   }
  if (unitIn.value === "Celcius") {
    if (unitTo.value === "Kelvin") {
      const converTamp = input + 273.15;
      
      result.innerHTML = `${input}° Celsius is equal to  ${converTamp}° Kelvin `
      }
  }
 if (unitIn.value === "Fahrenhiet") {
    if (unitTo.value === "Celcius") {
      const converTamp =  (input - 32) * 5 / 9;
      
      result.innerHTML = `${input}° Fahrenheit is equal to ${converTamp.toFixed(2)}° Celcius`
    }
  }
  if (unitIn.value === "Fahrenhiet") {
    if (unitTo.value === "Kelvin") {
      const converTamp =  ((input - 32) * 5 / 9) + 273.15;
      
      result.innerHTML = `${input}° Fahrenheit is equal to  ${converTamp}° Kelvin `
    }
  }
  if (unitIn.value === "Kelvin") {
    if (unitTo.value === "Celcius") {
      const converTamp = input - 273.15;
      
      result.innerHTML = `${input}° Kelvin is equal to  ${converTamp}° Celcius `
    }
  }
  if (unitIn.value === "Kelvin") {
    if (unitTo.value === "Fahrenhiet") {
      const converTamp = ((input - 273.15) * 9/5) + 32;
      
      result.innerHTML = `${input}° Kelvin is equal to  ${converTamp.toFixed(2)}° Celcius `
    }
  }
  
})
