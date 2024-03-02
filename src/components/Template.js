import React from 'react'
import frame from "../assets/frame1.png";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


const Template = ({title, desc1,desc2,image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-y-6'>
      <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-slate-100 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-slate-300'>{desc1}</span><br/>
            <span className='text-blue-300 italic'>{desc2} </span>
        </p>
        {formtype==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-slate-700'></div>
            <p className='text-slate-700 font-medium leading-[1.375rem]'>OR</p>
            <div className='w-full h-[1px] bg-slate-700'></div>
        </div>
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-slate-300 border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-6'>
            <p>Sign In with Google </p>
        </button>

      </div>

      <div className='relative w-11/12 max-w-[450px]'>  
        <img src={frame}
          width={558}
          height={504}
          loading='lazy'
        />
        <img src={image}
          width={558}
          height={504}
          loading="lazy"
          className='absolute -top-4 right-4 '
         />
      </div>
    </div>
  )
}

export default Template
