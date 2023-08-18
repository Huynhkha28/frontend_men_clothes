
import React, { useState , useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import LoginSignupGroup from './LoginSignupButtonGroup';
import UserButtonGroup from './UserProfileButtonGroup'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import logo from '../images/logomen.avif';
 const Header =() => {
    const [categories, setCategory] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('isLoggedIn'))
    useEffect(() =>{
        const fetchCategories = async () =>{ //gọi đến api danh mục
            try{const CategoriesFetch = await fetch('http://localhost:3177/api/categories')
                const data = await CategoriesFetch.json();
                setCategory(data);
            }
            catch(err){
                console.log(err);
            }
        }
        if (categories.length === 0) {
            fetchCategories();
          }
    },[categories])
    useEffect(() =>{
        if(isLoggedIn){
            setIsLoggedIn(true)
        }
        else{
            setIsLoggedIn(false)
        }
    },[isLoggedIn])
    return(
        <>
            <nav className="w-full h-[80px] border sticky top-0 flex justify-center bg-white z-10">
                <div className="w-[90%] sm:w-[85%] h-full flex items-center justify-between">
                    <Link to= "/"className="relative left-0">
                        <img src={logo} alt="anh" width="70" height="40" className="rounded-[35px]" />
                    </Link>
                    <ul className="h-full hidden md:flex items-center justify-center ">
                        {categories.map((category) =>
                        (
                            <li className="sm:px-4 py-7 sm:h-[70px] hover:cursor-pointer hover:text-sky-500 after-category" key={category.category_id}>
                                {category.category_name}
                            </li>
                        ))
                    }
                    </ul>
                    <div className="flex items-center justify-end sm:flex w-[300px]">
                        <FontAwesomeIcon icon={faBagShopping} className="mr-4 sm:text-3xl "/>
                        {isLoggedIn? <UserButtonGroup/>: <LoginSignupGroup />}
                    </div>
                </div> 
            </nav>
            
        </>
    )
}
export default Header;