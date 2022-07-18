// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <CDBSidebar textColor="black" backgroundColor="white">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a href="/" className="text-decoration-none" style={{ color: 'black' }}>
//             Sidebar
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/dashboard" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/tables" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/profile" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             style={{
//               padding: '20px 5px',
//             }}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter> */}
//       </CDBSidebar>
//     </div>
//   );
// };

// export default Sidebar;

import './Sidebar.css'
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import pfp from '../images/pfp.png'
import Features from './Features';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/#",
            name:"Role Management",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"xxxxxxxxxx",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"xxxxxxxxxx",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"xxxxxxxxxx",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"xxxxxxxxxx",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <img src={pfp} alt="pfp" style={{display: isOpen ? "block" : "none"}} className = "pfp" height="80px"/>
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Name</h1>
                   <div style={{marginLeft: isOpen ? "30px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>
            {/* {children} */}
            <Features />
            </main>
        </div>
    );
};

export default Sidebar;