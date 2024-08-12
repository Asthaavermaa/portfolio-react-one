import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageholder";

const Contact=()=>{
    return(
        <section id="Project" className="Project">
        <PageHeaderContent
        headerText = "Project"
        icon={<BsInfoCircleFill size={40}/> }
        
        />
        </section>
    )
}

export default Contact;