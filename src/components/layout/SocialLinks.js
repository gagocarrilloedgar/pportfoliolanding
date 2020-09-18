import React from 'react';
import classnames from 'classnames';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { white } from 'material-ui/styles/colors';


const SocialLinks = (props) => {
  const classNames = classnames(
    'list-reset',
    props.className
  );

  return (
    <ul className={classNames}>
      <li>
        <a href="https://www.facebook.com/projectportfolio/">
          <span className="screen-reader-text">Facebook</span>
         <FacebookIcon style={{ color: white }}  />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/pportfol.io">
          <span className="screen-reader-text">Twitter</span>
          <InstagramIcon style={{ color: white }} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/pportfolio">
        <span className="screen-reader-text">Linkedin</span>
         <LinkedInIcon style={{ color: white }} />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks;
