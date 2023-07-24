// create an input field for city search
// store city in search history (local storage)
// display current forecast
// including city, date, weather icon, temperature, humidity, and wind speed in forecast results
// request data from API
// check that data has value
// parse that data into chunks to display

// display 5-day forecast
// including future dates, weather icon, temperature, humidity, and wind speed in forecast results
// request data from API
// check that data has value
// parse that data into chunks to display

// stored cities in search history are displayed as links (or buttons?)

// when those cities are clicked, the forecast results are displayed again

var apiKey = "58abc759a772fbab2d31d643044911b5"
var citySearchInput = $("")
var localStorage =

// display current day
var currentDay = dayjs().format("dddd, MMMM D YYYY");
var cardDay1 = 

function getWeather() {
  var cityName = document.getElementById("citySearchInput").value
  var geoApi = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey

  fetch(geoApi)
      .then(function (response) {
          return response.json()
      })

      .then(function (data) {
          console.log(data)
          cityLat = data[0].lat
          console.log(cityLat, "CITY LAT VALUE")
          cityLon = data[0].lon
          console.log(cityLon, "CITY LON VALUE")

          searchedCity = {
              Name: cityName,
              Lat: cityLat,
              Lon: cityLon,
          }

          console.log(searchedCity, "SC Value")

          searchHistory.push(searchedCity)
          console.log(searchHistory, "SEARCH History Value")

          window.localStorage.setItem(searchHistory, JSON.stringify(searchHistory))
          
          var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial&appid=" + apiKey

          fetch(weatherApi)
          .then(function (response) {
              return response.json()
          })
  
          .then(function (data) {
  
          })

      })

    };
