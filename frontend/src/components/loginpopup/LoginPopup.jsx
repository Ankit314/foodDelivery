import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState]=useState("Login")
    const {url, setToken}=useContext(StoreContext)
    const [data, setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(event)=>{
        const name= event.target.name;
        const value= event.target.value;
        setData(data=>({...data,[name]:value}))

    }
    const onLogin= async (event)=>{
        event.preventDefault()
        let newUrl=url;
        if(currState==="Login"){
            newUrl+="/api/user/login"

        }
        else{
            newUrl+="/api/user/register"
        }
        const response= await axios.post(newUrl,data)

        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)


        }
        else{
            alert(response.data.message)
        }

    }
    useEffect(()=>{
        console.log(data)
        
    },[data])
  return (
    <div className='login-popup'>
        <form onSubmit={onLogin}  className="login-poup-cointainer">
            <div className="login-poup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

            </div>
            <div className="login-poup-inputs">
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='your name' required />}
                
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='your email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
            </div>
            <button type='submit' >{currState==="Sign up"?"Create account":"Login"}</button>
            <div className="login-poup-conditions">
                <input type="checkbox" required />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, nulla.</p>
            </div>
            {
                currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>:<p>Allready have a account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default LoginPopup