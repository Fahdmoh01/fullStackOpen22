import React from 'react'

const Contact = ({name, number, removePerson,personID}) => {
	const deleteNumber =()=>{
		removePerson(personID)
	}

  return (
	<div>{name} {number} <button onClick={deleteNumber}>delete</button></div>
  )
}

export default Contact