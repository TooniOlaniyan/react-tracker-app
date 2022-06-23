import { createContext , useState } from "react";
import FeedbackData from '../Data/FeedbackitemData'
import React from "react";
import { v4 as uuidv4} from 'uuid'



const FeedbackContext = createContext()



export const FeedbackProvider = ({children})=>{
    const [feedback  , setFeedBack] = useState([...FeedbackData])

    const handleAdd = (newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedBack([newFeedback , ...feedback])

  }

    const deleteFeedback = (id)=>{
    if(window.confirm('Are you sure you want to delete')){
      setFeedBack(feedback.filter((items)=>items.id !==id))

    }

  }

    return <FeedbackContext.Provider value={{
        feedback,
        handleAdd,
        deleteFeedback
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext