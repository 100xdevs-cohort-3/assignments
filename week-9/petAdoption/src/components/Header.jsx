import React from 'react'

const Header = () => {
  const headerStyle = {
    backgroundColor: '#4CAF50',
    padding: '15px',
    textAlign: 'center',
    borderBottom: '3px solid #388E3C'
  };

  const titleStyle = {
    color: '#343a40',
    fontSize: '2.5em',
    margin: 0,
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Pet Adoption Form</h1>
    </header>
  );
};
  
export default Header