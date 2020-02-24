import React, {useState} from "react";
import axiosWithAuth from "./Auth"

const Login = props => {
 // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials,setCredentials]=useState({
    username:"",
    password:""
  });
  
  const login = event=>{
    event.preventDefault();
    axiosWithAuth()
    .post("login", credentials)
    .then(response=>{
      console.log("resposne:",response)
      localStorage.setItem("token", response.data.payload);
      props.history.push("/bubbles") 
    })
    .catch(error=>console.log(error))
  }

  const handleChange = event=>{
    setCredentials({
      ...credentials,
      [event.target.name] :event.target.value
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form>
        <input 
          type="text"
          name="username"
          placeholder=" Username "
          value={credentials.username}
          onChange={handleChange}
        />
         <input 
          type="text"
          name="password"
          placeholder=" Password "
          value={credentials.password}
          onChange={handleChange}
        />
        <button onClick={login}>Login</button>
      </form>
    </>
  );
};

export default Login;
