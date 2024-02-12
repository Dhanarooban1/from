import React from 'react'
import '../App.css'
import { useForm } from "react-hook-form";
import { useState } from 'react';
export default function Form() {
const [Done,setDone] = useState(false)
const [view,setview] = useState(false)
const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();


console.log("Before updating, isClicked:",Done);
const onsubmit = () =>{
    

    setDone(true);
    
    console.log("After updating, isClicked:", Done);
}
  return (
    <>
     <div id='Good'>
        {Done ? <h3 id="successMsg">Register Successfully</h3> : null}
        </div>
    <div className='Bg'>
 <form htmlFor="" id='RegisterPlace' onSubmit={handleSubmit(onsubmit)}>
 <input 
  type="text" 
  name="FirstName" 
  id="FirstName"  
  placeholder="Enter First Name"
  {...register("FirstName", { required: "Please enter your first name!" })}
/>
{errors.FirstName && <p className="error">{errors.FirstName.message}</p>}

    <input 
    type="text" name=""
     id="LastName"
     placeholder="Enter Last Name"
     {...register("LastName",{ required: "Please enter your Last name!"})}
     />
{errors.LastName && <p className="error">{errors.LastName.message}</p>}


    <input type="text" 
    name="" id="EmailName" 
    placeholder="Enter Email" 
    {...register("Email",{required: "Please enter your Email!",
    pattern: {
        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        message: "Invalid email",
    },
    })}
    />
    {errors.Email && <p className="error">{errors.Email.message}</p>}

    <input 
    type="Number" 
    name="" 
    id="EmailName" 
    placeholder="Enter  your Password" 
    {...register("password", {
        required: "password is required",

        minLength: {
          value: 4,
          message: "password must be more than 4 characters",
        },
        maxLength: {
          value: 20,
          message: "password must be less than 20 characters",
        },
      })}
    />
{errors.password && <p className="error">{errors.password.message}</p>}
    <button id='Register'>Register</button>
 </form>
    </div>
    {Done ? <h1>{watch("FirstName")}</h1> : null}
    </>
  )
}

