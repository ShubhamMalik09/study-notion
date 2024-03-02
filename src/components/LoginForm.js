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
        <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>
                Email Address
                <sup className='text-pink-400'>*</sup></p>
            <input
              name='email'
              required
              type='email'
              value={formData.email}
              onChange={changeHandler}
              placeholder='Enter Email id'
              className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
            />
          </label>
          <label className='w-full'>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-400'>*</sup></p>
            <input
              required
              name='password'
              type={showpassword? ("text"):("password")}
              value={formData.password}
              onChange={changeHandler}
              placeholder='Enter Password'
              className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
            />
    
            <Link to="#">
              <p className='text-xs mt-1 text-blue-400 max-w-max ml-auto '>Forgot Password</p>
            </Link>
          </label>
    
          <button className=' bg-yellow-500 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6'>Sign In</button>
          
        </form>
      )
}

export default LoginForm
