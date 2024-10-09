import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="kontak" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Kontak Kami</h2>
          <div className="subtitle">segera hubungi kami</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Masukkan nama panjangmu" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Masukkan alamat emailmu" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Masukkan nomor telepon mu" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Masukkan pesanmu kepada kami" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Kirim</Button>
          </div>
        </Form>
      </Container>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hanrianang1122334455@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              088888888888
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Ponorogo, Jawa Timur
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;