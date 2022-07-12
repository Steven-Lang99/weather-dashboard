
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
        var dateEl = moment().format("l");
        var cityNameEl = document.querySelector('#city-name')
        cityNameEl.innerText = `City: ${data.name}  ${dateEl}`

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

            // This code is for the UV index and 5 day forecast. I wasn't sure how to put it in a for loop for each day so I just did each day individualy
            var uvEl = document.querySelector('#city-UVIndex')
            uvEl.innerText = `UV Index: ${oneCallData.current.uvi}`

            var day1 = moment().add(1, "days").format("l");
            var dayEl = document.querySelector('#city-date')
            dayEl.innerText = `${day1}`
            var cityTempEl1 = document.querySelector('#city-temp-day')
            cityTempEl1.innerText = `Temp: ${oneCallData.daily[0].temp.day}°F`

            var cityWindEl1 = document.querySelector('#city-wind-day')
            cityWindEl1.innerText = `Wind: ${oneCallData.daily[0].wind_speed} MPH`

            var cityHumidityEl1 = document.querySelector('#city-humidity-day')
            cityHumidityEl1.innerText = `Humidity: ${oneCallData.daily[0].humidity}%`



            var day2 = moment().add(2, "days").format("l");
            var dayEl2 = document.querySelector('#city-date2')
            dayEl2.innerText = `${day2}`
            var cityTempEl2 = document.querySelector('#city-temp-day2')
            cityTempEl2.innerText = `Temp: ${oneCallData.daily[1].temp.day}°F`

            var cityWindEl2 = document.querySelector('#city-wind-day2')
            cityWindEl2.innerText = `Wind: ${oneCallData.daily[1].wind_speed} MPH`

            var cityHumidityEl2 = document.querySelector('#city-humidity-day2')
            cityHumidityEl2.innerText = `Humidity: ${oneCallData.daily[1].humidity}%`




            var day3 = moment().add(3, "days").format("l");
            var dayEl3 = document.querySelector('#city-date3')
            dayEl3.innerText = `${day3}`
            var cityTempEl3 = document.querySelector('#city-temp-day3')
            cityTempEl3.innerText = `Temp: ${oneCallData.daily[2].temp.day}°F`

            var cityWindEl3 = document.querySelector('#city-wind-day3')
            cityWindEl3.innerText = `Wind: ${oneCallData.daily[2].wind_speed} MPH`

            var cityHumidityEl3 = document.querySelector('#city-humidity-day3')
            cityHumidityEl3.innerText = `Humidity: ${oneCallData.daily[2].humidity}%`


            var day4 = moment().add(4, "days").format("l");
            var dayEl4 = document.querySelector('#city-date4')
            dayEl4.innerText = `${day4}`
            var cityTempEl4 = document.querySelector('#city-temp-day4')
            cityTempEl4.innerText = `Temp: ${oneCallData.daily[3].temp.day}°F`

            var cityWindEl4 = document.querySelector('#city-wind-day4')
            cityWindEl4.innerText = `Wind: ${oneCallData.daily[3].wind_speed} MPH`

            var cityHumidityEl4 = document.querySelector('#city-humidity-day4')
            cityHumidityEl4.innerText = `Humidity: ${oneCallData.daily[3].humidity}%`




            var day5 = moment().add(5, "days").format("l");
            var dayEl5 = document.querySelector('#city-date5')
            dayEl5.innerText = `${day5}`
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
 