import React from 'react';
import Layout from './components/layout/Layout';
import { Header } from './components/layout/header';
import Main from './components/layout/main/Main';

function App() {
  return (
    <Layout>
      {/* <Hero/> */}
      <Main/>
    </Layout>
  );
}

export default App;
