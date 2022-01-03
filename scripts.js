let weather = {
    apikey: "33e4b22703c3a9b6ded9e5c888ea4115",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apikey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerHTML = "City: " + name.toUpperCase();
        document.querySelector(".temp").innerHTML = temp + " °C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Speed: " + speed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1660x900/?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".text-box").value)
    }
};

document.querySelector(".submit").addEventListener("click", function() {
    weather.search();
})
document.querySelector(".text-box").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search()
    }
})