import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import * as Pages from 'pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/students" component={Pages.Students} />

        <Redirect to="/students" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
