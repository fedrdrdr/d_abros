import React from 'react';
import { styled } from '@mui/system';
import logo from '../logo.jpg';
import Footer from '../components/Footer';
import WorksContainer from '../components/WorksContainer';


const LogoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '40vh',
  backgroundColor: '#f5e6cc',
});

const Logo = styled('img')({
  width: '100%',
  maxHeight: '100%'
  // maxWidth: '500px',
});

// const Text = styled('div')({
//   fontFamily: 'Arial, sans-serif',
//   color: '#4A4A4A',
//   fontSize: '20px',
//   fontWeight: 'bold',
//   textAlign: 'center',
//   marginTop: '20px',
// });

const MainPage: React.FC = () => {
  return (
    <>
      <LogoContainer>
        <Logo src={logo} alt="Мастерская прикладной эстетики" />
        {/* <Text>Мастерская прикладной эстетики</Text> */}
      </LogoContainer>
      <WorksContainer />
      <Footer />
    </>
  );
};

export default MainPage;
