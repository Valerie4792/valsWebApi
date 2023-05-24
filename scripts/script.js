let weatherAPIlink = 'https://api.openweathermap.org/data/2.5/forecast?q='
let apikey = '&appid=c92a709a5aef3442c58fe607972e771f';
let units = '&units=imperial';
let degSymbol = '&deg;F'

let searchedCity = '';

let searchField = document.getElementById('searchField');
let searchBtn = document.getElementById('searchBtn');
let addFavorites = document.getElementById('addFavorites');
let delFavorites = document.getElementById('delFavorites');
let injectFav = document.getElementById('inject');
let currentCityDisplay = document.getElementById('currentCityDisplay');
let currentTemp = document.getElementById('currentTemp');
let currentDescription = document.getElementById('currentDescription');
let currentHigh = document.getElementById('currentHigh');
let currentLow = document.getElementById('currentLow');
let feelsLike = document.getElementById('feelsLike');
//d1
let d1Temp = document.getElementById('d1Temp');
let d1Icon = document.getElementById('d1Icon');
let d1Desc = document.getElementById('d1Desc');
let d1H = document.getElementById('d1H');
let d1L = document.getElementById('d1L');
//d2
let d2Temp = document.getElementById('d2Temp');
let d2Icon = document.getElementById('d2Icon');
let d2Desc = document.getElementById('d2Desc');
let d2H = document.getElementById('d2H');
let d2L = document.getElementById('d2L');
//d3
let d3Temp = document.getElementById('d3Temp');
let d3Icon = document.getElementById('d3Icon');
let d3Desc = document.getElementById('d3Desc');
let d3H = document.getElementById('d3H');
let d3L = document.getElementById('d3L');
//d4
let d4Temp = document.getElementById('d4Temp');
let d4Icon = document.getElementById('d4Icon');
let d4Desc = document.getElementById('d4Desc');
let d4H = document.getElementById('d4H');
let d4L = document.getElementById('d4L');
//d5
let d5Temp = document.getElementById('d5Temp');
let d5Icon = document.getElementById('d5Icon');
let d5Desc = document.getElementById('d5Desc');
let d5H = document.getElementById('d5H');
let d5L = document.getElementById('d5L');

//favorites
let favArray = [];
let weatherArray = [];
let favData = JSON.parse(localStorage.getItem('favWeather'));
 

//favoriteData
if(favData && favData!= null){
    favArray = favData;

    for(let i = 0; i < favData.length; i++){
        if(i===0){

            //creating elements to display
            fetchWeather(favData[i].url);
            let colDiv = document.createElement('div');
            colDiv.classList = 'col';
            let pTag = document.createElement('p');
            pTag.innerText = favData[i].name;
            pTag.addEventListener('click', e => {
            fetchWeather(favData[i].url);
            })

            colDiv.appendChild(pTag);
            injectFav.appendChild(colDiv);

        }


        else{

        //creating elements to display
        let colDiv = document.createElement('div');
        colDiv.classList = 'col';
        let pTag = document.createElement('p');
        pTag.innerText = favData[i].name;
        pTag.addEventListener('click', e => {
        fetchWeather(favData[i].url);
        })

        colDiv.appendChild(pTag);
        injectFav.appendChild(colDiv);

        

    }
    }

}



//fetch function
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

//create function to get weather data getWeather
function getWeather(weatherData){
    weatherArray = [];
    weatherArray.push(weatherData);
    console.log(weatherData)

// current weather 
    currentCityDisplay.innerText = weatherData.city.name;
    currentTemp.innerHTML = `${parseInt(weatherData.list[0].main.temp)}${degSymbol}`;
    currentLow.innerText = parseInt(weatherData.list[0].main.temp_min)
    currentHigh.innerText = parseInt(weatherData.list[0].main.temp_max);
    currentDescription.innerText = weatherData.list[0].weather[0].description;
    feelsLike.innerText = parseInt(weatherData.list[0].main.feels_like);
//D1 card
    d1Icon.src = `https://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}.png`;
    d1Temp.innerText = parseInt(weatherData.list[1].main.temp);
    d1Desc.innerText = weatherData.list[1].weather[0].description;
    // d1H.innerText = parseInt(weatherData.list[1].main.temp_max);
    // d1L.innerText = parseInt(weatherData.list[1].main.temp_min);
//D2 card
    d2Icon.src = `https://openweathermap.org/img/wn/${weatherData.list[2].weather[0].icon}.png`;
    d2Temp.innerText = parseInt(weatherData.list[2].main.temp);
    d2Desc.innerText = weatherData.list[2].weather[0].description;
    // d2H.innerText = parseInt(weatherData.list[2].main.temp_max);
    // d2L.innerText = parseInt(weatherData.list[2].main.temp_min);

//D3 card
    d3Icon.src = `https://openweathermap.org/img/wn/${weatherData.list[3].weather[0].icon}.png`;
    d3Temp.innerText = parseInt(weatherData.list[3].main.temp);
    d3Desc.innerText = weatherData.list[3].weather[0].description;
    // d3H.innerText = parseInt(weatherData.list[3].main.temp_max);
    // d3L.innerText = parseInt(weatherData.list[3].main.temp_min);
//D4
    d4Icon.src = `https://openweathermap.org/img/wn/${weatherData.list[4].weather[0].icon}.png`;
    d4Temp.innerText = parseInt(weatherData.list[4].main.temp);
    d4Desc.innerText = weatherData.list[4].weather[0].description;
    // d4H.innerText = parseInt(weatherData.list[4].main.temp_max);
    // d4L.innerText = parseInt(weatherData.list[4].main.temp_min);
//D5
    d5Icon.src = `https://openweathermap.org/img/wn/${weatherData.list[5].weather[0].icon}.png`;
    d5Temp.innerText = parseInt(weatherData.list[5].main.temp);
    d5Desc.innerText = weatherData.list[5].weather[0].description;
    // d5H.innerText = parseInt(weatherData.list[5].main.temp_max);
    // d5L.innerText = parseInt(weatherData.list[5].main.temp_min);

    BgDescription(weatherData);
}


