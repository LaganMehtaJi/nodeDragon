import React from "react";
function small(props){
    return(
    <>
    <button style={{fontSize:"16px",border:"1px solid green",width:"150px",height:"30px",borderRadius:"12px"}}>{props.name}</button>
    </>
    );
}
export default small;