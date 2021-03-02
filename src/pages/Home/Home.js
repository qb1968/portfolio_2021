import React from 'react'
import Animate from 'react-smooth'
import Particles from 'react-particles-js'
import particles from '../../effects/particles'
import '../Home/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import HomeLeft from '../../components/home_left'
import HomeRight from '../../components/home_right'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../../components/footer'


const Home = () => {
    return (
        <div>
           <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
             <Container className="App-header" fluid={true}>
                
             <Row className="App-main" id="top" >
              <Col  xl={7}  className="App-left">
                <HomeLeft />
              </Col>
              <Col  xl={5} className="App-right">
                <HomeRight />
              </Col>
              </Row>
             </Container>
             <Container className="App-header" fluid={true}>
             <Row className="App-main">
                 <Projects/>
             </Row>
             </Container>
             <Container className="App-header" fluid={true}>
             <Row className="App-main">
                 <Contact/>
             </Row>
             <Row className="App-footer">
              <Footer />
            </Row>
            
             </Container>
            </Animate>
           
        </div>
    )
}

export default Home
