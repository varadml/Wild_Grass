import { React, useEffect, useState } from 'react'
import { getAuth, signOut ,onAuthStateChanged}
    from "firebase/auth";
import "./Home.css"
import Login from '../Login/Login';
import { BrowserRouter as Router, Routes , useNavigate,Link,Route } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import Home2 from '../Home2/Home2';


import { db } from '../../firebase';
import Profile from '../Profile/Profile';



const Home = () => {
    //const navigate = useNavigate();
    
    const auth = getAuth();
    const[user,setuser]=useState({});
    // onAuthStateChanged(auth,(currentUser) =>{
    //   setuser(currentUser); 
    //  })
    
      onAuthStateChanged(auth,(currentUser) =>{
        setuser(currentUser); 
       });
      
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
    // const Logout =async()=> {
    
        
    //      await signOut(auth).then(() => {
    //         // Sign-out successful.
     
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }
    return (
        <>
            
                
                    
                
          
     
            <div className="Navbar">
                <div>
                    <div class="topnav">

                        <a class="active"><Link to="back">Home</Link></a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        {/* <button className='butt' onClick={Logout} >Sign out</button> */}
                        <Link to="/coffee"><i class="fa-solid fa-user"></i></Link>
                    </div>
                </div>
              
                <Routes>
                
                <Route path="/coffee" Component={Profile} />
                </Routes>


            </div>
            
        </ >
    )
}

export default Home;