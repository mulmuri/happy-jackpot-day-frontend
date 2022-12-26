import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, ThemeProvider } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WalletIcon from '@mui/icons-material/Wallet';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useNavigate } from 'react-router-dom';
import { footerTheme } from '../../theme/footerTheme';
import { CustomPaper } from './FooterComponent';





function MemberFooter() {
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
            <BottomNavigationAction onClick={() => navigate("/user/mileage")}     label="마일리지" icon={<WalletIcon          color="primary"/>} />
            <BottomNavigationAction onClick={() => navigate("/user/friend")}      label="친구목록" icon={<AccountCircleIcon   color="primary"/>} />
            <BottomNavigationAction onClick={() => navigate("/user/introducion")} label="Q&A"    icon={<LightbulbIcon       color="primary"/>} />
            <BottomNavigationAction onClick={() => navigate("/user/register")}     label="친구추천" icon={<AppRegistrationIcon color="primary"/>} />
          </BottomNavigation>
        </CustomPaper>
      </ThemeProvider>
    )
}


export default MemberFooter