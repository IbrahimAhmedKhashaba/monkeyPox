import React from 'react'
import MainBg from './MainBg';
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div >
    <MainBg page = "register" str = "Register"></MainBg>
    <div className=" m-auto my-5 formRegisterContainer">
    <form className="border border-secondary m-auto mb-5 py-3">
      {/* <h3 className="w-25 mx-auto p-3 my-3 alert alert-primary text-center">Sign up</h3> */}
      <h3 className="mx-auto p-3 my-3 text-center "><span className="alert alert-primary">Sign up</span></h3>
        <div className="w-75 mx-auto my-4 ">
          <label htmlFor="name">Name: </label>
          <input  className='form-control ' id='name' name='name' placeholder="John Dee"/>
        </div>

        <div className="w-75 mx-auto my-4">
          <label htmlFor="email">Email: </label>
          <input  className='form-control ' id='email' name='email' placeholder="username@mail.com"/>
        </div>

        <div className="w-75 mx-auto my-4">
          <label htmlFor="password">Password: </label>
          <input  className='form-control ' id='password' name='password' />
        </div>
          
        <div className="w-75 mx-auto my-4">
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input  className='form-control ' id='confirmPassword' name='confirmPassword'/>
        </div>
          
        {/* <div className="w-75 mx-auto text-center mb-2 ">
          <button type='submit' className='btn btn-outline-primary fs-5'>Sign up</button>
        </div> */}

            <div className='text-center mb-3'>
              <button type='submit' className='btn applayDocHead px-5 py-3'><span className='fw-bold'>Sign up</span></button>
            </div>

        <div className='m-4'>
            <h3 className='fs-6 text-center text-secondary'>already have an account? <Link to="/signIn"><span className='text-primary'>Sign In</span></Link></h3>
        </div>
        </form>

        
    </div>
    </div>
  )
}
