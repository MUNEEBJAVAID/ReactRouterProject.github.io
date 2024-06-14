import Template from "../components/Template";
import frame from "../assets/frame.png"
import login from "../assets/login.png"

export default function Login({setLoggedIn}){
    return (
        <Template

        heading = "Welcome Back"
        desc1 = "Build Skills today , tomorrow and beyond"
        desc2 = "Education to future-proof to your carrier"
        formType = "login" 
        src_1={frame}
        src_2={login}      
        setLoggedIn = {setLoggedIn}
        />
    )

}