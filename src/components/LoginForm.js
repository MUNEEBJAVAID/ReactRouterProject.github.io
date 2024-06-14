import { useState } from "react"
import { IoEyeOutline} from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './LoginForm.css'

export default function LoginForm({setLoggedIn}){

    const navigate = useNavigate();

    const [formData , setFormData] = useState({
         email : "" ,  password : ""
    });

    const [showPassword , setShowPassword] = useState(true);

    function handleInputChange(event){

          setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
          }));
        
    }

    function submitData(event){

            event.preventDefault();
            console.log("Login form Data is : " , formData);
            setLoggedIn((prev) => !prev);
            toast.success("SuccesFully Log In");
            navigate("/Dashboard");
    }
    
    function togglePasswordVisibility(){
      setShowPassword(prev => !prev);
    }

    return (
      <form  onSubmit={submitData} className="login-form">
      <label className="form-label">
          <p>Email Address <sup className="required">*</sup></p>
          <input
              required
              type="email"
              placeholder="Enter the Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
          />
      </label>

      <label className="form-label">
          <p>Enter Password <sup className="required">*</sup></p>
          <div className="password-wrapper">
              <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
              />
              <span onClick={togglePasswordVisibility} className="password-toggle">
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
          </div>
          
              <p className="forgot-password"> Forgot Password </p>
      </label>

      <div className="form-actions">
          <button className="submit-button">
              Sign In   
          </button>
      </div>
  </form>
    )

}