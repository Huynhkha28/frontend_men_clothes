import React,{ useEffect, useState } from 'react';
import Header from '../../components/Header.component.jsx';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
export default function Signup() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [user, setUser] = useState({});
  const [message, setMessage] = useState('');
  const [textColor, setTextColor] = useState('');
    const handleSubmit = async (e) => { // khi submit thì sẽ lấy các state trong data ra và gán vào object userData.
        e.preventDefault();
        const userData = {
            userName:userName,
            email:email,
            password: password,
            repassword: repassword
        };      
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, userData)
          setMessage(response.data.message);
          setTextColor('text-green-500');         
        }
        catch (err) {
          setMessage(err.response.data.message);
          setTextColor('text-red-500');
        }
      }
      const handleUserNameChange = (e)=> {
        setUserName(e.target.value)
      }
      const handleEmailChange = (e) => {
        setEmail(e.target.value)
      }
      const handlePasswordChange = (e) => {
        setPassword(e.target.value)
      }
      const handleRePasswordChange = (e) => {
        setRePassword(e.target.value)
      }
    return(
        <>
            <Header/>
            <div className='w-full h-[1000px] flex justify-center relative top-[50px]'>
          <form className='w-[500px] h-[800px] border rounded-2xl' onSubmit={handleSubmit}>
            <h2 className='text-4xl text-center mt-3'>Đăng Ký tài khoản</h2>
            <h3 className='text-4xl text-center mt-2'>
            Men Store
            </h3>
            <div className='flex justify-center my-4'>
              <p className=''>
              Bạn đã có tài khoản,
              </p>
              <Link to="/Auth/login" className='text-blue-500 mx-2'>
                Đăng nhập ngay
              </Link>
            </div>          
            <div className='flex flex-col items-center'> 
            <span className={`${textColor} text-lg font-semibold`}>
            {message}
            </span>
            
              <div className='w-[90%] flex flex-col'>
                <label className='text-black text-xl py-4 after:content-["*"] after:ml-1 after:text-red-500' htmlFor="email">Tên người dùng</label>
                <input className='py-3 px-3 outline-0 border rounded-2xl text-black' type="text" id="username" value={userName} onChange={handleUserNameChange} required/>  
              </div>
              <div className='w-[90%] flex flex-col'>
                <label className='text-black text-xl py-4 after:content-["*"] after:ml-1 after:text-red-500' htmlFor="email">Email</label>
                <input className='py-3 px-3 outline-0 border rounded-2xl text-black' type="email" id="username" value={email} onChange={handleEmailChange} required/>  
              </div>
              <div className='w-[90%] flex flex-col '>
                <label className='text-xl py-4 after:content-["*"] after:ml-1 after:text-red-500' htmlFor="password">Mật Khẩu</label>
                <input className='py-3 px-3 outline-0 border rounded-2xl' type="password" id="password" value={password} onChange={handlePasswordChange} required/>
              </div>
              <div className='w-[90%] flex flex-col '>
                <label className='text-xl py-4 after:content-["*"] after:ml-1 after:text-red-500' htmlFor="password">Nhập Lại Mật Khẩu</label>
                <input className='py-3 px-3 outline-0 border rounded-2xl' type="password" id="repassword" value={repassword} onChange={handleRePasswordChange} required/>
              </div>
            </div>
            <div className='w-full flex justify-center items-center flex-col'>
            <button className=' w-[300px] border py-3 rounded-2xl my-4 text-xl bg-black text-white items-center' type='submit'>
              Đăng Ký
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