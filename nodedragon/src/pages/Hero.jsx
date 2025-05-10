import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
function Hero() {
  return (
   <>
            <NavBar name="Node Deagon" value ="Login"/>
           <div style={{justifyItems:"center",width:"auto",height:"230px",padding:"150px"}}>
            <div style={{textAlign:"center"}}>
            <h1 style={{fontSize:"60px",color:"green",fontStyle:"oblique",fontWeight:"bold",marginBottom:"-30px"}}>Node Dragon</h1>
            <h5 style={{fontStyle:"inherit",fontSize:"22px",fontWeight:"lighter"}}>Much more than a modern Server creator without coding</h5>
            </div>
           
             <div style={{display:"flex",gap:"20px",width:"auto",height:"50px",color:"white" ,paddingLeft:"20px",paddingTop:"10px", fontSize:"30px",fontStyle:"oblique"}}>
               <Link to="/creator"> <button style={{width:"205px",height:"55px",fontSize:"22px",border:"1px solid green",boxShadow:"2px 4px 5px green",backgroundColor:"Black",borderRadius:"22px",color:"white"}} >Create Server</button></Link>
                <button style={{width:"205px",height:"55px",fontSize:"22px",border:"1px solid green",boxShadow:"2px 4px 5px green",backgroundColor:"white",borderRadius:"22px",color:"black"}} >See More</button>
             </div>
           </div>
   </>
  );
}   
export default Hero;
