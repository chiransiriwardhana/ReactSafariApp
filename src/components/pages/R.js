import React, { useState } from 'react';
import '../../App.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
function R() {
    //const [value, setValue] = useState()
    const [value, setValue] = useState()
    return (
        <div className="registerFormBody">
            <div className="registerForm">
                <div className="title">Register</div>
                <form action="#" className="register">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="topic">Full Name</span>
                            <input type="text" className="text-box" ></input>
                        </div>
                        <div className="input-box">
                            <span className="topic">Username</span>
                            <input type="text" className="text-box" ></input>
                        </div>


                        <div className="input-box">
                            <span className="topic">Email</span>
                            <input type="email" className="text-box" ></input>
                        </div>


                        <div className="input-box">
                            {/* <div className="Gender"> */}
                                <span className="topic-gender">Gender</span> <span className="country">Country</span><br></br><br></br>
                                <input type="radio" className="radio-male" value="male"  ></input>
                                <label for="male">Male</label>
                                <input type="radio" className="radio-female" value="female" ></input>
                                <label for="female"  >Female</label>
                            {/* </div> */}
                            {/* <div className="birthDate"> */}
                               
                                <PhoneInput
                                    style={{ height: '45px', width:"50%", float:'right',margin:'0px'}}
                                    placeholder="Enter phone number"
                                    international
                                    className="date-box"
                                    defaultCountry="US"
                                    value={value}
                                    onChange={setValue}
                                />
                            {/* </div> */}
                        </div>

                        <br></br>
                        <div className="input-box">
                            <span className="topic_">State</span>
                            <input type="text" className="text-box" ></input>
                        </div>


                        <div className="input-box">
                            <span className="topic">Password</span>
                            <input type="password" className="text-box"></input>
                        </div>

                        <div className="input-box">
                            <span className="topic">Confirm Password</span>
                            <input type="password" className="text-box"  ></input>
                        </div>

                        <div className="button">
                            <input type="submit" className="Reg-button" value="Register"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default R