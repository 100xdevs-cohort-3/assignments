

const header_styles = {
  textAlign: 'center', 
  fontSize: '35px', 
  fontWeight: 'bold', 
  padding: '12px', 
  backgroundColor: 'rgba(173, 76, 241, 0.64)', 
  color: 'solid black', 
  position: 'fixed', 
  top: 0, 
  width: '100%',
  zIndex: 1000, 
};

const Header = () => {
  return (
    <div style={header_styles}>Pet Adoption Project</div>
  )
}

export default Header