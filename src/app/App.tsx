import React from 'react';
import { withRouter } from './providers';
import { Routing } from '../pages';
import styles from './styles/App.module.scss';
import SideBar from '../widgets/sidebar';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import './styles/global.scss';

const App = () => {
  return (
    <Layout className={styles.app}>
      <Sider className={styles.side}>
        <SideBar />
      </Sider>
      <Layout className={styles.layout}>
        <Content className={styles.content}>
          <Routing />
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(App);
