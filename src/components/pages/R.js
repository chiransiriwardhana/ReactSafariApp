import React, { useState} from 'react';
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
                        <div className="user-details">
                            <div className="input-box">
                                <span className="topic">Username</span>
                                <input type="text" className="text-box" ></input>
                            </div>
                        </div>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="topic">Email</span>
                                <input type="email" className="text-box" ></input>
                            </div>
                        </div>

                        <div className="input-box-combine">
                            <div className="Gender">
                                <span className="topic-gender">Gender</span><br></br>
                                <input type="radio" className="radio-male" value="male" ></input>
                                <label for="male">Male</label>
                                <input type="radio" className="radio-female" value="female" ></input>
                                <label for="female">Female</label>
                            </div>
                            <div className="birthDate">
                                <span className=".topic-birth_date">Country</span><br></br>
                                <PhoneInput
                                    style={{ height:'100px' }}
                                    placeholder="Enter phone number"
                                    international
                                    className="date-box"
                                    defaultCountry="US"
                                    value={value}
                                    onChange={setValue}
                                />
                                {/* <input type="date" className="date-box"  ></input> */}
                                {/* <input type="tel" id="demo" placeholder="" id="date-box"></input> */}

                            </div>
                        </div>

                        <div className="user-details">
                            <div className="input-box">
                                <span className="topic">Phone Number</span>
                                <input type="tel" className="text-box" ></input>
                            </div>
                        </div>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="topic">Password</span>
                                <input type="password" className="text-box"></input>
                            </div>
                        </div>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="topic">Confirm Password</span>
                                <input type="password" className="text-box"  ></input>
                            </div>
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