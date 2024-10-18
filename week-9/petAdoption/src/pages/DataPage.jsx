import TableData from '../components/TableData';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const DataPage = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div>
      <TableData data={data} />
      <div style={{ textAlign: 'center' }}>
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer' }} onClick={() => navigate('/')}>Go Back</button>
      </div>
    </div>
  );
};
DataPage.propTypes = {
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
export default DataPage;

