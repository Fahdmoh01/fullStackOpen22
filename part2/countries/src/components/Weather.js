// import {useState,useEffect} from 'react'
// import axios from 'axios'

// const Weather = ({ country }) => {
// 	//initial state for weather
// 	const [weather, setWeather] = useState("");
// 	const [displayWeather, setDisplayWeather] = useState(false);
// 	console.log("weather: ", weather);
// 	console.log("weather.current: ", weather.current);
// 	//using API with the specific country capital name for weather as per docs
// 	useEffect(() => {
// 	  const key = `b09ca6e207dff7a6783a39b16517388e`;
// 	  const url =`http://api.openweathermap.org/data/2.5/find?q=${country.capital}&units=imperial&type=accurate&mode=xml&APPID=${key}`
// 	  //const url = `http://api.weatherstack.com/current?appid=${key}&query=${country.capital}`;
// 	  axios.get(url).then(response => {
// 		console.log("response.data: ", response.data);
// 		setWeather(response.data.current); //updating state based off JSON values
// 		setDisplayWeather(true); //updating state
// 	  });
// 	}, [country.capital]); //we want to only fetch data when the component mounts -> the effect depends on the query so when changed, data request is fired
  
// 	return (
// 	  <div>
// 		{!displayWeather ? (
// 		  <p>Please wait...</p>
// 		) : (
// 		  <div>
// 			<h3>Weather in {country.capital}</h3>
// 			<div>
// 			  <img
// 				src={weather.weather_icons}
// 				alt={weather.weather_descriptions}
// 			  />
// 			</div>
  
// 			<p>
// 			  Current time is{" "}
// 			  <span>
// 				{weather.observation_time}
// 			  </span>
// 			</p>
// 			<p>
// 			  <span>Temperature:</span>{" "}
// 			  {weather.temperature}c
// 			</p>
// 			<p>
// 			  {" "}
// 			  <span>Conditions: </span>
// 			  {weather.weather_descriptions}
// 			</p>
  
// 			<p>
// 			  <span>Wind: </span>{" "}
// 			  {weather.wind_speed} kph {weather.wind_dir}
// 			</p>
// 		  </div>
// 		)}
// 	  </div>
// 	);
//   };
  
//   export default Weather;