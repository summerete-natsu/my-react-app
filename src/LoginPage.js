import React from "react";
import { withAuthenticator, Button } from "@aws-amplify/ui-react";
import Comment from "./Comment";

const Login = ({ signOut, user }) => {
  console.log(111);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "15px" }}
    >
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
      <p>Post-LogIn</p>
      <p>
        <Comment />
      </p>
      <div>
        <Button onClick={() => {
          localStorage.clear()
          window.location.href = 'http://localhost:3000'
        }}>Sign out</Button>
      </div>
      </div>
    </div>
  );
};

export default withAuthenticator(Login);
