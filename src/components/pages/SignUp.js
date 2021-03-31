import React from 'react'
import '../../App.css'

function SignUp() {
    // return <h1 className="sign-up">SIGN UP</h1>
    return (
        <div className="signUpForm">
            {/* <form action="" method="POST" className="Form">
                <div className = "Input">
                Enter username  <input type="text" className="username"></input><br></br>
                </div>
                <div className = "Input">
                Enter email <input type="email" className="email"></input><br></br>
                </div>
                <div className = "Input">
                Enter password  <input type="password" className="password"></input><br></br>
                </div>
                <input type="submit" className="Submit"></input>
               
            </form> */}
            <div className="loginContainer">
            <form action="" className="formContainer">
                <h1>Login Here</h1>
                <div className="form-group">
                    <label for="">Email</label>
                    <input type="text" className="form-control" required></input>
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" className="form-control" required></input>
                </div>
                <div class="form-group">
                    <h5>Forgot Password ?</h5>
                </div>
                <input type="submit" className="btnForm" value="Login"></input>
                <div class="form-groupLink">
                    <h5>Not a member?<a href="/Sign">Sign-Up</a></h5>
                </div>
            </form>
        </div>
    
        </div>

    )
}
export default SignUp