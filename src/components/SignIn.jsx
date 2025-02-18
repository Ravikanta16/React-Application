import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const SignIn = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userData,setUserData]=useState({})
    const navigate=useNavigate()

    const submitHandler= async (e)=>{
        e.preventDefault();
        navigate('/dashboard')
        setUserData({
            email:email,
            password:password
        })
        // setEmail('')
        // setPassword('')
    }

    const handleGoogleLogin = (response) => {
        const user = response?.credential;
        setUserData({
            email: user?.email,
            password: '', 
        });
        localStorage.setItem('user', JSON.stringify(user)); // Save user data to localStorage
        navigate('/dashboard');
    };
    
    return (
        <div className='p-7 h-screen w-full flex justify-between flex-col'>
        <div>
            <form onSubmit={(e)=>{
                submitHandler(e)}
            }>
                <h1 className='text-xl font-medium mb-2'>What's your Email?</h1>
                <input 
                    className='bg-slate-200 border rounded w-full mb-7 px-2 py-2' 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)}
                    }
                    required type='email' 
                    placeholder='email@example.com'
                
                />
                <h1 className='text-xl font-medium mb-2'>Enter Password</h1>
                <input 
                    className='bg-slate-200 border rounded w-full mb-7 px-2 py-2' 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)}
                    }
                    required type='password' 
                    placeholder='password'
                />
                <button className='w-full rounded bg-black text-white font-bold px-2 py-2'>Login</button>
            </form> 
            <p className='justify-center'>New here?<Link to='/signup' className='text-blue-400'>Create New Account</Link></p>
            <div className="my-5">
                <GoogleLogin onSuccess={handleGoogleLogin} onError={() => console.log('Login Failed')} />
            </div>
        </div>
        </div>
    )
};

export default SignIn;