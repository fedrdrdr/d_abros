import React from 'react';
import Footer from '../../components/Footer/Footer';
import WorksContainer from '../../components/WorkCard/WorksContainer';
import Header from '../../components/Header/Header';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <WorksContainer />
      <Footer />
    </>
  );
};

export default MainPage;
