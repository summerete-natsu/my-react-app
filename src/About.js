/* src/App.js */
import React from 'react'
import { Link } from "react-router-dom";

const About = ({ signOut, user }) => {
  const test = () => {
    alert(2)
  }
 

  return (
    <>
    <div>About 2</div>
    
    <Link to={'/'}>post</Link>
    </>
  )
}


export default About;