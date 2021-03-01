import React from 'react';
import '../Projects/style.css';
import {
  Container,
  Row,
} from 'react-bootstrap';
import PM from '../../components/project_main'

function Projects() {
  return (
    <Container className="project_main" fluid>
      <Row className="project_header">
        <h1>
        Projects
        </h1>
      </Row>
       <PM/>
    </Container>
  );
}

export default Projects;