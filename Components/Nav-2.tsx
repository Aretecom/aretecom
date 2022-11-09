import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark" className="navbar">
        <Container className="nav-containerr">
          <Navbar.Brand href="/" className="nav-brand"><b>A</b>retecom LTD</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow} />
          <Navbar.Collapse id="responsive-navbar-nav" className='nav-links-container'>
            <Nav className="nav-lg d-lg-flex" >
              <div className='nav-links d-lg-block'><Link href="/our_business"><a className="nav-link-group d-lg-block pe-3">Our Businesses</a></Link>
                  <div className='links-dropdown-div'>
                      <span className='links-dropdown' id='main-link-dropdown'>
                      <Link href="/our_business/#agribusiness-card"><a className='main-link-dropdown'>Agribusiness</a></Link>
                      <div className='sub-links-dropdown-div' id='sub-links-dropdown'>
                          <Link href="/our_business/#agribusiness-card"><a className='links-dropdown'>Cultivation</a></Link>
                          <Link href="/our_business/#agribusiness-card"><a className='links-dropdown'>Warehouses</a></Link>
                          <Link href="/our_business/#agribusiness-card"><a className='links-dropdown'>Produce Delivery</a></Link>
                      </div>
                      </span>
                      <span className='links-dropdown' id='main-link-dropdown'>
                      <Link href="/our_business/#real-estate-div"><a className='main-link-dropdown'>Real Estate</a></Link>
                          <div className='sub-bottom-links-dropdown-div second' id='sub-links-dropdown'>
                          <Link href="/our_business/#real-estate-div"><a className='links-dropdown'>Land Sales</a></Link>
                          <Link href="/our_business/#real-estate-div"><a className='links-dropdown'>House Sales</a></Link>
                          <Link href="/our_business/#real-estate-div"><a className='links-dropdown'>Lease & Flip Plans</a></Link>
                          </div>
                      </span>  
                      <Link href="/our_business/#banking-agency-div"><a className='links-dropdown'>Agency Banking</a></Link>
                      <span className='links-dropdown' id='main-link-dropdown'>
                      <Link href="/our_business/#transportSystem-div"><a className='main-link-dropdown'>Transportation Systems</a></Link>
                          <div className='sub-bottom-links-dropdown-div fourth' id='sub-links-dropdown'>
                          <Link href="/our_business/#transportSystem-div"><a  className='links-dropdown'>Cars</a></Link>
                          <Link href="/our_business/#transportSystem-div"><a  className='links-dropdown'>Buses</a></Link>
                          <Link href="/our_business/#transportSystem-div"><a  className='links-dropdown'>Tricycles</a></Link>
                          <Link href="/our_business/#transportSystem-div"><a  className='links-dropdown'>Motorcycles</a></Link>
                          </div>
                      </span>
                  </div>
              </div>
              <div className='nav-links d-lg-block'><Link href="/services"><a className="nav-link-group d-none pe-3">Our Services</a></Link>
                  <div className='links-dropdown-div'>
                      <Link href="#action7"><a className='links-dropdown'>Business Consultation</a></Link>
                      <Link href="#action8"><a className='links-dropdown'>Advisory Roles To Business On Our Portfolio</a></Link>
                      <Link href="#action8"><a className='links-dropdown'>Partnership with Crowd and Angel investors to incubate Business</a></Link>
                      <Link href="#action8"><a className='links-dropdown'>Training Programs</a></Link>
                  </div>
              </div>
              <Link href="/services"><a className='nav-links d-lg-block pe-3'>Our Services</a></Link>
              <Link href="/about"><a className='nav-links d-lg-block pe-3'>About Us</a></Link>
              <Link href="https://jakesglobal.digitalpress.blog"><a  className='nav-links d-lg-block'>Blog</a></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} responsive="xxl" className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas-menu">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <Nav className="nav-resp" >
              <NavDropdown
                className="nav-dropdown-links"
                id="nav-dropdown-dark-example"
                title="Our Businesses"
              >
               <span onClick={handleClose}><Link href="/our_business"><a className='nav-dropdown-items mx-3'>Agribusiness</a></Link></span>
               <NavDropdown.Divider />
               <span onClick={handleClose}><Link href="/our_business/#real-estate-div"><a className='nav-dropdown-items mx-3'>Real Estate</a></Link></span>
               <NavDropdown.Divider />
               <span onClick={handleClose}><Link href="/our_business/#banking-agency-div"><a className='nav-dropdown-items mx-3'>Agency Banking</a></Link></span>
               <NavDropdown.Divider />
               <span onClick={handleClose}><Link href="/our_business/#transportSystem-div"><a className='nav-dropdown-items mx-3'>Transportation Systems</a></Link></span>
              </NavDropdown>
              <span onClick={handleClose}><Link href="/services"><a className='nav-dropdown-links mx-3'>Our Services</a></Link></span>
              <span onClick={handleClose}><Link href="/about"><a className='nav-dropdown-links mx-3'>About Us</a></Link></span>
              <span onClick={handleClose}><Link href="https://jakesglobal.digitalpress.blog"><a className='nav-dropdown-links mx-3'>Blog</a></Link></span>
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;