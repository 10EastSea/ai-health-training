import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navigation.css";

function Navigation() {
    return (
        <div className="Navigation">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">AI Health Trainer</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Exercise Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="./exercise_model/lunge.html">Lunge</NavDropdown.Item>
                        <NavDropdown.Item href="./exercise_model/pushup.html">Push Up</NavDropdown.Item>
                        <NavDropdown.Item href="./exercise_model/squat.html">Squat</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.4">Sit Up</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.5">Shoulder Press</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.6">Leg Raise</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div >
    );
}

export default Navigation;