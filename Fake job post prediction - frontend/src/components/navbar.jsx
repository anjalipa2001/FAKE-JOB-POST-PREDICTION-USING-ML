import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../stylehome.css'
import { useAuth } from '../context'
import { doSignOut } from '../firebase/auth'
const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()


    const onLogout = async (e) => {
        e.preventDefault()
        await doSignOut();
    }
    return (
        <nav>

            <div class="navleft">
                <h2>Fake Job Detection</h2>
            </div>
            <div class="navright">
                <ul>
                    <li>
                        <Link to={'/home'}>  <h5>Home</h5></Link>
                    </li>
                    <li>
                        <Link to={'/survey'}>  <h5>Survey</h5></Link>
                    </li>
                    <li>
                        <Link to={'/addsurvey'}>  <h5>Fill Survey</h5></Link>
                    </li>
                    {userLoggedIn ? <li onClick={onLogout}>
                        <h5>Logout</h5>
                    </li> : ''}
                </ul>
            </div>
        </nav>
    )
}

export default Header