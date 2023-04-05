import { React, useEffect, useState } from 'react'
import { getAuth, signOut ,onAuthStateChanged}
    from "firebase/auth";
import "./Home.css"
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";

import { db } from '../../firebase';



const Home = () => {
    //const navigate = useNavigate();
    
    const auth = getAuth();
    const[user,setuser]=useState({});
    // onAuthStateChanged(auth,(currentUser) =>{
    //   setuser(currentUser); 
    //  })
    useEffect(() => {
      onAuthStateChanged(auth,(currentUser) =>{
        setuser(currentUser); 
       });
      },[])
    //console.log(auth.currentUser);
    const getd=async()=>{
        const docRef = doc(db, "userinfo", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
    }
   getd();
    const Logout =async()=> {
    
        
         await signOut(auth).then(() => {
            // Sign-out successful.
     
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <div className="Navbar">
                <div>
                    <div class="topnav">

                        <a class="active" href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <button className='butt' onClick={Logout} >Sign out</button>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Home;