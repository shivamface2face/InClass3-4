import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = ({isLoggedIn,setisLoggedIn}) => {

 


  return (
      <div className='flex justify-evenly'>
          <Link to='/'>
              <img src={logo} className='' width={168} height={32} alt="" srcset="" />
          </Link>
          <nav>
              <ul className='flex gap-3'>
                  <Link>Home</Link>
                  <Link>About</Link>
                  <Link>Contact</Link>
              </ul>
          </nav>

          <div className='flex gap-3 ml-6'>
              {!isLoggedIn &&
                  <Link to='/login'>
                      <button>Login</button>
                  </Link>
              }
              {!isLoggedIn &&
                  <Link to='/signup'>
                      <button>Signup</button>
                  </Link>
              }
              { isLoggedIn &&
                  <Link to='/'>
                      <button onClick={() => setisLoggedIn(false)}
                    //   toast.success("loged out")
                      >Log out</button>
                  </Link>
              }
              { isLoggedIn &&
                  <Link to='/dashbord'>
                      <button>Dashbord</button>
                  </Link>
              }
          </div>

    </div>
  )
}

export default Navbar