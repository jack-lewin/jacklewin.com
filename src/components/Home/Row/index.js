import React from 'react';

import RowProps from '../../../prop-types/components/home/row';
import styles from './styles.module.scss';

const Row = ({ children }) => <div className={styles.container}>{children}</div>;

Row.propTypes = RowProps;

export default Row;
