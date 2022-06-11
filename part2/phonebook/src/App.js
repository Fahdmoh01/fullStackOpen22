import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const _= require('lodash')



const App = () => {
  const [persons, setPersons] = useState([{id:1, name: 'Arto Hellas', number: '040-1234567'}]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [showAll, setShowAll] = useState('')

const addPerson =(event)=>{
	event.preventDefault()
	const personObject ={
		name:newName,
		number:newPhoneNumber,
		id:persons.length + 1
	}

	if(persons.some(person => _.isEqual(person.name,personObject.name) && _.isEqual(person.number,personObject.number) )){
		alert(`${newName} is already added to phonebook`)
		return
	}
	setPersons(persons.concat(personObject))
	setNewName('')
	setNewPhoneNumber('')

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
 if(showAll === ''){
	displayAll = persons
 }else{
	displayAll = persons.filter(person => person.name.includes(showAll))
	console.log(displayAll)
 }

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
	  <Persons displayAll={displayAll} />
    </div>
  )
}

export default App