import React from 'react'
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import AboutPageLink from './Components/AboutPageLink'
import { FeedbackProvider } from './Context/FeedbackContext'

const App = () => {

  return (
    <FeedbackProvider>
    <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route exact path='/' element ={
            <>
             <FeedbackForm/>
            <FeedbackStats/>
            <FeedbackList/>
            </>
          }>
         
        </Route>

        <Route path='/about' element={<AboutPage/>}/>
        </Routes>

        <AboutPageLink/>
        
          
        
      </div>
    </Router>
    </FeedbackProvider>
  )
}


export default App 