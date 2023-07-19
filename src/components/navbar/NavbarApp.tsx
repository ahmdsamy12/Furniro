import { faHeart, faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../../assets/Frame 168.png";
import "./navbar.css";
import { Link } from 'react-router-dom';


const NavbarApp = () => {
  return (
    <Navbar expand="lg" className="">
      <Container >
        <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 gap-lg-5 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/shop" className='nav-link'>Shop</Link>
            <Link to="/about" className='nav-link' >
              About
            </Link>
            <Link to="/contact" className='nav-link' >
              Contact
            </Link>
          </Nav>
          <Nav
            className="ms-auto my-2 my-lg-0 gap-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><FontAwesomeIcon icon={faUser} /></Nav.Link>
            <Nav.Link href="#action2"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
            <Nav.Link href="#" >
              <FontAwesomeIcon icon={faHeart} />
            </Nav.Link>
            <Nav.Link href="#" >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarApp;