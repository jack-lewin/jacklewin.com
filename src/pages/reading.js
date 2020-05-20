import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Section from '../components/Section';

const reading = ['Ego is the Enemy'];
const read = [];
const notStarted = [];

const ReadingPage = () => (
  <Layout>
    <Navbar />
    {reading.length > 0 && (
      <Section
        level={3}
        title='Reading'
        content={
          <ul>
            {reading.map((r, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`reading-${i}`}>{r}</li>
            ))}
          </ul>
        }
      />
    )}
    {read.length > 0 && (
      <Section
        level={3}
        title='Read'
        content={
          <ul>
            {read.map((r, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`read-${i}`}>{r}</li>
            ))}
          </ul>
        }
      />
    )}
    {notStarted.length > 0 && (
      <Section
        level={3}
        title="Haven't started"
        content={
          <ul>
            {notStarted.map((r, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`havent-started-${i}`}>{r}</li>
            ))}
          </ul>
        }
      />
    )}
  </Layout>
);

export default ReadingPage;
