import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import Events from './../scenes/Events';

export default ({ Layout }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="*" component={Events}/>
      </Switch>
    </Layout>
  </BrowserRouter>
);