searchBtn.addEventListener('click', e => {
    fetchWeather(`${weatherAPIlink}${searchField.value}${apikey}${units}`)
    // this is taking search.value which is input for whatever user searches
    // loadPage('/searchedCity.html');
    // console.log('This is not working')   
getWeather();
  
});

//favorites button
addFavorites.addEventListener('click', e => {
    let obj ={
        name: weatherArray[weatherArray.length -1].city.name,
        url: `${weatherAPIlink}${searchField.value}${apikey}${units}`
    }
    // pushing objects to our favArray
    favArray.push(obj);

    let colDiv = document.createElement('div');
    colDiv.classList = 'col';
    let pTag = document.createElement('p');
    pTag.innerText = obj.name;
    pTag.addEventListener('click', e => {
        fetchWeather(obj.url);
    })
    colDiv.appendChild(pTag);
    injectFav.appendChild(colDiv);

    // save to local storage, stringify converts json to js , saving to local storage and passing in our array to convert to json format
    localStorage.setItem('favWeather', JSON.stringify(favArray))

})

// delete button
delFavorites.addEventListener('click', e => {
    for(let i = 0; i<favArray.length; i++){
        if(currentCityDisplay.innerText.toLowerCase()== favArray[i].name.toLowerCase()){
            favArray.splice(i, 1);
            let colDiv = injectFav.getElementsByClassName('col')[i];
            injectFav.removeChild(colDiv);
        }
    }
    localStorage.setItem('favWeather', JSON.stringify(favArray));
        
    })


// searchField.addEventListener('keypress', e =>{
//     if(e.key =='Enter'){
//         fetchWeather(`${weatherAPIlink}${searchField.value}${apikey}${units}`);
//         currentCityDisplay.innerText = searchField.value;
//         searchField = searchField.value;
       
//     }
// });

//function to change background images depending on description from API
function BgDescription(weatherData) {
    const description = weatherData.list[0].weather[0].description.toLowerCase();
  
    if (description.includes('clear sky')) {
      document.body.style.backgroundImage = "url('../images/bgImages/clearSkyDay.jpg')";
    } 
    else if (description.includes('few clouds')) {
      document.body.style.backgroundImage = "url('../images/bgImages/fewClouds.jpg')";
    } 
    else if (description.includes('scattered clouds')){
        document.body.style.backgroundImage = "url('../images/bgImages/scatteredClouds.jpg')";
    } 
    
    else if (description.includes('broken clouds')){
        document.body.style.backgroundImage = "url('../images/bgImages/brokenCloudsNight.jpg')";
    }
    else if (description.includes('shower rain')){
        document.body.style.backgroundImage = "url('../images/bgImages/showerRain.jpg')";
    } 

    else if (description.includes('rain')) {
      document.body.style.backgroundImage = "url('../images/bgImages/rainy.jpg')";
    } 
    
    else if (description.includes('thunderstorm')){
        document.body.style.backgroundImage = "url('../images/bgImages/thunderStorm.jpg')";
    }
    else if (description.includes('snow')){
        document.body.style.backgroundImage = "url('../images/bgImages/snowDay.jpg')";
    }
    else if (description.includes('mist')){
        document.body.style.backgroundImage = "url('../images/bgImages/mist.jpg')";
    }
   
    
    else {
      // Default background image if no specific condition is met
      document.body.style.backgroundImage = "url('../images/bgImages/default.jpg')";
    }
  }
  