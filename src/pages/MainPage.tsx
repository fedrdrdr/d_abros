import React from 'react';
import Footer from '../components/Footer';
import WorksContainer from '../components/WorksContainer';
import Header from '../components/Header';
import CreatePost from './CreatePost';
import PostsList from './PostsList';



const MainPage: React.FC = () => {
  return (
    <>
      <CreatePost />
      <PostsList />
      <Header />
      <WorksContainer />
      <Footer />
    </>
  );
};

export default MainPage;
