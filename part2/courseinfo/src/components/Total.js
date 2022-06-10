const Total =({courses})=>{
	const sum = courses.parts.reduce((total, part)=> total + part.exercises,0)
	return(
		<div>
			<p>The total number of excersies are {sum}</p>
		</div>
	)
}

export default Total