import React from 'react';
import { withRouter } from './providers';
import { Routing } from '../pages';
import { SideBar } from '../widgets';
import styles from './styles/App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Routing />
    </div>
  );
};

export default withRouter(App);
