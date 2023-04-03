import { React, useState } from 'react'
import "./Login.css"
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from "../../firebase"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                setError(true)
            });
    };


    return (
        <div className='Outer'>
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
                </div>
            </div>
        </div>
    )

}

export default Login;