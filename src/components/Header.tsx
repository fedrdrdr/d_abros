import { styled } from '@mui/system';
import logo from '../logo.jpg';

const LogoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#FFEFD6',
  width: '100%',
});

const Logo = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%'
});

function Header() {
  return (
    <LogoContainer>
      <Logo src={logo} alt="Мастерская прикладной эстетики" />
    </LogoContainer>
  );
}

export default Header;
