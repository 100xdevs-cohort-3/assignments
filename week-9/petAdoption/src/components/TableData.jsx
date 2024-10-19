import React from 'react';

const TableData = ({ submissions }) => {
  const tableContainerStyle = {
    maxWidth: '100%',
    overflowX: 'auto', // Enable horizontal scroll if table overflows
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight background for readability
    padding: '10px',
    borderRadius: '10px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '600px', // Ensure table has a minimum width for better readability
  };

  const thTdStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <div style={tableContainerStyle}>
      <h3>Submitted Data</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Pet Name</th>
            <th style={thTdStyle}>Pet Type</th>
            <th style={thTdStyle}>Breed</th>
            <th style={thTdStyle}>Your Name</th>
            <th style={thTdStyle}>Email</th>
            <th style={thTdStyle}>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td style={thTdStyle}>{submission.petName}</td>
              <td style={thTdStyle}>{submission.petType}</td>
              <td style={thTdStyle}>{submission.breed}</td>
              <td style={thTdStyle}>{submission.yourName}</td>
              <td style={thTdStyle}>{submission.email}</td>
              <td style={thTdStyle}>{submission.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
