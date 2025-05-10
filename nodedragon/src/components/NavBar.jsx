import React from "react";

function NavBar(props) {
   
    return (
        <>
         <div style={{display:"flex",gap:"200",width:"auto",height:"50px",color:"white",backgroundColor:"green" ,paddingLeft:"20px",paddingTop:"10px", fontSize:"30px",fontStyle:"oblique"}}>{props.name}
                
                <button style={{width:"155px",height:"40px",fontSize:"22px",border:"1px solid green",boxShadow:"2px 4px 5px green",backgroundColor:"white",borderRadius:"22px",color:"black",marginLeft:"1000px"}}>{props.value}</button>
            </div>
         
            
        </>
    );
}
export default NavBar;