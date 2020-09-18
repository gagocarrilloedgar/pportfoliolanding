import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

export default (props) => {
  const links = [
   
    
  ];

  const classNames = classnames(
    'list-reset',
    props.className
  )

  return (
    <ul className={classNames}>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={link.href} activeClassName="is-active">{link.text}</NavLink>
        </li>
      ))}
    </ul>
  )
}