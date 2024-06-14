import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg" 
import { toast } from "react-toastify";

export default function Navbar(props){

    let isLoggedIn = props.isLoggedIn;
    let setLoggedIn = props.setLoggedIn;

    return (
        <div className="top-bar-container">

           <Link to="/">
              <img src={Logo} alt="Logo Image" width={160} height={32}/>
            </Link> 
            
            <nav>
                <ul className="navLink">
                     <li className="li">
                        <Link className="content" to="/">Home</Link>
                     </li>

                     <li className="li">
                        <Link className="content" to="/">About</Link>
                     </li>

                     <li className="li">
                        <Link  className="content" to="/">Contact</Link>
                     </li>
                </ul>
            </nav>

            <div className="btnContiner">
                
                {  !isLoggedIn &&
                    <Link to = "/Login"> 
                         <button> Log in </button>
                     </Link>

                }

                {
                    !isLoggedIn &&
                    <Link to = "/Signup"> 
                         <button> Sign up </button>
                     </Link>
                }

                {
                    isLoggedIn &&
                    <Link to = "/" > 
                         <button onClick={()=>{
                            setLoggedIn(false);
                            toast.success("LOG OUT");
                         }}
                         > Logout </button>
                     </Link>
                }

                {
                    isLoggedIn &&
                    <Link to = "/Dashboard"> 
                         <button> Dashboard </button>
                     </Link>
                }
            </div>
        </div>
    )

}