import axios from 'axios'
const url = 'http://localhost:3001/persons'

const createNumber= numberObject =>{
	const response = axios.post(url, numberObject)
	return response.then(response => response.data)
}

const deleteNumber = id =>{
	const response = axios.delete(`${url}/${id}`)
	return response.then(response => response.data )
}

const updateNumber = (id,numberObject) =>{
	const response = axios.put(`${url}/${id}`, numberObject)
	return response.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{createNumber, deleteNumber , updateNumber}