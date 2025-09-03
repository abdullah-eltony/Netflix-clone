import React from 'react'
import { Input } from '../components/UsedInputs'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

const Login = () => {
  return (
    <div className='container mx-auto px-2 my-24 flex-cols'>
      <div className='w-full 2xl:w-2/5 flex-cols gap-8 p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
        <img src='/images/logo.png' alt='logo ' className='w-full h-12 object-contain'/>
        <Input label='Email' placeholder='netflixo.com' type='email' bg={true}/>
        <Input label='Password' placeholder='*****' type='password' bg={true}/>
        <Link to='/dashboard' className='w-full bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg'>
          <FiLogIn/> Sign In
        </Link>
        <p className='text-center text-border'>
          Don't have an account? 
          <Link to='/register' className='text-dryGray font-semibold ml-2'>Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
