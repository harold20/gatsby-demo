import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={'JUZGADO DECLARA ILEGAL HUELGA EN EL MEP'}
          meta={[
            { name: 'description', content: 'JUZGADO DECLARA ILEGAL HUELGA EN EL MEP' },
            { name: 'keywords', content: 'Sindicatos condenados a pagar ¢6 millones por costas; Ministerio llama a funcionarios a retomar labores para reactivar curso lectivo.' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={"Mundo Informativo CR"} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer siteTitle={""}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
