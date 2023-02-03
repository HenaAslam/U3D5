
import {Navbar,Nav} from 'react-bootstrap'
// import {logo} from '../netflix_logo.png'

const NavbarComponent=()=>{
    return (
<Navbar collapseOnSelect expand="md"  variant="dark" className="navbar">
  <Navbar.Brand href="#home"><img src='https://assets.cdn.moviepilot.de/files/603f0c884f66e18724692ef18ecc52e07e50986299ddb63253ede5670147/fill/1200/576/netflix%20logo.jpg' alt="logo" className="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#" active>TV Shows</Nav.Link>
      <Nav.Link href="#">Movies</Nav.Link>
      <Nav.Link href="#">Recently added</Nav.Link>
      <Nav.Link href="#">My list</Nav.Link>
      
    </Nav>
    {/* ('/images/image-name.png')*/}
    <Nav>
      <Nav.Link href="#">KIDS</Nav.Link>
      <Nav.Link eventKey={2} href="#">
       <img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" alt="avatar" className="avatar"/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavbarComponent