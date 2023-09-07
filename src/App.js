import React from 'react';
import Layout from './components/layout/Layout';
import ThemeProvider from './utility/themeContextProvider';
import Main from './components/layout/main/Main';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        {/* <Hero/> */}
        <Main/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
