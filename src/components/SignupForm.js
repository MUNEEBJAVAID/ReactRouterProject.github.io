import { useState } from "react"
import { IoEyeOutline, IoMagnet } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Signup.css";

export default function SignupForm({ setLoggedIn }) {
    const Navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        LastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    function handleInputChange(event) {

        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));

    }

    const [showCreatePassword, setCreatePassword] = useState(false);
    const [showConfirmPassword, setConfirmPassword] = useState(false);
    const [activeButton, setactiveButton] = useState("");

    function createPasswordToggle() {
        setCreatePassword(prev => !prev);
    }

    function confirmPasswordToggle() {
        setConfirmPassword(prev => !prev);
    }

    function SubmitData(event) {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Password Not match");
            return;
        }

        console.log("Sig Up Form Data is: ", formData);
        setLoggedIn(prev => !prev);
        Navigate("/Dashboard");
    }

    function handleToggleButton(event) {
        let buttonType = event.target.name;
        setactiveButton(buttonType);
    }


    return (
        <form onSubmit={SubmitData} className="signup-form">

            <div className="button-wrapper" onClick={handleToggleButton}>
                <button
                    className={`btn ${activeButton === "Student" ? "active" : ""}`}
                    name="Student"
                >Student</button>

                <button
                    className={`btn ${activeButton === "Instructor" ? "active" : ""}`}
                    name="Instructor"
                >Instructor</button>
            </div>

            <div>

                <label className="form-label">
                    <p> First Name <sup className="required">*</sup></p>
                    <input
                        required
                        type="text"
                        placeholder="Enter first name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </label>

                <label className="form-label">
                    <p> Last Name <sup className="required">*</sup></p>
                    <input
                        required
                        type="text"
                        placeholder="Enter Last name"
                        name="LastName"
                        value={formData.LastName}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </label>
            </div>

            <label className="form-label">
                <p> Enter Address <sup className="required">*</sup></p>
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

            <div>
                <div className="password-wrapper">
                    <label className="form-label">
                        <p> Create Password <sup className="required">*</sup></p>

                        <div className="password-wrapper">
                            <input
                                required
                                type={showCreatePassword ? ("text") : ("password")}
                                placeholder="Enter Password"
                                name="password"
                                onChange={handleInputChange}
                                value={formData.password}
                                className="form-input"
                            />
                            <span onClick={createPasswordToggle} className="password-toggle">
                                {showCreatePassword ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}
                            </span>
                        </div>
                    </label>


                    <label className="form-label">
                        <p> Confirm Password <sup className="required">*</sup></p>
                        <div className="password-wrapper">
                            <input
                                required
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="form-input"
                            />


                            <span onClick={confirmPasswordToggle} className="password-toggle">
                                {showConfirmPassword ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}
                            </span>
                        </div>
                    </label>

                </div>
            </div>

            <div className="form-actions">
                <button className="submit-button">
                    Sign Up
                </button>
            </div>

        </form>

    )

}