import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import layoutProps from '../../prop-types/components/layout';

import styles from './styles.module.scss';

export const LayoutComponent = ({ data, children }) => (
  <Fragment>
    <Helmet>
      <html lang='en' />
      <title>{data.site.siteMetadata.title}</title>
      <meta name='description' content={data.site.siteMetadata.description} />

      <link
        href='https://fonts.googleapis.com/css?family=Source+Sans+Pro'
        rel='stylesheet prefetch'
      />
      <link rel='apple-touch-icon' sizes='180x180' href='/img/apple-touch-icon.png' />
      <link rel='icon' type='image/png' href='/img/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='/img/favicon-16x16.png' sizes='16x16' />

      <link rel='mask-icon' href='/img/safari-pinned-tab.svg' color='#0b192c' />
      <meta name='theme-color' content='#fff' />

      <meta property='og:title' content={data.site.siteMetadata.title} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='/img/og-image.png' />
      <meta property='og:url' content='/' />
    </Helmet>
    <div className={styles.container}>{children}</div>
  </Fragment>
);

const LayoutWrapper = props => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <LayoutComponent {...props} data={data} />}
  />
);

LayoutComponent.propTypes = layoutProps;

export default LayoutWrapper;
