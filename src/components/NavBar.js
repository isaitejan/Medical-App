import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { editButtonClick } from '../store/medicalSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar() {

  const dispatch = useDispatch();

  return (
    <Navbar className='bg-primary text-white'>
      <Container>
        <Navbar.Brand className='bg-primary text-white' ><Link to='/' onClick={()=>dispatch(editButtonClick(false))} style={{textDecoration:'none',color:'white'}}>Medical Bill Tracker</Link></Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}

export default NavBar;