import React, { useState } from 'react'
import logo from "/logo.png";
const Login = () => {
   const[email,setEmail] = useState("");
   const[password,setPassword]=useState("");
   const data = [];
   const send = ()=>{
    if(!email||!password||email.length<6||password.length<8){
      alert("All Details Required");
    }else{
     data.push({email:email,password:password})
     console.log(data);
     setEmail("");
     setPassword("");
    }
   }
  return (
   <>
     <div className='border-2  w-200  h-240 ml-250 mt-30 p-2 rounded-3xl bg-white '>
         <div className='-mb-20'> <img    className='ml-45 w-100 h-100' 
           src={logo} alt="notfound" /></div>
           <h1  className='  text-green-700 text-6xl ml-22'
           >Log into your account</h1><br/>
           <form className='m-10 p-2'  onSubmit={(event)=>{
            event.preventDefault();
           }}>
            <label   className='mb-2 text-4xl text-green-700' htmlFor="email">Email</label><br/><br/>
            <input  onChange={(e)=>{setEmail(e.target.value)}} value={email} id='email'   type="text"  className=' -mt-5 mb-10 text-4xl w-170 h-20 border-2 rounded-2xl pl-10' name='email' placeholder='Enter Email' /><br/>
            <label className='mb-2 text-4xl  text-green-700'  htmlFor="password">Password</label><br/><br/>
            <input    onChange={(e)=>{setPassword(e.target.value)}}  value={password} id='password'   className='-mt-5  text-4xl w-170 h-20 border-2 rounded-2xl pl-10'  type="password"  name='password' placeholder='Enter Password' />
            <button   onClick={send}  className=' w-100 h-20 bg-green-700 text-white text-5xl rounded-2xl mt-10 ml-32'>Login</button>
            <h3 className='text-4xl  text-green-700 ml-45'><u>Forgot password?</u></h3>
           </form>
     </div>
   </>
  )
}

export default Login;
