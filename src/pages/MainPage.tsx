import React from 'react';
import Footer from '../components/Footer';
import WorksContainer from '../components/WorksContainer';
import Header from '../components/Header';
import CreatePost from './CreatePost';

const MainPage: React.FC = () => {
  return (
    <>
      <CreatePost />
      <Header />
      <WorksContainer />
      <Footer />
    </>
  );
};

export default MainPage;
