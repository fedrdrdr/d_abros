import React from 'react';
import Footer from '../components/Footer';
import WorksContainer from '../components/WorksContainer';
import Header from '../components/Header';



const MainPage: React.FC = () => {
  return (
    <>
      <Header/>
      <WorksContainer />
      <Footer />
    </>
  );
};

export default MainPage;
