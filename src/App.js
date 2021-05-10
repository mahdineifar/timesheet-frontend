import React from 'react';
import './scss/style.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./views/Login'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/" name="Login page" render={(props) => <Login {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
