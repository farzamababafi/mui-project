import React, { useState } from "react";
import "./CustomerForm.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
localStorage.setItem("id", "");
localStorage.setItem("token", "");

function CustomerForm() {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);

  /* const fetchUser = (e) => {
        e.preventDefault();
        const fetch = {
            userFirstname: "string",
            userLasttname: "string",
            UserPhoneNumber: phoneNumber,
            UserPassword: password,
            contracts: [],
        };
        Axios.post("https://localhost:7119/api/Users/Login", fetch)
            .then((response) => navigate(`map/${response.data}`))
            .catch((err) => console.log(err));
    };

    const postUser = () => {
        const fetch = {
            userFirstname: firstName,
            userLasttname: lastName,
            UserPhoneNumber: newPhoneNumber,
            UserPassword: newPassword,
            contracts: [],
        };
        Axios.post("https://localhost:7119/api/Users/Register", fetch)
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };
    */

  return (
    <div className={`CustomerForm ${isClick ? "active" : ""}`}>
      <div className="container">
        <div className="bluebg">
          <div className="box signin">
            <h2>Already Have An Account ?</h2>
            <button className="signinbtn" onClick={() => setIsClick(false)}>
              Sign in
            </button>
          </div>
          <div className="box signup">
            <h2>Dont Have An Account ?</h2>
            <button className="signupbtn" onClick={() => setIsClick(true)}>
              Sign up
            </button>
          </div>
          <div className={`formbx ${isClick ? "active" : ""}`}>
            <div className="form signinform">
              <form>
                <h3>login in</h3>
                <input id="logInEmail" type="text" placeholder="Email"></input>
                <input
                  id="logInPassword"
                  type="text"
                  placeholder="Password"
                ></input>
                <input type="submit" value="login"></input>
                <a href="#" className="forgot">
                  Forgot Password
                </a>
              </form>
            </div>

            <div className="form signupform">
              <form>
                <h3>Sign up</h3>
                <input id="Email" type="text" placeholder="Email"></input>
                <input id="Username" type="text" placeholder="Username"></input>
                <input id="Password" type="text" placeholder="Password"></input>
                <input
                  id="ConfirmPassword"
                  type="text"
                  placeholder="ConfirmPassword"
                ></input>
                <input type="submit" value="Register"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerForm;
