import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
import NonMemo from './nonmemo';
import Memo from './memo';
const About = lazy(() => import('./about'));
const Contact = lazy(() => import('./contact'));

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/nonmemo/">Non Memoized</Link>
          <Link to="/memo/">Memoized</Link>
          <div>
            <Suspense fallback={<Loading />}>
              <Route path="/" exact component={Home} />
              <Route path="/about/" render={props => <About {...props} />} />
              <Route
                path="/contact/"
                render={props => <Contact {...props} />}
              />
              <Route path="/nonmemo/" component={NonMemo} />
              <Route path="/memo/" component={Memo} />
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const Loading = () => (
  <span className="loading" role="img" aria-label="Derp">
    🤪
  </span>
);
