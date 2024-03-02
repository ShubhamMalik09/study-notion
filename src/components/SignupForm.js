import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState("student");
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
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


        const finalData= {
          ...accountData,accountType
        }



        console.log(finalData)
        navigate("/dashboard");

      }
      return (
        <div>
          <div className='flex gap-x-1 bg-slate-800 p-1 my-6 rounded-full max-w-max '>
            <button className={`${accountType==="student" ? "bg-slate-900 text-slate-100" : "bg-transparent text-slate-400" } py-2  px-5 rounded-full trnasition-all duration-200`}
             onClick={()=>
                setAccountType("student")
             }>Student</button>
            <button className={`${accountType==="instructor" ? "bg-slate-900 text-slate-100" : "bg-transparent text-slate-400" } py-2  px-5 rounded-full trnasition-all duration-200`}
            onClick={()=>
                setAccountType("instructor")
            }>
                Instructor</button>
          </div>
    
          <form onSubmit={submitHandler}
          className='flex flex-col w-full mt-6 gap-y-4'>
            <div className='flex gap-x-4'>
              <label className='w-full '>
                <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-400'>*</sup></p>
                <input
                  required
                  type='text'
                  name='firstName'
                  onChange={changeHandler}
                  placeholder='Enter First Name'
                  value={formData.firstName}
                  className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
                />
              </label>
              <label className='w-full'>
                <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-400'>*</sup></p>
                <input
                  required
                  type='text'
                  name='lastName'
                  onChange={changeHandler}
                  placeholder='Enter Last Name'
                  value={formData.lastName}
                  className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
                />
              </label>
            </div>
    
            <label className='w-full'>
                <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-400'>*</sup></p>
                <input
                  required
                  type='email'
                  name='email'
                  onChange={changeHandler}
                  placeholder='Enter Email Address'
                  value={formData.email}
                  className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
                />
              </label>
    
              <div className='flex gap-x-4'>
                <label className='w-full'>
                  <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-400'>*</sup></p>
                  <input
                    required
                    type={showpassword ? ("text"):("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='create password'
                    value={formData.password}
                    className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
                  />
                </label>
    
    
                <label className='w-full'>
                  <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-400'>*</sup></p>
                  <input
                    required
                    type={showpassword ? ("text"):("password")}
                    name='confirmPassword'
                    onChange={changeHandler}
                    placeholder='confirm password'
                    value={formData.confirmPassword}
                    className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
                  />
                </label>
              </div>
    
              <button className=' bg-yellow-500 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6'>Create Account</button>
              
            
          </form>
        </div>
      )
}

export default SignupForm
