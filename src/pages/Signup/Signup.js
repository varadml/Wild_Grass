import { React, useState } from 'react'
import "./Signup.css"
import Login from '../Login/Login';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Router, Routes, useNavigate,Route,Link} from 'react-router-dom';
import { auth } from "../../firebase"
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [name,setName]=useState("");
    const [error, setError] = useState(false);
    const [password, setPassword] = useState("");
    //const [username, setUsername] = useState("");
//const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setDoc(doc(db, "userinfo", user.uid), {
                    name: name,
                  });
             
            })
            .catch((error) => {
                setError(true)
            });

    }

    return (
        <div className='Outer'>
     
                {/* <Routes>
                <Route path="/login" element={<Login />} />
                </Routes> */}
          
            <div className='signup'>
                <div>
                    <h1>SignUp</h1>
                    <form onSubmit={handleSignup}>
                        <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}></input>
                        <p>_</p>
                        <input type="name" placeholder='name' onChange={e => setName(e.target.value)}></input>
                        <p>_</p>
                        <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}></input>
                        <button type="submit">SignUp</button>
                        {/* <h4>Alredy an user? <Link to="login">Login</Link></h4> */}
                        {error && <span>Enter proper credentials!</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;