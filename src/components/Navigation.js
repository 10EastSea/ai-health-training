import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navigation.css";

function Navigation() {
    return (
        <div className="Navigation">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="./index.html">AI Health Trainer</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="./index.html">Home</Nav.Link>
                    <NavDropdown title="Exercise Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="./exercise_model/lunge.html">Lunge</NavDropdown.Item>
                        <NavDropdown.Item href="./exercise_model/pushup.html">Push Up</NavDropdown.Item>
                        <NavDropdown.Item href="./exercise_model/squat.html">Squat</NavDropdown.Item>
                        <NavDropdown.Item href="./exercise_model/situp.html">Sit Up</NavDropdown.Item>
                        <NavDropdown.Item href="./exercise_model/shoulderPress.html">Shoulder Press</NavDropdown.Item>
                        <NavDropdown.Item href="./exercise_model/legRaise.html">Leg Raise</NavDropdown.Item>
                        <NavDropdown.Item href="./exercise_model//mountain_climber.html">Mountain Climber</NavDropdown.Item>
                        <NavDropdown.Item href="./exercise_model/plank.html">Plank</NavDropdown.Item>
                        <NavDropdown.Item href="./exercise_model/dips.html">Dips</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div >
    );
}

export default Navigation;