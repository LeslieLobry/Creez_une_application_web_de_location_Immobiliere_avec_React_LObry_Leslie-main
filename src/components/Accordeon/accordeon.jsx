import {useState} from "react";
import "../Accordeon/accordeon.css"
import chevron from "../../assets/chevron.png"



function Accordeon ({title, content}){
    const [ open, close] = useState(false);
    
   
    return (
        <div className="accordion-container">
            <div className="accordion"onClick={
            ()=>close(!open)
            }>
            <div className="accordion-title" >{title}
            </div>
            <div className="chevron">
            {close &&<img className={open ? 'chevron chevron_up':'chevron chevron_down'} src={chevron} alt="kasa"></img>} 
            </div>
            </div>
            <div className="accordion-content">
               {open && <p>{content}</p>}
            </div>
        </div>
    )
 }
 export default Accordeon