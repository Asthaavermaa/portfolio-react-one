import React from "react";
import PageHeaderContent from "../../components/pageholder";
import {BsInfoCircleFill} from 'react-icons/bs';
import  { Animate }  from "react-simple-animate";
import './style.scss';
import {DiApple,DiAndroid} from 'react-icons/di';
import {FaDev,FaDatabase} from 'react-icons/fa';

const personalDetail =[
    {
        label:"Name",
        value:"Aastha Verma"
    },
   
    {
        label:"Email",
        value:"vermaastha10@gmail.com"
    },
    {
        label:"Contact",
        value:"7354481116"
    }
];


const About=()=>{
    return(
        <section id="about" className="about">
<PageHeaderContent
headerText = "About Me"
icon={<BsInfoCircleFill size={40}/> }

/>
<div className="about_content">
    <div className="about_content_personalWrapper"><Animate
    play duration={1.5}
    delay={1}
    start={{
        transform:"translateX(-900px)",
    }}
    end={{
        transform:"translateX(0px)"
    }}
    >
    <h3>
        Front End developer
    </h3>
    <p>
        
A frontend developer specializes in creating the visual and interactive elements of a website or application. They use HTML, CSS, and JavaScript to build responsive and user-friendly interfaces, ensuring a seamless user experience across different devices and browsers. Their role often involves working with frameworks like React, Angular, or Vue.js, and collaborating with designers and backend developers to implement and optimize web designs and functionality. Their focus is on delivering a polished, accessible, and efficient user interface that aligns with business goals.
    </p>
    </Animate>

    <Animate
    play duration={1.5}
    delay={1}
    start={{
        transform:"translateX(500px)",
    }}
    end={{
        transform:"translateX(0px)"
    }}
    >
    <h3 className="personalHeader">Personal Information</h3>
    <ul>
        {
           personalDetail.map((item,i)=>(
            <li key={i}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>

            </li>
           ))
        }
    </ul>
</Animate></div>
    <div className="about_content_serviceWrapper">
        <div className="about_content_serviceWrapper_innerContent">
        <div>
<FaDev size={60} color ="var(--yellow-theme-main-color)"/>
        </div>
        <div>
        <DiAndroid size={60} color ="var(--yellow-theme-main-color)"/>
        </div>
        <div>
        <FaDatabase size={60} color ="var(--yellow-theme-main-color)"/>
        </div>
        <div>
        <DiApple size={60} color ="var(--yellow-theme-main-color)"/>
        </div>
        </div>

    </div>
    
</div>

        </section>
    )
}

export default About;