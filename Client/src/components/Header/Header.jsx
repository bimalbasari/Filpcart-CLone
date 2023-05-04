import Container from 'react-bootstrap/Container';
import { NavLink, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container >
                <Link to="/" class="navbar-brand" >Admin Dashboard</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" >Features</NavLink>
                        </li>
                    </Nav>
                    <Nav>
                        <li className="nav-item">
                            <NavLink to="/signin" className="nav-link" >Signin</NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to="/signup" className="nav-link" size="lg">Signup</NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
