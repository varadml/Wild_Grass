import { React, useState } from 'react'
import "./Signup.css"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase"

const Signup = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [password, setPassword] = useState("");
    //const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/')
            })
            .catch((error) => {
                setError(true)
            });

    }

    return (
        <div className='Outer'>
            <div className='signup'>
                <div>
                    <h1>SignUp</h1>
                    <form onSubmit={handleSignup}>
                        <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}></input>
                        <p>_</p>
                        <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}></input>
                        <button type="submit">SignUp</button>
                        {error && <span>Enter proper credentials!</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;