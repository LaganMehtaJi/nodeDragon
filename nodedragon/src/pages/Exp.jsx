import React from "react";
import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

function Exp() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      {/* Left Sidebar (30%) */}
      <div style={{ width: '30%', backgroundColor: '#f0f0f0', padding: '20px', borderRight: '2px solid #ccc' }}>
        <h2>Menu / Components</h2>
        <p>This is your drag blocks or menu UI.</p>
        {/* Add components here later */}
      </div>

      {/* React Flow Canvas (70%) */}
      <div style={{ width: '70%', height: '100%', borderLeft: '2px solid #ccc' }}>
        <ReactFlow>
          <Background color="green" variant="cross" gap={20} />
          <Controls />
        </ReactFlow>
      </div>
      
    </div>
  );
}

export default Exp;
