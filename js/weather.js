const API_key = `e2e6ba9af66be0a1620d92f8824379f5`;
const loadWeather = async(city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);

}
const displayWeather = (data) =>{
    console.log(data);
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = `
       <h1>${data.name}</h1>
       <h3><span>${data.main.temp}</span>&deg;C</h3>
       <h1 class="lead">${data.weather[0].main}</h1>
    `;
}
document.getElementById('search-btn').addEventListener('click', function(){
    console.log('hey')
    const inputCity = document.getElementById('input-field');
    inputCityString = inputCity.value;
    loadWeather(inputCityString);
})

loadWeather('Dhaka');