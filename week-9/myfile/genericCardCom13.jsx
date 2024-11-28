import React from "react";

const Card =({children})=>{

    return (
      <div style={{
        border:'1px solid #ccc',
        borderRadius: '5px',
        padding : '20px',
        margin: '10px',
        boxshadow: '2px 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: 'red'
      }}>
        {children}
      </div>
      );
};


const App =()=>{
  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is come content inside the card.</p>
      </Card>
      <Card>
        <h2>Another Card</h2>
        <textarea type="text" />
        <p>This card has a different content.</p>
      </Card>
    </div>
  );
};

export default App;