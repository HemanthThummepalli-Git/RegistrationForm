import React from 'react'
import { useForm } from 'react-hook-form';
import '../compos/Form.css'
import { FaUserAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaCodeBranch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { GiPalette } from "react-icons/gi";
import axios from 'axios'
function Form() {

    let {register,handleSubmit}=useForm()
    let navigate=useNavigate()

  const submit=async (obj)=>{
    let res=await axios.post('http://localhost:4000/new-user',obj)
    //console.log(res)
    if(res.data.message === "User is created"){
        navigate('userprofile',{state:obj})
    }
  }
  return (
    <div>
        <div className="wrapper">
        <form onSubmit={handleSubmit(submit)}>  
            <h1>Registration</h1>
            <div className="input-box">
            <input type="text" className='form-control  mb-3' placeholder='Username' {...register('username',{required:true})}/>
            <i className='bx bxs-user text-white fs-5'><FaUserAlt /></i>
            
           </div>
           <div className="input-box">
            <input type="text" className='form-control  mb-3' placeholder='Email' {...register('email',{required:true})}/>
            <i className='bx bxs-user text-white fs-4'><IoIosMail /></i>
           </div>
           <div className="input-box">
            <input type="text" className='form-control  mb-3' placeholder='Phoneno' {...register('phoneno',{required:true})}/>
            <i className='bx bxs-user text-white'><FaPhone /></i>
           </div>
           <div>
            <div className='d-flex gender gap-4 allign-items-center'>
            <p className='m-0'>Gender : </p>
           <div className="form-check form-check-inline">
            
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male"/>
            <label className="form-check-label" for="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female"/>
            <label className="form-check-label" for="female">Female</label>
            </div>            
            </div>
           </div>
           <div className="input-box">
           <input type="text" className='form-control mb-3' placeholder='Education' {...register('Education',{required:true})}/>
           <i className='bx bxs-user text-white'><RiGraduationCapFill /></i>
           </div>
           <div className="input-box">
           <input type="text" className='form-control mb-3' placeholder='Branch' {...register('Branch',{required:true})}/>
           <i className='bx bxs-user text-white'><FaCodeBranch /></i>
           </div>
           <div className="input-box">
           <input type="date" className='form-control mb-3'  {...register('dob',{required:true})}/>
           </div>
           <div className="input-box">
           <input className='form-control mb-3' rows='3' placeholder='Hobbies'{...register('Hobbies',{required:true})}/>
           <i className='bx bxs-user text-white'><GiPalette /></i>
           </div>
           
           <button type="Submit" className="btn mt-3">Register</button>
        </form>
    </div> 
    </div>
  )
}

export default Form