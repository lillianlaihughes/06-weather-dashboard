/*
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
*/

/* NOTE TO SELF: use OpenWeather API, DayJS, and jQuery 
-- choose Bootstrap or MUI for css?
*/

// create an input field for city search
// store city in search history (local storage)
var citySearchInput = $("")
var localStorage =

// display current day
var currentDay = dayjs().format("dddd, MMMM D YYYY");

var cardDay1 = 

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
