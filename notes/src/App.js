import{useState, useEffect} from 'react'
import './index.css'

import Note from './components/Note'
import noteServices from './services/notes'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {
  const[notes, setNotes] = useState([])
  const[newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)


	const hook = () =>{
	  noteServices
		.getAll()	
		.then(initialNotes => {
			setNotes(initialNotes)	
		})
	}

	useEffect(hook,[]) // the second parameter of the useEffect Method is used to specify how often the effect is run. 
	//if the second parameter is [] then the effect is only run along witht the first render of the component.


	const addNote = (event) =>{
		event.preventDefault()
		const noteObject ={
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
		}

		noteServices
			.create(noteObject)
			.then(returnedNote => {
				setNotes(notes.concat(returnedNote))
				setNewNote('')
			  })
		
	}


	const  handleNoteChange =(event) =>{
		setNewNote(event.target.value)
	}


	const toggleImportanceOf =(id) =>{
		const note = notes.find(n => n.id === id)
		const changedNote = {...note, important: !note.important}

		noteServices
			.update(id,changedNote)
			.then(returnedNote => {
				setNotes(notes.map(note => note.id !== id ? note : returnedNote))
			}).catch(error => {
				setErrorMessage(
				  `Note '${note.content}' was already removed from server`
				)
				setTimeout(() =>{
					setErrorMessage(null)
				}, 5000)
				setNotes(notes.filter(n => n.id !== id))
			  }) 
	}

	const notesToShow = showAll
		? notes
		: notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
	  <Notification message={errorMessage} />
	  <div>
		<button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
		</div>
      <ul>
        {notesToShow.map(note => 
          <Note 
		  	key={note.id} 
			note={note} 
			toggleImportance={()=>toggleImportanceOf(note.id)}
			/>
        )}
      </ul>
	  <form onSubmit={addNote}>
		  <input value={newNote} onChange={handleNoteChange}/>
		  <button type='submit'>save</button>
	  </form>
	  <Footer />
    </div>
  )
}

export default App