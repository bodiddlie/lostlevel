import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
const NonMemo = lazy(() => import('./nonmemo'));
const Contact = lazy(() => import('./memo'));

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>App</h1>
          <Link to="/">Home</Link>
          <Link to="/nonmemo/">About</Link>
          <Link to="/memo/">Contact Us</Link>
          <Suspense fallback={<div>Loading......</div>}>
            <Route path="/" exact component={Home} />
            <Route path="/nonmemo/" render={props => <NonMemo {...props} />} />
            <Route path="/memo/" render={props => <Contact {...props} />} />
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}
