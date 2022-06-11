import React from 'react'

const Filter = ({handleSearch, showAll}) => {
  return (
	<div>filter shown with: <input value={showAll} onChange={handleSearch}/> </div>
  )
}

export default Filter