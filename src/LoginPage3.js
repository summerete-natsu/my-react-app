import React from 'react'
import { withAuthenticator} from "@aws-amplify/ui-react";


const Login = ({ signOut, user }) => {
  console.log(111);
  return (
    <div style={{display:'flex', justifyContent:'center', paddingTop: '15px'}}>
      <img width={320} src={'qrcode.jpg'} />
    </div>
  )
}

export default withAuthenticator(Login);
  