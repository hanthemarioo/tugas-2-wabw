import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">3123512914_Hanrianang Damario</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tentang-kami">Tentang Kami</Nav.Link>
            <Nav.Link href="#layanan">Layanan</Nav.Link>
            <Nav.Link href="#jenis-pekerjaan">Jenis Pekerjaan</Nav.Link>
            <Nav.Link href="#anggota">Anggota</Nav.Link>
            <Nav.Link href="#testimoni">Testimoni</Nav.Link>
            <Nav.Link href="#harga">Harga</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#kontak">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppHeader;