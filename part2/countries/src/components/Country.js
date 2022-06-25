import React from 'react'
import CountryName from './CountryName'
const Country = ({countries,setChosenCountry}) => {
	
  return (
	<div> 
			{ countries.length > 10
				? 'Too many matches, specify another filter'
				: countries.map(country =>
					<CountryName  key={country.name.common} country={country} setChosenCountry={setChosenCountry}/>
					)
			}
	</div>
  )
}

export default Country