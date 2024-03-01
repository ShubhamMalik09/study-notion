import React from 'react'
import frame from "../assets/frame.png";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


const Template = ({title, desc1,desc2,image, formtype, setIsLoggedIn}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2} </span>
        </p>
        {formtype==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        <button>
            <p>Sign In with Google </p>
        </button>

        <div>  
            <img src={frame} width={558} height={504} loading='lazy'/>
            <img src={image} width={558} height={504} loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Template
