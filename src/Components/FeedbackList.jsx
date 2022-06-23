import React from 'react'
import Feedbackitems from './Header';
import Feedbackitem from  './Feedbackitem'
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';


const FeedbackList = () => {
  const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>

    }
  return (
    <div>
      
         {feedback.map((items)=>(
            <Feedbackitem 
            items = {items}  
            key = {items.id} />

        ))}
       
    </div>
  )
}

export default FeedbackList