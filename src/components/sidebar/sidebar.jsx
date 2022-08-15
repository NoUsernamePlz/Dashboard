import React from 'react'
import './sidebar.css'
// import {CalendarMonthIcon , GridViewIcon,ChatIcon } from '@mui/icons-material';
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">

                    <h4 className="sidebarTitle">
                        <GridViewIcon className='sidebarIcon' />
                        Dashboard

                    </h4>
                    <ul className="sidebarList">
                        <li className="sidebarlistitem">
                            Ecommerce
                        </li>

                        <li className="sidebarlistitem">
                            Saas
                        </li>
                        <li className="sidebarlistitem">
                            Crypto
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h5 className="sidebarTitle">
                        APPLICATION
                    </h5>
                    <ul className="sidebarList">
                        <li className="sidebarlistitem">
                            <CalendarMonthIcon className='sidebarIcon' />
                            Calender
                        </li>
                        <li className="sidebarlistitem">
                            <ChatIcon className='sidebarIcon' />
                            Chat
                        </li>
                        <li className="sidebarlistitem">
                            <Inventory2Icon className='sidebarIcon' />
                            File Manager
                        </li>
                        <li className="sidebarlistitem">
                            <LocalMallIcon className='sidebarIcon' />
                            Ecommerce
                        </li>
                        <li className="sidebarlistitem">
                            <MailOutlineIcon className='sidebarIcon' />
                            Email
                        </li>
                        <li className="sidebarlistitem">
                            <ReceiptOutlinedIcon className='sidebarIcon' />
                            Invoices
                        </li>
                        <li className="sidebarlistitem">
                            <BusinessCenterOutlinedIcon className='sidebarIcon' />
                            Projects
                        </li>
                        <li className="sidebarlistitem">
                            <WifiOutlinedIcon className='sidebarIcon' />
                            Contacts
                        </li></ul></div>


                <div className="sidebarMenu">
                    <h5 className="sidebarTitle">

                        PAGES

                    </h5>
                    <ul className="sidebarList">
                        <li className="sidebarlistitem">
                            <PersonOutlinedIcon className='sidebarIcon' />
                            Authentication
                        </li>


                        <li className="sidebarlistitem">
                           <ViewInArIcon className='sidebarIcon'/>
                            Utility
                        </li></ul></div>

                <div className="sidebarMenu">

                    <h5 className="sidebarTitle">

                        COMPONENTS

                    </h5>

                    <ul>
                        <li className="sidebarlistitem">
                            <InsertDriveFileOutlinedIcon className='sidebarIcon'/>
                            Forms
                        </li>
                        <li className="sidebarlistitem">
                            <PersonOutlinedIcon className='sidebarIcon' />
                            Forms
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Sidebar