import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import Client from './components/client/Client';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import News from './components/News/News';
import AboutUs from './components/AboutUs/AboutUs';
import NewsPage from './components/News/NewsPage';
import Article from './components/News/Article';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/newspage" element={<NewsPage />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <Hero />
      <Service />
      <Client />
      <Carousel />
      <News />
      <Footer />
    </div>
  );
};

export default App;
