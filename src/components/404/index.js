import React from 'react';
import { Link } from 'gatsby';

const title = '404: Not Found';
const sorry = "Sorry! That shouldn't have happened.";

const homepage = <Link to='/'>homepage</Link>;
const letMeKnow = (
  <a rel='me' href='https://twitter.com/jlewin_'>
    let me know
  </a>
);

const action = (
  <React.Fragment>
    {'You might want to go to my '}
    {homepage}
    {' (and '}
    {letMeKnow}
    {` that something's broken, if you're feeling helpful). Thank you 💛`}
  </React.Fragment>
);

const NotFound = () => (
  <div>
    <h1>{title}</h1>
    <p>{sorry}</p>
    <p>{action}</p>
  </div>
);

export default NotFound;
