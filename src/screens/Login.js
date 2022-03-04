import React, { useEffect,useState } from "react";
import {auth} from '../base'
import { useNavigate } from 'react-router-dom';

function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const navigate = useNavigate();

    useEffect(() => {
        // will only run once when the app component loads...
    
        auth.onAuthStateChanged((authUser) => {
          console.log("THE USER IS >>> ", authUser);
         
          if(authUser){
            navigate('/dashboard');
          }
         
        });
      }, [navigate]);

    const signin =(e)=>{
        e.preventDefault()
        // login logic

    auth
    .signInWithEmailAndPassword(email,password)
    .then((auth)=>{
        // logged in, redirect to home
        navigate('/dashboard');
        
    })
    .catch(e => alert(e.message))
    }
  return (
   
<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-80 mt-20 flex flex-col">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      
    </div>
    <div class="flex items-center justify-between">
    <button onClick={signin} class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
    </div>
</div>
  )
}

export default Login