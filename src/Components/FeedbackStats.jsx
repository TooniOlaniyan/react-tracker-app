import React from 'react'
import FeedbackList from './FeedbackList'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

const FeedbackStats = () => {
  const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc , items)=>{
       return acc + items.rating

    },0)/feedback.length
    average = Math.floor(average)
    

  return (
    <div className='feedback-stats'>
        <p>{feedback.length} Reviews</p>
        <p>Average Rating : {isNaN(average) ? 0 : average}</p>
    </div>
  )
}

export default FeedbackStats