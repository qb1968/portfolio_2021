import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faReadme } from '@fortawesome/free-brands-svg-icons';
import JMAResume from '../../Resume.pdf'

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a
        href="https://github.com/qb1968"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/qb1968"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="twitter" icon={faTwitter} />
      </a>
      <a
        href="https://www.linkedin.com/in/jonathan-allison68"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      </a>
      <a
        href={JMAResume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="linkedin" icon={faReadme} />
      </a>
    </Col>
  );
}

export default SocialIcons;