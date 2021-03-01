import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import  Skills from '../skills_icons'

  function Home_Left() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hello! 
         </h1>
         <h2 className="second_line">
         I am <strong>jonathan allison</strong>
         </h2>
         <h3>
         <ReactTypingEffect
           text="<Full Stack Web Developer/>" //text=["Hello.", "World!"]
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
         </h3>
          
           <br />
           <h2>
           <p>
           I build new projects just to tickle my brain and learn new things.

Though I do keep building projects, I'm still in search of a great team to become part of.
           </p>
           </h2>
           <br/>
           <div className="skills">
             <h1>Skills</h1>
           <h3>
          <Skills/>
          </h3>
          </div>
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;