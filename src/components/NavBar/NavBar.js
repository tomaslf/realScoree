import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




const NavBar = () => {




  return (
    <>
        <Navbar className='navBar'  bg="dark" variant="dark" expand="lg">
      <Container className='container'>
        <Navbar.Brand href={"/"}><img className='logo' src='../realscorelogo.png' alt='BrandLogo'/></Navbar.Brand>
      </Container>
    </Navbar>
    </>

    
    
  )
}

export default NavBar