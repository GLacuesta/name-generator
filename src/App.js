import React from 'react';

import Generator from './containers/Generator';
import Layout from './hoc/Layout/Layout';
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <Layout>
        <Generator />
      </Layout>
    </div>
  );
}

export default App;
