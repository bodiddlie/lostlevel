import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
const About = lazy(() => import('./about'));
const Contact = lazy(() => import('./contact'));

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>App</h1>
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Link to="/contact/">Contact Us</Link>
          <Suspense fallback={<div>Loading......</div>}>
            <Route path="/" exact component={Home} />
            <Route path="/about/" render={props => <About {...props} />} />
            <Route path="/contact/" render={props => <Contact {...props} />} />
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}
