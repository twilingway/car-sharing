import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import HomePage from './routes/Home';
import OrderPage from './routes/Order';
import SideBarContainer from './components/Sidebar';

import style from './style.module.scss';

function App() {
  return (
    <Switch>
      <Route path="/404" render={() => <h1>404 Not Found</h1>} />
      <Route>
        <>
          <div className={classNames(style.wrapper)}>
            <div className={style.container}>
              <SideBarContainer />
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
