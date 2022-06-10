import Part from './Part'

const Content =({courses})=>{
	//console.log('The Props in Content', course.parts[0].exercises)
	return(
		<div>
		{courses.parts.map((part) =><Part key={part.id} name={part.name} exercises={part.exercises}/>)}
		</div>
	)
}

export default Content