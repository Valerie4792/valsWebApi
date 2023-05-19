let weatherAPIlink = 'https://api.openweathermap.org/data/2.5/forecast?q='
let apikey = '&appid=c92a709a5aef3442c58fe607972e771f';
let units = '&units=imperial';
let degSymbol = `&deg;F`






let searchField = document.getElementById('searchField');
let searchBtn = document.getElementById('searchBtn');
let currentCityDisplay = document.getElementById('currentCityDisplay');
let currentTemp = document.getElementById('currentTemp');
let currentDescription = document.getElementById('currentDescription');
let currentHigh = document.getElementById('currentHigh');
let currentLow = document.getElementById('currentLow');
let feelsLike = document.getElementById('feelsLike');
//d1
let d1Icon = document.getElementById('d1Icon');
let d1Desc = document.getElementById('d1Desc');
let d1H = document.getElementById('d1H');
let d1L = document.getElementById('d1L');
//d2
let d2Icon = document.getElementById('d2Icon');
let d2Desc = document.getElementById('d2Desc');
let d2H = document.getElementById('d2H');
let d2L = document.getElementById('d2L');
//d3
let d3Icon = document.getElementById('d3Icon');
let d3Desc = document.getElementById('d3Desc');
let d3H = document.getElementById('d3H');
let d3L = document.getElementById('d3L');
//d4
let d4Icon = document.getElementById('d4Icon');
let d4Desc = document.getElementById('d4Desc');
let d4H = document.getElementById('d4H');
let d4L = document.getElementById('d4L');
//d5
let d5Icon = document.getElementById('d5Icon');
let d5Desc = document.getElementById('d5Desc');
let d5H = document.getElementById('d5H');
let d5L = document.getElementById('d5L');



function fetchWeather(url){
    fetch(url)
        .then(
            response => response.json())
        .then(data => {
            console.log(data);
            // console.log(data.name);
        getWeather(data);

        })

}

//create function ot get weather data getWeather
function getWeather(weatherData){
    weatherArr = [];
    weatherArr.push(weatherData);
    console.log(weatherData)
    // currentCityDisplay.innerText = searchField.value;
    currentCityDisplay.innerText = weatherData.city.name;
    currentTemp.innerHTML = `${parseInt(weatherData.list[0].main.temp)}${degSymbol}`;
    currentLow.innerText = parseInt(weatherData.list[0].main.temp_min);
    currentHigh.innerText = parseInt(weatherData.list[0].main.temp_max);
    currentDescription.innerText = weatherData.list[0].weather[0].description;
    feelsLike.innerText = weatherData.list[0].main.feels_like;
//D1 card
    d1Desc.innerText = weatherData.list[1].weather[0].description;
    d1H.innerText = parseInt(weatherData.list[1].main.temp_max);
    d1L.innerText = parseInt(weatherData.list[1].main.temp_min);
//D2 card
    d2Desc.innerText = weatherData.list[2].weather[0].description;
    d2H.innerText = parseInt(weatherData.list[2].main.temp_max);
    d2L.innerText = parseInt(weatherData.list[2].main.temp_min);

//D3 card
    d3Desc.innerText = weatherData.list[3].weather[0].description;
    d3H.innerText = parseInt(weatherData.list[3].main.temp_max);
    d3L.innerText = parseInt(weatherData.list[3].main.temp_min);
//D4
    d4Desc.innerText = weatherData.list[4].weather[0].description;
    d4H.innerText = parseInt(weatherData.list[4].main.temp_max);
    d4L.innerText = parseInt(weatherData.list[4].main.temp_min);
//D5
    d5Desc.innerText = weatherData.list[5].weather[0].description;
    d5H.innerText = parseInt(weatherData.list[5].main.temp_max);
    d5L.innerText = parseInt(weatherData.list[5].main.temp_min);
    
    searchField.value;

}


searchBtn.addEventListener('click', e => {
    fetchWeather(`${weatherAPIlink}${searchField.value}${apikey}${units}`)
    // this is taking search.value which is input for whatever user searches
    // loadPage('/searchedCity.html');
    // console.log('This is not working')

    
    // searchField = searchField.value;
    
getWeather();
  
});


// searchField.addEventListener('keypress', e =>{
//     if(e.key =='Enter'){
//         fetchWeather(`${weatherAPIlink}${searchField.value}${apikey}${units}`);
//         currentCityDisplay.innerText = searchField.value;
//         searchField = searchField.value;
       
//     }
// });