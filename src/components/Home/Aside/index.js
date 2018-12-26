import React from 'react';

import AsideProps from '../../../prop-types/components/home/aside';
import styles from './styles.module.scss';

const Aside = ({ children }) => <aside className={styles.container}>{children}</aside>;

Aside.propTypes = AsideProps;

export default Aside;
