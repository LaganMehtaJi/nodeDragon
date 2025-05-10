import React from "react";
import { Link } from "react-router-dom";
function project(props){
    return (
        <>
        <div style={{justifyItems:"center",width:"200px",height:"210px",border:"1px solid green",borderRadius:"12px",backgroundColor:"white",padding:"auto"}}>
           <div style={{width:"100px",height:"100px",marginTop:"3px",marginBottom:"12px"}}>
           <img src={props.url} alt={props.alt} width={"100px"} height={"100px"} style={{borderRadius:"100px"}}/>
           </div>
          <h3 style={{fontFamily:"initial",fontWeight:"lighter", marginTop:"-10px"}}>{props.title}</h3>
          <h2 style={{fontSize:"12px",fontWeight:"lighter",marginTop:"-10px"}}>Created: {props.created}</h2>
          <h2 style={{fontSize:"12px",fontWeight:"lighter",marginTop:"-10px"}}>Modified:{props.modify}</h2>
          <div style={{display:"flex",gap:"20px",width:"auto",height:"20px",marginLeft:"10px"}}>
            <button>Export</button>
            <button>Delete</button>
          </div>
         </div>
        </>
    );
}
export default project;