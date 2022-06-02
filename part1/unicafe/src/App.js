import {useState} from 'react'

const Header=({text})=>{
	return(
		<h1>{text}</h1>
	)
}

const Button =({handleClick, text})=>{
	return(
		<>
			<button onClick={handleClick}>{text}</button>
		</>
	)
}

const StatisticsData = ({value, text})=>{
	return(
		<>
			<tr>
				<td>{text}</td>
				<td>{value}</td>
			</tr>
		</>
	)
}
const Statistics =({statsData})=>{
	if(statsData.all === 0){
		return(
			<div>
			<p>No feedback given</p>
			</div>
		)
	}
	return(
		<div>
		  <table>
			<tbody>
		  <StatisticsData value={statsData.good} text="good"/>
		  <StatisticsData value={statsData.neutral} text="neutral"/>
		  <StatisticsData value={statsData.bad} text="bad"/>
		  <StatisticsData value={statsData.all} text="all"/>
		  <StatisticsData value={statsData.average()} text="average"/>
		  <StatisticsData value={`${statsData.positive()} %`} text="good"/>
			</tbody>
		  </table>
	
		</div>
	  )
}

const App =()=>{
	//save clicks of each button to its own state
	const[good, setGood] = useState(0)
	const[neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleGoodClick =()=> setGood(good + 1)
	const handleNeutralClick =()=> setNeutral(neutral + 1)
	const handleBadClick =()=> setBad(bad + 1)

	const statsData ={
		good:good,
		neutral: neutral,
		bad: bad,
		all: good + neutral + bad,
		average: function() {
			return this.all/3
		},
		positive: function(){
			return (this.good/this.all) * 100
		}
	}
	
	return(
		<div>
			<Header text = "give feedback" />
			<Button handleClick={handleGoodClick} text="good" />
			<Button handleClick={handleNeutralClick} text="neutral" />
			<Button handleClick={handleBadClick} text="bad" />
			<Header text="statistics"/>
			<Statistics statsData = {statsData}/>
		</div>
	)
}


export default App