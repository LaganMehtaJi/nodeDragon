import React from "react";
import NavBar from "../components/NavBar";
import Module from "../mainComponents/module";

function Devlop() {
  const panelStyle = {
    marginLeft: "4px",
    width: "300px",
    height: "570px",
    padding: "12px",
    overflowY: "scroll",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    scrollBehavior: "smooth",
  };
  const Style = {
    marginLeft: "4px",
    width: "200px",
    height: "570px",
    padding: "12px",
    overflowY: "scroll",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    scrollBehavior: "smooth",
  };

  return (
    <>
      <NavBar name="ChatApp" value="Run" />
      <div style={{ display: "flex", width: "auto", height: "auto" }}>
        <div style={panelStyle}>
          <Module />
          <Module />
          <Module />
          <Module />
          <Module />
          <Module />
          <Module />
          <Module />
          <Module />
          <Module />
          <Module />
          <Module />
        </div>
        <div style={{display:"flex",gap:"10px"}}>
            <div style={{width:"800px"}}>
             <h1>center</h1>
            </div>
            <div style={Style}>
            <h1>Right</h1>
            </div>
        </div>
      </div>
    </>
  );
}

export default Devlop;
