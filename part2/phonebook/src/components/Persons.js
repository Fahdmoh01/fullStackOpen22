import React from 'react'
import Contact from './Contact'
const Persons = ({displayAll,removePerson}) => {
  return (
	<div>{
		displayAll.length === 0 
		? <p>No Results Found</p>
		: displayAll.map((person)=> 
			<Contact 
				key={person.id} 
				name={person.name} 
				number={person.number} 
				removePerson={removePerson} 
				personID={person.id}
				/>)
		}</div>
  )
}

export default Persons