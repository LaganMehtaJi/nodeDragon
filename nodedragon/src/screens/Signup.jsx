import React, { useState } from 'react'
import logo from "/logo.png";
import { Link } from 'react-router-dom';
const Signup = () => {
   const[email,setEmail] = useState("");
   const[password,setPassword]=useState("");
   const[repassword,setRepassword]=useState("");
   const data = [];
   const send = ()=>{
    if(!email||!password||!repassword){
      alert("All Details Required");
    }else if(password!=repassword){
   alert("Password Does not Match");
    }else{
      data.push({email:email,password:password})
     console.log(data);
     setEmail("");
     setPassword("");
     setRepassword("");
    }
   }
  return (
   <>
     <div className='border-2  w-200  h-260 ml-250 mt-30 p-2 rounded-3xl bg-white '>
         <div className='-mb-25'> <img    className='ml-45 w-100 h-100' 
           src={logo} alt="notfound" /></div>
           <h1  className='  text-green-700 text-6xl ml-27'
           >Sign in your account</h1><br/>
           <form className='mt-1 ml-10 p-2'  onSubmit={(event)=>{
            event.preventDefault();
           }}>
            <label   className='mb-2 text-4xl text-green-700' htmlFor="email">Email</label><br/><br/>
            <input  onChange={(e)=>{setEmail(e.target.value)}} value={email} id='email'   type="text"  className=' -mt-5 mb-10 text-4xl w-170 h-20 border-2 rounded-2xl pl-10' name='email' placeholder='Enter Email' /><br/>
            <label className='mb-2 text-4xl  text-green-700'  htmlFor="password">Password</label><br/><br/>
            <input    onChange={(e)=>{setPassword(e.target.value)}}  value={password} id='password'   className='-mt-5  text-4xl w-170 h-20 border-2 rounded-2xl pl-10'  type="password"  name='password' placeholder='Enter Password' /> 
            <h1 className='h-10'></h1>
           <label className='mt-2 text-4xl  text-green-700'  htmlFor="Re-password">Password</label><br/><br/>
            <input    onChange={(e)=>{setRepassword(e.target.value)}}  value={repassword} id='Re-password'   className='-mt-5  text-4xl w-170 h-20 border-2 rounded-2xl pl-10'  type="password"  name='password' placeholder='Enter Re-Password' />


           <button   onClick={send}  className=' w-100 h-20 bg-green-700 text-white text-5xl rounded-2xl mt-10 ml-32'>Sign up</button>
           <Link to={"/login"}> <h3 className='text-4xl  text-green-700 ml-66'><u>Log in?</u></h3></Link>
           </form>
     </div>
   </>
  )
}

export default Signup;
