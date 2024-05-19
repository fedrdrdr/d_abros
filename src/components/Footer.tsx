import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
// import VkIcon from '@mui/icons-material/Vk'; // Импортируем иконку ВКонтакте из пакета @mui/icons-material

const FooterContainer = styled(Box)({
  backgroundColor: '#FFEFD6',
  padding: '20px 0',
  marginTop: 'auto',
});

const FooterItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const FooterLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  textDecoration: 'none',
  marginLeft: '10px',
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterItem>
          <RoomIcon />
          <Typography variant="body1" component="p" marginLeft="10px">
          Уральская д.18, Санкт-Петербург
          </Typography>
        </FooterItem>
        <FooterItem>
          <PhoneIcon />
          <Typography variant="body1" component="p" marginLeft="10px">
          +7 (981) 105-29-50
          </Typography>
        </FooterItem>
        <FooterItem>
          {/* <VkIcon /> */}
          <FooterLink href="https://vk.com/d.abros" target="_blank">
           VK d.abros
          </FooterLink>
        </FooterItem>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
