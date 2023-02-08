
import {Navbar,Nav,Form} from 'react-bootstrap'
// import {logo} from '../netflix_logo.png'
import {Link, useLocation} from 'react-router-dom'

const NavbarComponent=()=>{


  const location=useLocation()



    return (
<Navbar collapseOnSelect expand="md"  variant="dark" className="navbar">
  <Navbar.Brand href="#home"><img src='https://assets.cdn.moviepilot.de/files/603f0c884f66e18724692ef18ecc52e07e50986299ddb63253ede5670147/fill/1200/576/netflix%20logo.jpg' alt="logo" className="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Link to ="/"><div className={location.pathname==='/' ? "nav-link active" : "nav-link"}>Home</div> </Link>
      <Link to ="/tv-shows"><div className={location.pathname==='/tv-shows' ? "nav-link active" : "nav-link"}>TV Shows</div> </Link>
     <Link to="/movies"><div className={location.pathname==='/movies' ? "nav-link active" : "nav-link"}>Movies</div></Link> 
      <Nav.Link href="#">Recently added</Nav.Link>
      <Nav.Link href="#">My list</Nav.Link>
      
    </Nav>
    {/* ('/images/image-name.png')*/}
    <Nav>
    <Form inline>
 
    <Form.Control type="text" placeholder={  location.pathname==='/' ? "Search in Home" : location.pathname==='/tv-shows' ? "Search in Tv Shows" : "Search"}

    
      className="mr-sm-2" />
    </Form>
      <Link to ="/profile">
      <div className={location.pathname==='/profile' ? "nav-link active" : "nav-link"}>Profile</div>
      </Link>
      <Nav.Link eventKey={2} href="#">
       <img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" alt="avatar" className="avatar"/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavbarComponent