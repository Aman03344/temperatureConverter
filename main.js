const celcius = document.querySelector("#celcius")
const kelvin = document.querySelector("#kelvin")
const ferenheit = document.querySelector("#ferenheit")

console.log(celcius , kelvin , ferenheit);

celcius.addEventListener("input",()=>{
    let c = parseFloat(celcius.value)
    let f = (c * 9/5) + 32;
    let k = c + 273.15;
    ferenheit.value = f;
    kelvin.value = k;
})

ferenheit.addEventListener("input",()=>{
    let f = parseFloat(ferenheit.value)
    let c = (f * 9/5) + 32;
    let k = f + 273.15;
    celcius.value = c;
    kelvin.value = k;
})

kelvin.addEventListener("input",()=>{
    let k = parseFloat(kelvin.value)
    let c = (k * 9/5) + 32;
    let f = k + 273.15;
    celcius.value = c;
    ferenheit.value = f;
})