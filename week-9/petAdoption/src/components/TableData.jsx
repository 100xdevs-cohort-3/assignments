import PropTypes from 'prop-types';

const TableData = ({ data }) => {
  return (
    <div style={tableContainerStyle}>
      <h2 style={headerStyle}>Submitted Pet Adoption Applications</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Pet Name</th>
            <th style={headerCellStyle}>Pet Type</th>
            <th style={headerCellStyle}>Breed</th>
            <th style={headerCellStyle}>Your Name</th>
            <th style={headerCellStyle}>Email</th>
            <th style={headerCellStyle}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td style={cellStyle}>{entry.petName}</td>
              <td style={cellStyle}>{entry.petType}</td>
              <td style={cellStyle}>{entry.breed}</td>
              <td style={cellStyle}>{entry.yourName}</td>
              <td style={cellStyle}>{entry.email}</td>
              <td style={cellStyle}>{entry.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
TableData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      petName: PropTypes.string.isRequired,
      petType: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
      yourName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Styles
const tableContainerStyle = {
  margin: '20px auto',
  padding: '20px',
  maxWidth: '80%',
  marginTop:'80px',
  backgroundColor: 'rgba(173, 76, 241, 0.64)',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '20px', 
  color: '#3A3A3A',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const headerCellStyle = {
  backgroundColor: '#F3C623',
  padding: '10px',
  border: '1px solid black',
  fontWeight: 'bold',
  textAlign: 'left',
};

const cellStyle = {
  padding: '10px',
  border: '1px solid black',
};

export default TableData;
