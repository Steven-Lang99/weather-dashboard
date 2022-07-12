// var dateEl = moment().format("l");
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

            var cityTempEl1 = document.querySelector('#city-temp-day')
            cityTempEl1.innerText = `Temp: ${oneCallData.daily[0].temp.day}°F`

            var cityWindEl1 = document.querySelector('#city-wind-day')
            cityWindEl1.innerText = `Wind: ${oneCallData.daily[0].wind_speed} MPH`

            var cityHumidityEl1 = document.querySelector('#city-humidity-day')
            cityHumidityEl1.innerText = `Humidity: ${oneCallData.daily[0].humidity}%`


            var cityTempEl2 = document.querySelector('#city-temp-day2')
            cityTempEl2.innerText = `Temp: ${oneCallData.daily[1].temp.day}°F`

            var cityWindEl2 = document.querySelector('#city-wind-day2')
            cityWindEl2.innerText = `Wind: ${oneCallData.daily[1].wind_speed} MPH`

            var cityHumidityEl2 = document.querySelector('#city-humidity-day2')
            cityHumidityEl2.innerText = `Humidity: ${oneCallData.daily[1].humidity}%`


            var cityTempEl3 = document.querySelector('#city-temp-day3')
            cityTempEl3.innerText = `Temp: ${oneCallData.daily[2].temp.day}°F`

            var cityWindEl3 = document.querySelector('#city-wind-day3')
            cityWindEl3.innerText = `Wind: ${oneCallData.daily[2].wind_speed} MPH`

            var cityHumidityEl3 = document.querySelector('#city-humidity-day3')
            cityHumidityEl3.innerText = `Humidity: ${oneCallData.daily[2].humidity}%`


            var cityTempEl4 = document.querySelector('#city-temp-day4')
            cityTempEl4.innerText = `Temp: ${oneCallData.daily[3].temp.day}°F`

            var cityWindEl4 = document.querySelector('#city-wind-day4')
            cityWindEl4.innerText = `Wind: ${oneCallData.daily[3].wind_speed} MPH`

            var cityHumidityEl4 = document.querySelector('#city-humidity-day4')
            cityHumidityEl4.innerText = `Humidity: ${oneCallData.daily[3].humidity}%`


            var cityTempEl5 = document.querySelector('#city-temp-day5')
            cityTempEl5.innerText = `Temp: ${oneCallData.daily[4].temp.day}°F`

            var cityWindEl5 = document.querySelector('#city-wind-day5')
            cityWindEl5.innerText = `Wind: ${oneCallData.daily[4].wind_speed} MPH`

            var cityHumidityEl5 = document.querySelector('#city-humidity-day5')
            cityHumidityEl5.innerText = `Humidity: ${oneCallData.daily[4].humidity}%`


            //to present to the user
            //I can manipulate my object in this function level

            structureCards(oneCallData.daiy)
        })
}

function structureCards(weatherArr) {

    

    // var cityWindEl1 = document.querySelector('#city-wind')
    // cityWindEl1.innerText = `Wind: ${data.wind.speed} MPH`

    // var cityHumidityEl1 = document.querySelector('#city-humidity')
    // cityHumidityEl1.innerText = `Humidity: ${data.main.humidity}%`


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
 