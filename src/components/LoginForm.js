import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"", password:""
      })
    
      const [showpassword,setShowPassword] = useState(false);
      function changeHandler(event){
        setFormData((prevData)=>(
          {
            ...prevData,
            [event.target.name]:event.target.value
          }
        ))
      }

      function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        navigate("/dashboard");
      }
    
      return (
        <form onSubmit={submitHandler}>
          <label>
            <p>Email Address<sup>*</sup></p>
            <input
              name='email'
              required
              type='email'
              value={formData.email}
              onChange={changeHandler}
              placeholder='Enter Email id'
            />
          </label>
          <label>
            <p>Password<sup>*</sup></p>
            <input
              required
              name='password'
              type={showpassword? ("text"):("password")}
              value={formData.password}
              onChange={changeHandler}
              placeholder='Enter Password'
            />
    
            <Link to="#">
              <p>Forgot Password</p>
            </Link>
          </label>
    
          <button>Sign In</button>
          
        </form>
      )
}

export default LoginForm
