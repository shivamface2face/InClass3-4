import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const SignUpForm = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fname: "",
    lname: "",
  });
  const [showPassowrd, setshowPassowrd] = useState(false);
  function changeHandler(event) {
    setformdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form action="">
        <div>
          <label htmlFor="">
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              name="fname"
              onChange={changeHandler}
              placeholder="enter your name"
              id=""
              required
              value={formdata.fname}
            />
          </label>
          <label htmlFor="">
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              name="lname"
              onChange={changeHandler}
              placeholder="enter last name"
              id=""
              required
              value={formdata.lname}
            />
          </label>
        </div>
        <label htmlFor="">
          <p>*Email Adress</p>{" "}
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={changeHandler}
            id=""
            required
            placeholder="enter your email adress"
          />
        </label>

              <div>
                  
              <label htmlFor="">
          <p>*Password</p>{" "}
          <input
            type={showPassowrd ? "text" : "password"}
            name="password"
            value={formdata.password}
            onChange={changeHandler}
            id=""
            required
            placeholder="enter your password"
                      />
                       <span onClick={() => 
                      setshowPassowrd((prev)=> !prev)
                  }>
                      {showPassowrd?(AiOutlineEyeInvisible):(AiOutlineEye)}
                  </span>
        </label>
        <label htmlFor="">
          <p>*Password</p>{" "}
          <input
            type={showPassowrd ? "text" : "password"}
            name="confirmPassword"
            value={formdata.confirmPassword}
            onChange={changeHandler}
            id=""
            required
            placeholder="enter your password"
                      />
                       <span onClick={() => 
                      setshowPassowrd((prev)=> !prev)
                  }>
                      {showPassowrd?(AiOutlineEyeInvisible):(AiOutlineEye)}
                  </span>
        </label>
                  
               </div>

              <button>Create Account</button>
              
       
      </form>
    </div>
  );
};

export default SignUpForm;
