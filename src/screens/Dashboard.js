import React, { useEffect,useState } from "react";
import {db,auth} from '../base'
import Nav from "../components/Nav";

function Dashboard() {
    const[user,setUser]=useState([])
  const[data,setData]=useState([])
  useEffect(() => {
    db.collection("messages").orderBy('timestamp', 'desc').onSnapshot(querySnapshot=>{
        setData(querySnapshot.docs.map(doc=>({ ...doc.data(), id: doc.id })))
      })
}, [])

useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);
    setUser(authUser)
    if(authUser){
      setUser(authUser)
         
  }else{
      //navigate("/login")
      console.log("user not logged in")
      setUser(null)
         
  }
  });
}, []);

  return (
    <div>
        <Nav/>
        <div class="font-bold text-xl mx-80 mt-10 mb-2">Messages</div>
        {
            user?(<>
                {
                  data.map((e)=>(
                    <>
                   <div class="max-w-sm rounded overflow-hidden shadow-lg mt-16 mx-80">
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Email:{e.email}</div>
    <div class="font-bold text-xl mb-2">Service : {e.service}</div>
    <div class="font-bold text-xl mb-2">Phone:{e.phone}</div>
    <p class="text-gray-700 text-base">
    {e.message}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  {
                       e.extra?(<>
                        <p>Whats on my mind? :{e.extra}</p>
                       </>):(<>
                       
                       </>)
                     }
  </div>
</div>

                    
                    
                    

                    </>
            
                  ))
                }
            </>):(<>
            <h1>Login please</h1>
            </>)
        }
    </div>
  )
}

export default Dashboard