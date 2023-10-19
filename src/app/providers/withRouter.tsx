import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Spin } from 'antd';

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spin />
        </div>
      }
    >
      {component()}
    </Suspense>
  </BrowserRouter>
);
