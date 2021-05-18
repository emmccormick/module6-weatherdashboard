// GIVEN a weather dashboard with form inputs WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
var cityName = document.querySelector('.form-input').value;
var submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', function() {
  console.log(cityName)
})

function getCurrentWeather() {
  
  var webUrl = 'api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid={API key'
  
  fetch(webUrl)
  .then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });

}

function getForecastedWeather() {
  
  var webUrl = 'api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid={API key'
  
  fetch(webUrl)
  .then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });

}


// things below are different endpoints!
// WHEN I view current weather conditions for that city THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city


// input area w/ button, grab the value & perform getWeather on the input. then another function to "drawWeather" - dom manipulations, be given data & manipulate DOM

