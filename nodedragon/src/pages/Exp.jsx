import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
];

function Exp() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const rem = () => {
    const newNode = {
      id: (nodes.length + 1).toString(),
      data: { label: "Custom" },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setNodes((prev) => [...prev, newNode]);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", borderLeft: "2px solid #ccc" }}>
      <button onClick={rem}>Create Node</button>
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
  );
}

export default Exp;
