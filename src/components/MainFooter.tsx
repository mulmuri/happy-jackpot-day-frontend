import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box, ThemeProvider } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WalletIcon from '@mui/icons-material/Wallet';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { footerTheme } from '../theme/footerTheme';


const CustomPaper = styled(Box)`
  && {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
`







function MainFooter() {
    const [navNo, setNavNo] = useState(1);
    const navigate = useNavigate();

    return (
      <ThemeProvider theme={footerTheme}>
        <CustomPaper sx={{borderTop: "#383742 1px solid" }}>
          <BottomNavigation
          color="priamry"
              value={navNo}
              onChange={(event, newValue) => {
                setNavNo(newValue);
              }}
            >
              <BottomNavigationAction onClick={() => navigate("/mileage")}     label="마일리지" icon={<WalletIcon          color="primary"/>} />
              <BottomNavigationAction onClick={() => navigate("/friend")}      label="친구목록" icon={<AccountCircleIcon   color="primary"/>} />
              <BottomNavigationAction onClick={() => navigate("/introducion")} label="Q&A" icon={<LightbulbIcon       color="primary"/>} />
              <BottomNavigationAction onClick={() => navigate("register")}     label="친구추천" icon={<AppRegistrationIcon color="primary"/>} />
          </BottomNavigation>
        </CustomPaper>
      </ThemeProvider>
    )
}


export default MainFooter