import React from 'react';
import '../project_main/style.css';
import {
  Col,
  Card,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLink} from '@fortawesome/free-solid-svg-icons';
import info from '../../effects/data.js';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';



console.log(info);

const PM = () => {   
  
    return (
      <Row xl={12} className="main_row">

      {info.map(item => ( 
        <Col xl={4}  key={item.id} className="card_col">
        <Card className="card_main">
         
            
          <blockquote className="blockquote mb-0 card-body">
            <h2>
            {item.name}
            </h2>
            <h3>{item.about}</h3>
            <footer className="blockquote-footer">
             Built using <strong title="Source Title">{item.tools}</strong>
            </footer>
          </blockquote>
          <Card.Body>
        <div>
         <img className="pic" src={item.image} alt=""/>
           </div>
           
              
              
        
        </Card.Body>
        <div>
        <Card.Link href={item.link} target="_blank"><FontAwesomeIcon className="icon" size="lg" icon={faLink}/></Card.Link>
              <Card.Link href={item.link} target="_blank"><FontAwesomeIcon className="icon" size="lg" icon={faGithub}/></Card.Link>
              </div>
        </Card>
        
        </Col>
      ))}
    </Row>
    );
  }

  export default PM