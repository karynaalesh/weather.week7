function updateInfo(responce){
   
    let temperatureElement = document.querySelector("#temperature");
    let temperature = responce.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = responce.data.city;


    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
let apiKey = "d08fodtb894540abf5faf86b23ef312e";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
axios.get(apiUrl).then(updateInfo);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
 
    searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

searchCity("Manchester");