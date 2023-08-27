// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7dcaaf6e95msh10bce7dd342392ep18e310jsne3e343c89988',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response => response.json())
.then(response =>{
	console.log(response)
	cloud_pct.innerHTML = response.cloud_pct
	humidity.innerHTML =response.humidity
	max_temp.innerHTML =response.max_temp
	min_temp.innerHTML =response.min_temp

	sunrise.innerHTML =response.sunrise
	sunset.innerHTML =response.sunset
	wind_degrees.innerHTML =response.wind_degrees
	temp.innerHTML =response.temp
})
.catch(err => console.error(err))
}
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value)
})
getWeather("Hyderabad")

del.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather("Delhi")
})
bbsr.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather("Bhubaneswar")
})
vara.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather("Varanasi")
})