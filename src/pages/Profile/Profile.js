import {React,useState,useEffect} from 'react'
import './profile.css'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { Auth,getAuth,onAuthStateChanged,signOut } from 'firebase/auth'
import { auth } from '../../firebase'
export default function Profile() {
    const auth = getAuth();
    const[name,setname]=useState("");
    const[user,setuser]=useState({});
    // onAuthStateChanged(auth,(currentUser) =>{
    //   setuser(currentUser); 
    //  })
    useEffect(() => {
      onAuthStateChanged(auth,(currentUser) =>{
        setuser(currentUser); 
    });
},[])
const getd=async()=>{
    const docRef = doc(db, "userinfo", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setname(docSnap.get("name"));
      console.log("Document data:", docSnap.get("name"));
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
       console.log(error);
   });
}
    //console.log(auth.currentUser.displayName)
  return (
    <>
    <div className='Container'>
        <div className="Side-nav">
            <div className='Profile-head'>
                <div className='plabel'>
                    
                    <img className='profileimg' src={require("./profile.jpg")}></img>
                    <label>{name}
                    
                    </label>
                </div>
            </div>
            <div className='NavLinks'>
                <ul>
                    <li>Booked games</li>
                    <li>Previous Games</li>
                    <li>Support</li>
                    <li><button className='butt' onClick={Logout} >Sign out</button></li>
                </ul>
            </div>

        </div>
        <div className='Display-info'>

        </div>
    </div>
    </>
  )
}
