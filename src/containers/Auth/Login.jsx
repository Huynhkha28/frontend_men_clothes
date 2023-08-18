import { useState,useEffect } from 'react';
import Header from '../../components/Header.component.jsx';
import { Link, useNavigate  } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
export default function Login() {
  const[user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email:email,
      password: password,
  };
    try {
      const response =  await axios.post(`${process.env.REACT_APP_API_URL}/login`, userData);
      if(response.status === 200){
        window.localStorage.setItem("isLoggedIn", response.data.success);
        navigate('/');
      }
    } 
    catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header/>
        
      <div className='w-full h-screen flex justify-center items-center '>
          <form className='w-[500px] h-[600px] border rounded-2xl' onSubmit={handleSubmit}>
            <h2 className='text-4xl text-center mt-3'>Đăng Nhập</h2>
            <div className='flex justify-center my-4'>
              <p className=''>
              Nếu bạn chưa có tài khoản,
              </p>
              <Link to="/Auth/signup" className='text-blue-500 mx-2'>
                Đăng ký ngay
              </Link>
            </div>          
            <div className='flex flex-col items-center'> 
              <div className='w-[90%] flex flex-col'>
                <label className='text-black text-xl py-4 after:content-["*"] after:ml-1 after:text-red-500' htmlFor="email">Email</label>
                <input className='py-3 px-3 outline-0 border rounded-2xl' type="text" id="username" value={email} onChange={handleEmailChange} required/>  
              </div>
              <div className='w-[90%] flex flex-col '>
                <label className='text-xl py-4 after:content-["*"] after:ml-1 after:text-red-500' htmlFor="password">Mật Khẩu</label>
                <input className='py-3 px-3 outline-0 border rounded-2xl' type="password" id="password" value={password} onChange={handlePasswordChange} required/>
              </div>
            </div>
            <div className='w-full flex justify-center items-center flex-col'>
            <button className=' w-[300px] border py-3 rounded-2xl my-4 text-xl bg-black text-white items-center' type='submit'>
              Đăng Nhập
            </button>
            <span className='text-xl'>Hoặc</span>
            <GoogleLogin size="large"
              onSuccess={credentialResponse => {
                let userObject = jwt_decode(credentialResponse.credential);
                setUser(userObject);
                if(userObject.email){
                  navigate('/');
                }
              }}
                onError={() => {
              console.log('Login Failed');
          }}
            />
            </div>   
          </form>
      </div>
    </>
  )
}