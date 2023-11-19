import React from 'react'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import  login  from '../assets/login.png';
import  frmae  from '../assets/frame.png';
import  signup  from '../assets/signup.png';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
const Template = ({title,disc1,disc2,image,formtype,setISLoggedIn}) => {
  return (
      <div>
          <div>
              <h1>{title}</h1>
              <p><span>{disc1}</span>
                  <span>{disc2}</span>
              </p>
              {formtype === "signup" ? React(<SignUpForm setISLoggedIn={setISLoggedIn} />) : (<LoginForm setISLoggedIn={setISLoggedIn} />)}
              <div>
                  <div></div>
                  <p>or</p>
                  <div></div>
              </div>
              <button><p>Sign Up with Google</p></button>
          </div>
          <div>
              <img src={frmae} alt="" width={558} height={504} loading='lazy' />
              <img src={signup} alt="" width={558} height={504} loading='lazy' />
              <img src={login} alt="" width={558} height={504} loading='lazy' />
              
          </div>
    </div>
  )
}

export default Template