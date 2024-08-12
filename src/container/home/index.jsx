import React from "react";
import './style.scss';




  const handleOpenPdf = () => {
    const pdfUrl = '/newresume (3) (1).pdf';
    window.open(pdfUrl, '_blank');
  };

 


const Home=()=>{
    return(
       <section id="home" className="home">
        <div className="home__text">
            <h1>
                Hello,I'm Aastha <br />
                front-end developer
            </h1>
            
            </div> 
<div className="reume">
<button onClick={handleOpenPdf}>open Resume</button>
</div>
       </section>
    )
}

export default Home;