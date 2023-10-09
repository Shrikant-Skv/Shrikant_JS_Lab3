
document.getElementById("current-date").textContent = getTodaysDate()
//for taking current date as page is loading even without searching any city

let searchBox = document.getElementById("search-city")
searchBox.addEventListener("keypress",(e) => {
    if(e.keyCode == 13){        //Keycode 13 is for Enter
        getWeatherData(searchBox.value)
    }
})

function getWeatherData(cityName){
    let apiKey = "7e3f21edee540e6110af347b55eb1ab2"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(res => {
        displayWeatherData(res)
    })
}

function displayWeatherData(weatherData){
    let city = document.querySelector(".city")
    let date = document.querySelector(".date")
    let temp = document.querySelector(".temp")
    let weather = document.querySelector(".weather")
    let highlow = document.querySelector(".high-low")

    city.innerText = `${weatherData.name}, ${weatherData.sys.country}`
    temp.innerText = `${Math.round(weatherData.main.temp)}°c`
    weather.innerText = `${weatherData.weather[0].main}`

    highlow.innerText = `${Math.round(weatherData.main.temp_min)}°c / ${Math.round(weatherData.main.temp_max)}°c`
    date.innerText = getTodaysDate()

}

function getTodaysDate(){
    let date = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()]
    let month = months[date.getMonth()]

    return `${day} ${date.getDate()} ${month} ${date.getFullYear()}`
}