import React from 'react'
import { getAuth, signOut }
    from "firebase/auth";
import "./Home.css"

function Logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

const Home = () => {
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