import React,{useState} from "react";
import { useDispatch } from "react-redux";
import'./Login.css';
import { login } from "../features/userSlice";

const Login = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("")

  const dispatch = useDispatch(login);

  const handleSubmit = (e)=>{
    e.preventDefault();

   dispatch(
    login({
       name:name,
       email:email,
       password:password,
       loggedIn:true,
   }))

  }
  return (
    <div className='login'>
        <form className='login_form' onSubmit={(e)=>handleSubmit(e)}>
            <h1>Login Form 👩‍💻 </h1>
            <input 
            type="name" 
            placeholder="Name" 
            value={name} 
            onChange={(e)=>setName(e.target.value)}/>
            <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}/>
            <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" className="submit_btn">submit</button>

        </form>

    </div>
  )
}

export default Login;