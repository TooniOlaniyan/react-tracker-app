import React from 'react'
import Card from '../shared/Card'
import { useState , useContext } from 'react'
import Button from '../shared/Button'
import RatingPicker from './RatingPicker'
import FeedbackContext from '../Context/FeedbackContext'

const FeedbackForm = () => {
    const {text , setText} = useState('')
    const {btnDisable , setBtnDisable} = useState(true)
    const {message , setMessage} = useState('')
    const {rating , setRating} = useState('')

    const {handleAdd} = useContext(FeedbackContext)

    const handelInputValue =(e)=>{
      if(text ===''){
        setMessage(null)
        setBtnDisable(true)
      }else if(text!=='' && text.trim().length <= 10){
        setMessage('Your Review is less than 10  character')
        setBtnDisable(true)

      }else{
        setBtnDisable(false)
        setMessage('')
      }

 
      setText(e.target.value)

    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      const newFeedback = {
        text,
        rating
      }
      console.log(newFeedback);

      handleAdd(newFeedback)
      setText('')


    }

 

  return (
    <Card>
        <form className="message" onSubmit={handleSubmit}>
            <h2>How would you rate your service</h2>
            <RatingPicker select = {(rating)=> setRating({rating})}/>
            <div className="input-group">
                 <input onChange={handelInputValue}  value = {text} type="text" placeholder='write a review' />
                <Button type='submit' isDisabled={btnDisable} >Submit</Button>
            </div>
            <p>{message}</p>
           
        </form>
    </Card>
  )
}

export default FeedbackForm