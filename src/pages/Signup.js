
import Template from "../components/Template";
import frame from "../assets/frame.png"
import signup from "../assets/signup.png"

export default function Signup({setLoggedIn}){
    return (
        <Template

        heading = "Welcome Back"
        desc1 = "Build Skills today , tomorrow and beyond"
        desc2 = "Education to future-proof to your carrier"
        formType = "Signup"       
        src_1={frame}
        src_2={signup}
        setLoggedIn = {setLoggedIn}
        />
    )


}

