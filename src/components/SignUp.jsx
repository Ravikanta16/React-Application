import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userData,setUserData]=useState({})

    const navigate = useNavigate();

    const submitHandler= async (e)=>{
        e.preventDefault();

        setUserData({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
        navigate('/dashboard')
        
        // setFirstName('')
        // setLastName('')
        // setEmail('')
        // setPassword('')
    }
    return (
        <div className='h-screen flex justify-center items-center bg-gray-100'>
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
            <form onSubmit={(e)=>{
                submitHandler(e)}
            }>
                <h1 className='text-lg font-medium mb-2'>What's your Name?</h1>
                <div className='flex gap-4'>
                    <input 
                        className='bg-slate-200 border rounded w-1/2 mb-5 px-1 py-1' 
                        required type='text'
                        placeholder='first name'
                        value={firstName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)}
                        }
                
                    />
                    <input 
                        className='bg-slate-200 border rounded w-1/2 mb-5 px-1 py-1' 
                        required type='text' 
                        placeholder='last name'
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)}
                        }
                    />
                </div>
                
                <h1 className='text-lg font-medium mb-2'>Email Address</h1>
                <input 
                    className='bg-slate-200 border rounded w-full mb-5 px-1 py-1' 
                    required type='email' 
                    placeholder='email@example.com'
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)}
                    }
                
                />
                <h1 className='text-lg font-medium mb-2'>Enter Password</h1>
                <input 
                    className='bg-slate-200 border rounded w-full mb-5 px-1 py-1' 
                    required type='password' 
                    placeholder='password'
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)}
                    }
                />
                <button className='w-full rounded bg-black text-white font-bold px-2 py-2'>Create Account</button>
            </form> 
            <p className='justify-center mb-2'>Already have an account?<Link to='/' className='text-blue-400'>Login here</Link></p>
        </div>
        </div>
    );
};

export default SignUp;