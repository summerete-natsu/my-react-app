/* src/App.js */
import React from 'react'
import { Link } from "react-router-dom";

const Dashboard = ({ signOut, user }) => {
  const test = () => {
    alert(2)
  }
 

  return (
    <>
    <div>dashboard 3</div>
    
    <Link to={'/'}>post</Link>
    </>
  )
}
       

export default Dashboard;