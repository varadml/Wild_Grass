import { React, useEffect, useState } from 'react'
import "./Login.css"
import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { db } from '../../firebase';

import { auth } from "../../firebase"
import Signup from '../Signup/Signup';
import { Router, Routes, useNavigate,Route,Link} from 'react-router-dom';


const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   // const navigate = useNavigate();

    const[cuser,setuser]=useState({});
    // onAuthStateChanged(auth,(currentUser) =>{
    //   setuser(currentUser); 
    //  })
    useEffect(() => {
      onAuthStateChanged(auth,(currentUser) =>{
        setuser(currentUser); 
       });
      },[])

    const handleLogin = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
               


                
            })
            .catch((error) => {
                console.log(error)
                setError(true)
            });
    };

      const handleCreateAccount=()=>{
        // navigate("/");
    }
    

    return (
        <div className='Outer'>
            {/* <Routes>
            <Route path={navigate("/")} element={<Signup />} />
            </Routes>
           */}
            <div className="login">
                <div>
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}></input>
                        <p>_</p>
                        <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}></input>
                        <button type="submit">Login</button>
                       
                        {error && <span>Credentials do not match! </span>}
                    </form>
                    <h4>New here? <button onClick={handleCreateAccount}>Create Account</button></h4>
                </div>
            </div>
        </div>
    )

}

export default Login;
