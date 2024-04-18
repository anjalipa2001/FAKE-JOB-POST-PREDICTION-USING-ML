import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword } from '../firebase/auth'
import { useAuth } from '../context/'
import './login.css'
import clip from '../assets/clip2.png'

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await doSignInWithEmailAndPassword(email, password);
            alert("Sign-in successful 😀.");
        } catch (error) {
            console.error("Sign-in error:", error.message);
            alert("Sign-in unsuccessful. Please check your email and password.");
        }
    }

    return (

        <div class="parent">
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}


            <div class="child">

                <div class="left">
                    <img src={clip} alt="" srcset="" />
                </div>
                <div class="right">
                    <form className='loginform' onSubmit={onSubmit}>
                        <input type="text" class="upload" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password" class="upload" placeholder="password" required onChange={(e) => { setPassword(e.target.value) }} />
                        <button class="upload" type="submit" id="myButton">
                            Login 🔓
                        </button>
                        <h4>New here?<Link to={'/register'}> Sign up</Link></h4>


                    </form>
                </div>
            </div>
        </div>


    )
}

export default Login