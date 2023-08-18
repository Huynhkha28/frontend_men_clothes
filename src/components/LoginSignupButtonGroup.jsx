import React from "react"
const LoginSignupGroup =() => {
    const groupButton = [{name:'Đăng nhập', link:'/Auth/login'}, {name:'Đăng kí', link:'/Auth/signup'}]
    return(
        <>
            <div className=" flex justify-center items-center bg-white">
                <div className=" flex justify-around">
                {groupButton.map((button)=>
                    <a href = {button.link} className="w-[100px] h-[50px] flex items-center rounded-[10px] mx-2 text-white justify-center bg-black hover:bg-slate-800" key ={button.name}>
                        {button.name}
                    </a>
                )}  
                </div>              
            </div>
            
        </>
    )
}
export default LoginSignupGroup;