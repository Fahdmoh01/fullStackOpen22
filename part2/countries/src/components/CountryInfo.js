import React from 'react'
// import Weather from './Weather'

const CountryInfo = ({country}) => {
	
  return (
	<>
	<div><h2>{country.name.common}</h2></div>
	<div>capital {country.capital}</div>
	<div>area {country.area}</div>
	<div>
		<h3>Languages:</h3> 
		<ul>
			{Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
		</ul>
	</div>
	<div><img width='200' src={country.flags.svg} alt='country flag'/></div>
	</>
  )
}

export default CountryInfo