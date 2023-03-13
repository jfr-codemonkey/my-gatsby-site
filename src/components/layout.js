import * as React from 'react';
import { Link } from 'gatsby';
import * as cs from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={cs.container}>
      <nav>
        <ul className={cs.navLinks}>
          <li className={cs.navLinkItem}>
            <Link className={cs.navLinkText} to="/">Home</Link>
          </li>
          <li>
            <Link className={cs.navLinkText} to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={cs.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
