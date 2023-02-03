
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
const NavbarTwo=()=>{
    return(
<Navbar collapseOnSelect expand variant="dark" >
  <Navbar.Brand href="#home">TV Shows</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Genres" id="collasible-nav-dropdown" className="genre" >
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )

}
export default NavbarTwo