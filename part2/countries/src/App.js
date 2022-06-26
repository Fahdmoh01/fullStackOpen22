import{useState, useEffect} from 'react'
import Country from './components/Country'
import CountryInfo from './components/CountryInfo'
import axios from 'axios'

const App = () => {
  const[countries, setCountries]= useState([])
  const[countryChosen, setChosenCountry] = useState('')

  const hook =()=>{
	axios
		.get('https://restcountries.com/v3.1/all')
		.then(response => {
			console.log(response.data)
			setCountries(response.data)
		})
  }
  useEffect(hook,[])
  
  const weatherHook =()=>{
	axios
	.get(`http://api.weatherstack.com/current?access_key={b09ca6e207dff7a6783a39b16517388}`)
	.then(response =>  {
		const weatherReport = response.data
		console.log(weatherReport)
		})
  }

  useEffect(weatherHook,[])

  const handleSearch =(event)=>{
	setChosenCountry(event.target.value)
  }

const displayCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(countryChosen.trim().toLowerCase())
  )
  
  return (
	<>
	<div>find countries <input value={countryChosen} onChange={handleSearch}/></div>
	 {
		displayCountries.length === 1
			? <CountryInfo country={displayCountries[0]} />
			: <Country countries={displayCountries} setChosenCountry={setChosenCountry} />

	 }
	 
	</>
  )
}

export default App