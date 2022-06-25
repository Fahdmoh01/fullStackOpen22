import React from 'react'

const CountryName = ({country, setChosenCountry}) => {
	const handleClick =()=>{
		setChosenCountry(country.name.common)
	}	
  return (
	<div>
		{country.name.common} 
		<button onClick={handleClick}>show</button>
	</div>
  )
}

export default CountryName