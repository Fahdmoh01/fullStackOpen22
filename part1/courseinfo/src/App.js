const Header =({course})=>{
	return(
		<div>
			<h1>{course}</h1>
		</div>
	)
}

const Part=({name, exercises})=>{
	return(
		<p>{name} {exercises}</p>
	)
}

const Content =({course})=>{
	return(
		<div>
		<Part name={course.parts[0].name} excercises={course.parts[0].exercises}/>
		<Part name={course.parts[1].name} excercises={course.parts[1].exercises}/>
		<Part name={course.parts[2].name} excercises={course.parts[2].exercises}/>
		</div>
	)
}

const Total =({total})=>{
	return(
		<div>
			<p>The total number of excersies are {total}</p>
		</div>
	)
}

const App = () =>{
	const course = {
		name: 'Half Stack application development',
		parts: [
		  {
			name: 'Fundamentals of React',
			exercises: 10
		  },
		  {
			name: 'Using props to pass data',
			exercises: 7
		  },
		  {
			name: 'State of a component',
			exercises: 14
		  }
		]
	  }	

	return (
		<div>
			<Header course = {course.name}/>
			<Content course ={course}/>
			<Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
		</div>
	)
}
export default App;
