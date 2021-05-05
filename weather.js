// generating timer
function showTime() {
  const currentDate = new Date();
  const dateTime = `<strong>Time</strong> : ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  document.getElementById("times").innerHTML = `${dateTime}`;
}

setInterval(showTime, 1000);

// Make An API Call using async await

// Current Weather API
const currentWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=52e5cf2412ccca39bff6dde69153bb8c&units=imperial";
const weather = async () => {
  const current = await fetch(currentWeather);
  const data = await current.json();

  console.log(data);

  document.getElementById(
    "name"
  ).innerHTML = ` ${data.name},${data.sys.country}`;
  document.getElementById("desc").innerHTML = data.weather[0].description;
  document.getElementById("temp").innerHTML = data.main.temp;
  document.getElementById(
    "humidity"
  ).innerHTML = `Relative Humidity is ${data.main.humidity}`;
};

setTimeout(weather, 2000);
// forecast Weather API
const forecast =
  "https://api.openweathermap.org/data/2.5/forecast?q=lagos&appid=52e5cf2412ccca39bff6dde69153bb8c&units=imperial";
const weatherForecast = async () => {
  const response = await fetch(forecast);
  const data = await response.json();
  console.log(data);

  const dates = data.list[0].dt_txt;
  const dateTrim = dates.substring(5, 11);
  const dateTrimed = dates.substring(0, 11);
  document.getElementById("r1c1").innerHTML = dateTrim;
  document.getElementById(
    "dates"
  ).innerHTML = `<strong>Date</strong>: ${dateTrimed}`;
  document.getElementById("r1c3").innerHTML =
    data.list[0].main.temp_min + "&deg;";
  document.getElementById("r1c4").innerHTML =
    data.list[0].main.temp_max + "&deg;";

  const dates1 = data.list[1].dt_txt;
  const dateTrim1 = dates1.substring(5, 11);
  document.getElementById("r2c1").innerHTML = dateTrim1;
  document.getElementById("r2c3").innerHTML =
    data.list[1].main.temp_min + "&deg;";
  document.getElementById("r2c4").innerHTML =
    data.list[1].main.temp_max + "&deg;";

  const dates2 = data.list[2].dt_txt;
  const dateTrim2 = dates2.substring(5, 11);
  document.getElementById("r3c1").innerHTML = dateTrim2;
  document.getElementById("r3c3").innerHTML =
    data.list[2].main.temp_min + "&deg;";
  document.getElementById("r3c4").innerHTML =
    data.list[2].main.temp_max + "&deg;";
};

setTimeout(weatherForecast, 2000);

// function adds(arr, value) {
//   const flow = arr.map(
//     (element) => Object.keys(element) + ":" + (element.val + value)
//   );
//   return flow;
// }

// console.log(adds([{ val: 2 }, { val: 4 }, { val: 6 }], 4));
