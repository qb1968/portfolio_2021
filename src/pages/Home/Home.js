import {React, useCallback} from 'react'
import Animate from 'react-smooth'
import Particles from 'react-tsparticles'
import particles from '../../effects/particles'
import '../Home/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import HomeLeft from '../../components/home_left'
import HomeRight from '../../components/home_right'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../../components/footer'
import { loadFull } from "tsparticles";



const Home = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
    return (
        <div>
           <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            
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
