import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'
//import './index.css'
//const _= require('lodash')



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  const hook =() =>{
	personService
	  .getAll()
	  .then(response =>{
		setPersons(response)
	  })
  }
  useEffect(hook,[])

const notify  = (message, type='info') =>{
	setNotification({message, type})
	setTimeout(() => {
		setNotification(null)
	}, 3000);
}

const addPerson =(event)=>{
			event.preventDefault()
			const newPerson ={
				name: newName,
				number: newNumber
			}

		setNewNumber('')
		setNewName('')

		const existingPerson = persons.find(p => p.name.toLowerCase() === newPerson.name.toLowerCase())
		if(existingPerson) {
			const ok = window.confirm(`${existingPerson.name} is already added to phonebook, update number?`)
			if( ok ){
				personService.update(existingPerson.id, {...existingPerson, number: newNumber}).then(savedPerson =>{
					setPersons(persons.map(p => p.id === existingPerson.id ? savedPerson : p))
					notify(`Updated info of ${savedPerson.name}`)
				})
				.catch(error =>{
					notify(
						`the person '${existingPerson.name}' has already been added from the server`, 'alert'
					)
					setPersons(persons.filter( p => p.id !== existingPerson.id))
				})
				return 
			}
		}

		personService.create(newPerson).then(savedPerson => {
			setPersons(persons.concat(savedPerson))
			notify(`Added ${savedPerson.name}`)
		})

}

const deletePerson = id =>{
	const toDelete = persons.find( p => p.id === id)
	const ok = window.confirm(`Delete ${toDelete.name}`)
	if( ok ) {
		personService.remove(id).then(() => {
			setPersons(persons.filter(p => p.id !== id))
			notify(`Deleted ${toDelete.name}`)
		})
	}
}

const personsToShow = (filter.length === 0) ? persons : 
	persons.filter( p => p.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
	  <Notification notification={notification}/>
	  <Filter 
	  	value={filter} 
	  	handleChange={({target}) => setFilter(target.value)}
	   />
	  <PersonForm 
		name={newName}
		number={newNumber}
		handleNameChange ={({target}) => setNewName(target.value)}
		handleNumberChange ={({target}) => setNewNumber(target.value)}
		addPerson ={addPerson}
	   />
	  <Persons 
	  	persons={personsToShow} 
		handleDelete={deletePerson} 
		/>
    </div>
  )
}

export default App