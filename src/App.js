import React from 'react';
import Layout from './components/layout/Layout';
import ThemeProvider from './utility/themeContextProvider';
import Main from './components/layout/main/Main';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ArticlePage } from './components/layout/article/articlePage';
import Articles from './components/layout/articles/Articles';
import AboutUs from './components/About us/AboutUs';
import Error404 from './components/errorPage/error404';
import { Footer } from './components/layout/footer/Footer';

function App() {
  return (
    <ThemeProvider>
    <HashRouter>
    <Routes>
    <Route path="/" element={
      <Layout>
        <Main/>
      </Layout> }/>
    <Route  path="/articles" element={<><Articles /><Footer /></>}/>
    <Route path="/article/:id" element={<><ArticlePage /><Footer /></>}/>
    <Route path="/AboutUs" element={<AboutUs />}/>
    <Route path="*" element={<Error404/>}/>
   </Routes>
   </HashRouter>
   </ThemeProvider>
  );
}

export default App;
