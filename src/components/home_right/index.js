import React from 'react';
import '../home_right/style.css';
import ME from '../../images/me4.png';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Home_Right() {
  return (
    <Container className="home-right">
      <nav className="nav">
  
  <a className="nav-link" href="#projects">Projects</a>
  <a className="nav-link" href="#contact">Contact</a>
  
</nav>
      <Row className="home-right-main">
        <Col xl={12}>
          <br />
          <Image src={ME} className="home-right-main-img" alt="Image of Me"/>
        </Col>
        <Row className="home-right-footer" >
          <SocialIcons />
        </Row>
      </Row>

    </Container>
  );
}

export default Home_Right;