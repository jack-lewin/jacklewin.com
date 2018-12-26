import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import navbarProps, { defaultProps } from '../../prop-types/components/navbar';
import styles from './styles.module.scss';

const Navbar = ({ breadcrumbs }) => (
  <nav className={styles.container} role='navigation' aria-label='main-navigation'>
    <Link to='/'>Jack Lewin</Link>

    {breadcrumbs.map(({ path, text }) => (
      <Fragment>
        <span className={styles.divider}>/</span>
        <Link to={path}>{text}</Link>
      </Fragment>
    ))}
  </nav>
);

Navbar.propTypes = navbarProps;

Navbar.defaultProps = defaultProps;

export default Navbar;
