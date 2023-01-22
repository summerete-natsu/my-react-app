import React from 'react'
import About from "./About";
import App from "./App";
import Contact from "./Contact";
import { withAuthenticator} from "@aws-amplify/ui-react";

import Dashboard from "./Dashboard";
import { Route, Routes, BrowserRouter, Link, Outlet, useLocation } from "react-router-dom";



const Login = ({ signOut, user }) => {
 
  return (
    <div style={{display:'flex', justifyContent:'center', paddingTop: '15px'}}>
      <img width={320} src={'qrcode.jpg'} />
    </div>
  )
}

export default withAuthenticator(Login);
