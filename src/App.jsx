import React from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import MenuHeader from './components/MenuHeader';
import MainPage from './components/MainPage';

import style from './style.module.scss';

function App() {
  const match = useRouteMatch('/');
  return (
    <Switch>
      <Route path="/404" render={() => <h1>404 Not Found</h1>} />
      <Route>
        <>
          <div className={classNames(style.wrap)}>
            <MenuHeader bgActive={!match.isExact} />
            <Switch>
              <Route path="/" exact component={MainPage} />
              {/* <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} /> */}
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </div>
        </>
      </Route>
    </Switch>
  );
}

export default App;
