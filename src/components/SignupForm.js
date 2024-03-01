import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
      })
    
      const [showpassword,setShowPassword] = useState(false);
    
      function changeHandler(event){
        setFormData((preData)=>(
          {
            ...preData,
            [event.target.name]:event.target.value 
          }
        ))
      }

      function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("password do not match");
            return;
        }

        setIsLoggedIn(true); 
        toast.success("account created");
        const accountData ={
            ...formData
        }
        console.log(accountData)
        navigate("/dashboard");

      }
      return (
        <div>
          <div>
            <button>Student</button>
            <button>Instructor</button>
          </div>
    
          <form onSubmit={submitHandler}>
            <div>
              <label>
                <p>First Name <sup>*</sup></p>
                <input
                  required
                  type='text'
                  name='firstName'
                  onChange={changeHandler}
                  placeholder='Enter First Name'
                  value={formData.firstName}
                />
              </label>
              <label>
                <p>Last Name <sup>*</sup></p>
                <input
                  required
                  type='text'
                  name='lastName'
                  onChange={changeHandler}
                  placeholder='Enter Last Name'
                  value={formData.lastName}
                />
              </label>
            </div>
    
            <label>
                <p>Email Address <sup>*</sup></p>
                <input
                  required
                  type='email'
                  name='email'
                  onChange={changeHandler}
                  placeholder='Enter Email Address'
                  value={formData.email}
                />
              </label>
    
              <div>
                <label>
                  <p>Create Password<sup>*</sup></p>
                  <input
                    required
                    type={showpassword ? ("text"):("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='create password'
                    value={formData.password}
                  />
                </label>
    
    
                <label>
                  <p>Confirm Password<sup>*</sup></p>
                  <input
                    required
                    type={showpassword ? ("text"):("password")}
                    name='confirmPassword'
                    onChange={changeHandler}
                    placeholder='confirm password'
                    value={formData.confirmPassword}
                  />
                </label>
              </div>
    
              <button>Create Account</button>
              
            
          </form>
        </div>
      )
}

export default SignupForm
