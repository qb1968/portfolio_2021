import React from 'react';
import '../Projects/style.css';
import {
  Container,
  Row,
} from 'react-bootstrap';
import ProjectBody from '../../components/project_main'

function Projects() {
  return (
    <Container className="project_main" fluid>
      <Row className="project_header" id="projects">
        <h1>
        Projects
        </h1>
      </Row>
       <ProjectBody/>
    </Container>
  );
}

export default Projects;