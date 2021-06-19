import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand> Moveo - Loop Machine </Navbar.Brand>
        <Navbar.Brand> Gal Caspi </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
