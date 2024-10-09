import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.png';

function AppAbout() {
  const html = 80;
  const tampilanResponsif = 95;
  const desainPhoto = 60;

  return (
    <section id="tentang-kami" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Tentang Kami</h2>
          <div className="subtitle">Pelajari Lebih Lanjut Tentang Kami</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
            <div className='progress-block'>
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>tampilan responsif</h4>
              <ProgressBar now={tampilanResponsif} label={`${tampilanResponsif}%`} />
            </div>
            <div className='progress-block'>
              <h4>Desain Photo</h4>
              <ProgressBar now={desainPhoto} label={`${desainPhoto}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;