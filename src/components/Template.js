
import LoginForm from './LoginForm'
import SignupForm from './SignupForm.js'
import { FcGoogle } from "react-icons/fc"
import './Template.css'

export default function Template({heading , desc1 , desc2 , formType , src_1 , src_2, setLoggedIn}){
    return (
        <div className='login-signup-Section'>
            <div className='content-section'>
                <h2 className='heading'>{heading}</h2>
                <p className='desc-1'>{desc1}</p>
                <p className='desc-2'>{desc2}</p>
            
            {
                formType == "login"? (<LoginForm setLoggedIn = {setLoggedIn}/>):(<SignupForm setLoggedIn = {setLoggedIn}/>)
            }
            
            <div className='section-line'>
                    <div className='content'></div>
                    <span className='text'>or</span>
                    <div className='content'></div>
            </div>

            <div className='btn-container'>
                <span className='logo'><FcGoogle /> </span>
                <button className='btn'> Sign in with google</button>
            </div>

            </div>

            <div className='image-container'>
                <img className='frame' alt='frame' src={src_1} width={330} loading='lazy'></img>
                <img className='image' alt='image' src={src_2} width={330} loading='lazy'></img>
            </div>
            
        </div>
    )

}