import React from 'react'
import "./Header.css"
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { IconButton } from '@material-ui/core';
import  logo  from './flatamail.png';

function Header() {
    return (
        <div className="header">
           <div className="header_left">
               <IconButton>
                    <MenuRoundedIcon />
               </IconButton>
               <img src= {logo} alt=""/>
           </div>

          <div className="header_middle">

          </div>

          <div className="header_right">

          </div>
        </div>
    )
}

export default Header
