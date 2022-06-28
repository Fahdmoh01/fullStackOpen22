import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import numberServices from './services/numbers'

import axios from 'axios'
//const _= require('lodash')



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [showAll, setShowAll] = useState('')

  const hook =() =>{
	axios
	  .get('http://localhost:3001/persons')
	  .then(response =>{
		setPersons(response.data)
	  })
  }
  useEffect(hook,[])

const addPerson =(event)=>{
	event.preventDefault()
	const personObject ={
		name:newName,
		number:newPhoneNumber
	}

	if(persons.some(person => person.name.toLowerCase() === newName.toLocaleLowerCase())){
		if(window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)){
			const person = persons.find(personDetails => personDetails.name === newName)
			const changedPhoneNumber = {...person, number: newPhoneNumber}

			numberServices
				.updateNumber(person.id, changedPhoneNumber)
				.then(returnedPerson =>{ 
					setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
					setNewName('')
					setNewPhoneNumber('')
				})
		}

	}else{
		numberServices
			.createNumber(personObject)
			.then( returnedNumber => {
				setPersons(persons.concat(returnedNumber))
				setNewName('')
				setNewPhoneNumber('')
			})
	}
} 

const removePerson =(id) =>{
	const removeName = persons.find(person => person.id === id).name
	if(window.confirm(`Do you want to delete ${removeName}`)){
		numberServices
			.deleteNumber(id)
			.then(() =>{
				setPersons(persons.filter(person =>  person.id !== id))
			})
			.catch(
				error => alert(`An Error Occurred while removing ${removeName}`,error)
			)
	}
}

 const handleNameChange=(event)=>{
	setNewName(event.target.value)
 }
 
 const handlePhoneNumberChange=(event)=>{
	console.log(event.target.value)
	setNewPhoneNumber(event.target.value)
 }

 let displayAll
 const handleSearch =(event)=>{
	setShowAll(event.target.value)
 }
 showAll === '' ? displayAll = persons : displayAll = persons.filter(person => person.name.toLowerCase().startsWith(showAll.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
	  <Filter 
	  	showAll={showAll} 
	  	handleSearch={handleSearch}
	   />
	  <h2>add a new</h2>
	  <PersonForm 
	  	addPerson={addPerson} 
		newName={newName} 
		handleNameChange={handleNameChange} 
		newPhoneNumber={newPhoneNumber}
		handlePhoneNumberChange={handlePhoneNumberChange}
	   />
      <h2>Numbers</h2>
	  <Persons displayAll={displayAll} removePerson={removePerson} />
    </div>
  )
}

export default App