import React, { useState, useCallback, useEffect } from "react";
import NavBar from "../components/NavBar";
import Element from "../mainComponents/Element";
import Module from "../mainComponents/module";
import { ReactFlow, applyEdgeChanges, applyNodeChanges, Background, Controls } from "@xyflow/react";
import '@xyflow/react/dist/style.css';

const initialNodes = [];
const initialEdges = [];

function Devlop() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [select, setSelect] = useState("1");
  const [enter, setEnter] = useState(false);
  const [click, setClick] = useState(false);
  const [record, setRecord] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecord(data);
      })
      .catch((error) => {
        alert("Server is not running");
      });
  }, []);

  const onNodesChange = useCallback(
    (changes) => {
      changes.forEach(change => {
        if (change.type === 'select') {
          setSelectedNode(change.selected ? change.id : null);
        }
      });
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    []
  );
  
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const nodecreator = useCallback((name) => {
    const newNode = {
      id: (nodes.length + 1).toString(),
      data: { label: name },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setNodes((prev) => [...prev, newNode]);
  }, [nodes.length]);

  const deleteSelectedNode = useCallback(() => {
    if (selectedNode) {
      setNodes((nds) => nds.filter((node) => node.id !== selectedNode));
      setSelectedNode(null);
    }
  }, [selectedNode]);

  return (
    <>
      <NavBar name="ServerDragon" value="Run" />
      <section style={{ display: 'flex', height: "100vh" }}>
        <div style={{ display: "flex", width: '18.5%', height: "100vh", backgroundColor: 'white', padding: '5px', borderRight: '2px solid #ccc', overflowY: "scroll" }}>
          <div 
            onMouseEnter={() => setEnter(true)} 
            onMouseLeave={() => setEnter(false)}
          >
            {record?.map((at, index) => (
              <Module 
                onClick={() => { 
                  setSelect(at.id); 
                  console.log(at); 
                }} 
                key={at.id || index} 
                name={at.name}
                url = {"data:image/jpeg;base64,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"}
              />
            ))}
          </div>
          <div style={{ transition: "0.3s", marginLeft: enter ? "-50px" : "-180px" }}>
            {record[select - 1]?.details?.map((at, index) => (
              <Module  
                onClick={() => nodecreator(at.name)}  
                key={index} 
                name={at.name}
                url={"data:image/jpeg;base64,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"}
              />
            ))}
          </div>
        </div>
        <div style={{ width: click ? '70%' : "85%", height: '100%', borderLeft: '2px solid #ccc' }}>
          <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
            <button onClick={() => setClick(prev => !prev)}>Toggle Panel</button>
            {selectedNode && (
              <button onClick={deleteSelectedNode} style={{ backgroundColor: '#ff4444', color: 'white' }}>
                Delete Selected Node
              </button>
            )}
          </div>
          <ReactFlow
            nodes={nodes}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
            fitView
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
        <div style={{ width: click ? '15%' : "0%", backgroundColor: '#f0f0f0', padding: '20px', borderRight: '2px solid #ccc' }}>
          <Element/> 
        </div>
      </section>
    </>
  );
}

export default Devlop;