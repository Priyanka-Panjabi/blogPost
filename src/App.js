import React from 'react';
import Layout from './components/layout/Layout';
import ThemeProvider from './utility/themeContextProvider';
import Main from './components/layout/main/Main';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ArticlePage } from './components/layout/article/articlePage';
import Articles from './components/layout/articles/Articles';

function App() {
  return (
    <ThemeProvider>
    <HashRouter>
    <Routes>
    <Route  path="/articles" element={<Articles />}/>
    <Route path="/article/:id" element={<ArticlePage />}/>
    <Route path="*" element={
      <Layout>
        <Main/>
      </Layout> }/>
   </Routes>
   </HashRouter>
   </ThemeProvider>
  );
}

export default App;
