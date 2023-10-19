import React from 'react';
import { withRouter } from './providers';
import { Routing } from '../pages';

const App = () => {
  return (
    <div>
      <Routing />
    </div>
  );
};

export default withRouter(App);
