import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import MenuHeader from './components/MenuHeader';
import HomePage from './routes/Home';
import OrderPage from './routes/Order';

import style from './style.module.scss';

function App() {
  // const match = useRouteMatch('/');
  return (
    <Switch>
      <Route path="/404" render={() => <h1>404 Not Found</h1>} />
      <Route>
        <>
          <div className={classNames(style.wrapper)}>
            <div className={style.container}>
              {/* <MenuHeader bgActive={!match.isExact} /> */}
              <MenuHeader />

              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/order" exact component={OrderPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
          </div>
        </>
      </Route>
    </Switch>
  );
}

export default App;
