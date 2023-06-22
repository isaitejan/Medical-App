import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <Navbar className='bg-primary text-white'>
      <Container>
        <Navbar.Brand className='bg-primary text-white' ><Link to='/' style={{textDecoration:'none',color:'white'}}>Medical Bill Tracker</Link></Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}

export default NavBar;