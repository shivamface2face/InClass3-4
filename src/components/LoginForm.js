import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = ({ setISLoggedIn }) => {
    const navigate = useNavigate();
  // value ke liye hota hai ye
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const [showPassowrd, setshowPassowrd] = useState(false);
  function changeHandler(event) {
    setformdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    }
    function submitHandler(e) {
        e.preventDefault();
        setISLoggedIn(true);
        navigate("/dashbord")

    }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
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

        <label htmlFor="">
          <p>*Password</p>{" "}
       
        <input
          type={showPassowrd?("text"):("password")}
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
                  <Link>
                      <p>forget Password</p>
                  </Link>
              </label>

              <button>Sign In</button>

      </form>
    </div>
  );
};

export default LoginForm;
