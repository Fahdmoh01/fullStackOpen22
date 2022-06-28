import React from 'react'


const Notification = ({message, messageColor}) => {
let styling	
if(message){
 styling = messageColor === 'green' ? 'accepted' : 'error'
}else{
	styling ='displayNothing'
}

  return (
	<div className={styling}>
		{message}
	</div>
  )
}

export default Notification