import React, { useState } from "react";
import {FaBars,FaReact} from  'react-icons/fa';
import {Link} from 'react-router-dom';
import {HiX} from 'react-icons/hi'
import './style.scss';


const data=[
    {
        label:'Home',
        to:'/'
    },
    {
        label:'About Me',
        to:'/container/about'
    },
    {
        label:'Project',
        to:'/container/contact'
    },
    {
        label:'Skill',
        to:'/container/skill'
    },
]
const Navbar=()=>{
    const[toggleIcon,setToggleIcon] = useState(false)
    const handleToggleIcon=()=>{
setToggleIcon(!toggleIcon);
    }
    return(

        <div>
<nav className="navbar">
    <div className="navbar_container">
<Link to={'/'} className="navbar_container_logo">
<FaReact size={30}>
</FaReact>
</Link>
    </div>
<ul className= {`navbar_container_menu ${toggleIcon ? "active" :"" }`}>
{
    data.map((item,key)=>(
        <li key={key} className="navbar_container_menu_item">
            <Link className="navbar_container_menu_item_Links" to={item.to}>
            {item.label}
            </Link>
        </li>
    ))
}
</ul>
<div className="nav_icons" onClick={handleToggleIcon}>
{
    toggleIcon?<HiX size={30}/>:<FaBars size={30}/>
}
</div>

</nav>
        </div>
    )
}

export default Navbar;