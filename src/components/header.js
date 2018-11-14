import React from 'react'
import { Link } from 'gatsby'
import  Input from 'antd/lib/input';
import 'antd/lib/input/style/index.css';

const Search = Input.Search;

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#00456E',
      marginBottom: '1.45rem',
      height: '150px'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
            {siteTitle}
        </Link>
      </h1>
        <div className="search">
            <Search
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
        </div>
    </div>
  </div>
)

export default Header
