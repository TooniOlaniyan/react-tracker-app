import React from 'react'
import Card from '../shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <h2 className='about'>
            This is a feed back app
        </h2>
        <p>This takes the feedback of users and retaon i memory</p>
        <Link to={'/'}>Go back to Home-page</Link>
    </Card>
  )
}

export default AboutPage