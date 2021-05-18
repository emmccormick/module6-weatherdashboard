function weatherFunction() {
  //var searchTerm = document.querySelector('#searchTerm').value; 
  // console.log(cityName);

  var cityTitle = document.getElementById("cityname");
  var currentTemp = document.getElementById("temperature");
  var currentHumidity = document.getElementById("humidity");
  var currentWind = document.getElementById("wind-speed");

  var apiKey = 'a977276642cf97a49b2a87a992aec26d';
  var cityName = "Milwaukee"



  var webUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
  
  fetch(webUrl)
  .then(function(response) {
    return response.json();
  })
    .then(function(data) {
      console.log(data);

      cityTitle.innerHTML = data.name 
      currentTemp.innerHTML = "Temperature: " + data.main.temp;
      currentHumidity.innerHTML = "Humidity: " + data.main.humidity;
      currentWind.innerHTML= "Wind Speed " + data.wind.speed +" MPH";


    });


}

weatherFunction();



  



