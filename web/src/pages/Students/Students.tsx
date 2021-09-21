import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './List';
import Form from './Form';

const Students: React.FC = () => {
  return (
    <Switch>
      <Route path="/students" component={List} exact />
      <Route path="/students/new" component={Form} exact />
      <Route path="/students/edit/:student" component={Form} exact />
    </Switch>
  );
};

export default Students;
