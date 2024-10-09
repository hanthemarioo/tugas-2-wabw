import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: 'Basic',
    price: 'Rp. 350.000,00',
    features: ['Wireframing', 'Visual Design', '5 pages', 'Limited Hosting', ''],
    link: 'https://www.google.com'
  },
  {
    id: 2,
    plan: 'Premium',
    price: 'Rp. 500.000,00',
    features: ['Wireframing', 'Visual Design', '15 pages', 'Free Hosting', 'Support & Assistance'],
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    plan: 'Ultimate',
    price: 'Rp. 750.000,00',
    features: ['Wireframing', 'Visual Design', 'Unlimited pages', 'Free Hosting', 'Support & Assistance'],
    link: 'https://www.twitter.com'
  }
]

function AppPricing() {
  return (
    <section id="harga" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Harga &amp; penawaran</h2>
          <div className="subtitle">periksa harga &amp; penawaran kami</div>
        </div>
        <Row>
          {
            pricingData.map(pricing => {
              return (
                <Col sm={4} key={pricing.id}>
                  <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>{pricing.price}</span>
                  </div>
                  <div className='content'>
                    <ListGroup>
                      {
                        pricing.features.map((feature, index) => {
                          return (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>    
                          );
                        })
                      }
                    </ListGroup>
                  </div>
                  <div className='btn-holder'>
                    <a href={pricing.link} className='btn btn-primary'>Pesan Sekarang!</a>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;