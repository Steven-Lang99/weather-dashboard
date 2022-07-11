
var apiKey = `606c74c9dfecaef70d8833a810c4eec0`
var cityHistory = [];
if(localStorage.getItem("history")) {
    cityHistory = JSON.parse(localStorage.getItem("history"))
}

function cityName(){
    var city = document.getElementById("search").value;
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data)
        var cityNameEl = document.querySelector('#city-name')
        cityNameEl.innerText = `City: ${data.name}`

        var cityTempEl = document.querySelector('#city-temp')
        cityTempEl.innerText = `Temp: ${data.main.temp}°F`

        var cityWindEl = document.querySelector('#city-wind')
        cityWindEl.innerText = `Wind: ${data.wind.speed} MPH`

        var cityHumidityEl = document.querySelector('#city-humidity')
        cityHumidityEl.innerText = `Humidity: ${data.main.humidity}%`
    

        handleUviAndForecast(data)
        cityHistory.push(data.name);
        localStorage.setItem("history", JSON.stringify(cityHistory))
      })
    // console.log(data)
}

function handleUviAndForecast (locationInformation) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationInformation.coord.lat}&lon=${locationInformation.coord.lon}&units=imperial&appid=${apiKey}`)
        .then(res => res.json())
        .then(function (oneCallData) {
            console.log(oneCallData)

            var uvEl = document.querySelector('#city-UVIndex')
            uvEl.innerText = `UV Index: ${oneCallData.current.uvi}`

            //to present to the user
            //I can manipulate my object in this function level

            structureCards(oneCallData.daiy)
        })
}

function structureCards(weatherArr) {




}

// cityName()
$('#btn').on('click', cityName)
    // event.preventDefault();
    // var userInput = $('#search').value
    // var city = userInput


    

// fetch('')
//   .then(function(res) {
//     return res.json()
//   })
//   .then(function(data) {
//     // Do something with the data
//     console.log(data);
//   });
 