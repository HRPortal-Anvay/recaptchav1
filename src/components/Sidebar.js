
import './Sidebar.css'
import React from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import pfp from '../images/pfp.png'
import Features from './Features';
import axios from 'axios';


const Sidebar = ({ children }) => {
    // const[isOpen ,setIsOpen] = useState(false); const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            // icon:<FaTh/>
        },
        {
            path: "/roles",
            name: "Role Management",
            // icon:<FaUserAlt/>
        },
        {
            path: "/analytics",
            name: "xxxxxxxxxx",
            // icon:<FaRegChartBar/>
        },
        {
            path: "/comment",
            name: "xxxxxxxxxx",
            // icon:<FaCommentAlt/>
        },
        {
            path: "/product",
            name: "xxxxxxxxxx",
            // icon:<FaShoppingBag/>
        },
        {
            path: "/productList",
            name: "xxxxxxxxxx",
            // icon:<FaThList/>
        }
    ]



    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <img src={pfp} alt="pfp" style={{ display: "block" }} className="pfp" height="80px" />

                    <div className="welcome">
                        <p style={{ display: "block" }} className="logo">Welcome</p>
                        <p>username</p>
                    </div>

                    {/* <div style={{marginLeft: "30px"}} className="bars">
                       <FaUserAlt onClick={toggle}/>
                   </div> */}
                </div>
                <div className="routes">
                    <h6>HR</h6>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                {/* <div className="icon">{item.icon}</div> */}
                                <div style={{ display: "block" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <main>
                {children}
                <Features />
            </main>
        </div>
    );
};

export default Sidebar;