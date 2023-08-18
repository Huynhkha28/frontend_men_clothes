import React from "react"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUser ,faArrowRightFromBracket, faCreditCard, faClipboardList} from '@fortawesome/free-solid-svg-icons';
const UserButtonGroup = () => {
    const groupButton = [{ buttonName: 'Thông tin cá nhân', link:"",icon: <FontAwesomeIcon icon={faUser} />},
                        { buttonName: 'Phương thức thanh toán', link:"", icon: <FontAwesomeIcon icon={faCreditCard} />},
                        { buttonName: 'Theo dõi đơn hàng', link:"", icon:<FontAwesomeIcon icon={faClipboardList} />}] // định nghĩa các nút                      
    const handleLogout = () => {
        window.localStorage.removeItem('isLoggedIn')// hủy biến local isLoggedIn
        window.location.reload(false);
    }
    return(
        <>
            <div className=" usericon " >
            <FontAwesomeIcon icon={faUser} className="mr-2 sm:text-3xl "/>
                <div className="w-fit border h-fit absolute top-[100%] right-[8%] rounded-2xl hidden usericon__dropdown">
                    <ul className="flex flex-col justify-center">
                        {groupButton.map((item, index) => {
                            return <li className="cursor-pointer py-3 px-4 hover:bg-slate-200 rounded-2xl" key={index}><Link to={item.link}>{item.icon} {item.buttonName}</Link></li>
                        })}
                        <li className="cursor-pointer px-4 py-3 hover:bg-slate-200 rounded-2xl" onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Đăng xuất</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default UserButtonGroup;