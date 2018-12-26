import React from 'react';
import { HTMLContent } from '../Content';
import SectionProps from '../../prop-types/components/section';
import styles from './styles.module.scss';

const Section = ({ level, title, content }) => {
  const Heading = `h${level}`;
  const headingClass = level === 1 ? styles.heading : styles.subheading;

  return (
    <section className={styles.container}>
      <Heading className={headingClass}>{title}</Heading>
      {typeof content === 'string' ? <HTMLContent content={content} /> : content}
    </section>
  );
};

Section.propTypes = SectionProps;

export default Section;
