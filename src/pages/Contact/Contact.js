import React from 'react';
import '../Contact/style.css';
import {Container, Row, Col} from 'react-bootstrap';



import ContactLeft from '../../components/contact_left';
import EmailForm from '../../components/email_form';


class Contact extends React.Component {

  
   //--Motasim Foads Portfolio website Google analytics--

  render() {
    return (
      <div>
        
        
          <Container className="Contact-header" fluid={true}>
            
            <Row className="Contact-main">
            <Col  xl={6}  className="Contact-left">
            <ContactLeft />
            </Col>
            <Col  xl={6}  className="Contact-right">
              <EmailForm />
            </Col>
            </Row>
            
          </Container>
      
      </div>
    )
  }
}export default Contact