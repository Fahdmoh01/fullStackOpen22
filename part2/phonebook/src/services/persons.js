import axios from 'axios'
const url = 'http://localhost:3001/persons'

const getAll = () => {
	const request = axios.get(url)
	return request.then(response => response.data)
}

const create= newObject =>{
	const response = axios.post(url, newObject)
	return response.then(response => response.data)
}

const remove = id =>{
	return axios.delete(`${url}/${id}`)
}

const update = (id,newObject) =>{
	const response = axios.put(`${url}/${id}`, newObject)
	return response.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{getAll, create, remove, update}