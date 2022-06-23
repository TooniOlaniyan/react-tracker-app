import React from 'react'
import Card from '../shared/Card'
import {FaTimes} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'


const Feedbackitems = ({items}) => {
  const {deleteFeedback} = useContext(FeedbackContext)


  return (
    <Card>
      <div className="num-display">{items.rating}</div>
      <button  onClick = {()=>deleteFeedback(items.id)}
        className='close'>
        <FaTimes color= 'purple' />
      </button>
      <div className="text-display">{items.text}</div>
    </Card>
  )
} 

export default Feedbackitems  