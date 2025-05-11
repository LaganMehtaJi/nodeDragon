import React from "react";
import { useState } from "react";
function Module(props){
    const [isHovered, setIsHovered] = useState(false);
    return(
        <>
        <div   onClick={props.onClick}   onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>{setIsHovered(false)}} style={{width:"220px",height:"50px",borderRadius:"12px",display:"flex",gap:"5px",margin:"2px",backgroundColor:isHovered?"lightgreen":"white"}}>
           <div style={{width:"40px",height:"0px",padding:"auto"}}>
           <img style={{borderRadius:"50px",margin:"4px"}} src={props.url} alt=""  height={"40px"} width={"40px"} />
           </div>
            <h3 style={{fontSize:"18px",fontWeight:"normal", marginTop:"10px",color:"green"}}>{props.name}</h3>
        </div>
        </>
    );
}
export default Module;