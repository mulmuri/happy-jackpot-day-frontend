import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, ThemeProvider } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { footerTheme } from '../../theme/footerTheme';
import { CustomPaper } from './FooterComponent';





function AwaterFooter() {
    const [navNo, setNavNo] = useState(0);
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
            <BottomNavigationAction onClick={() => navigate("/signin")} label="로그인" icon={<LoginIcon color="primary"/>} />
          </BottomNavigation>
        </CustomPaper>
      </ThemeProvider>
    )
}


export default AwaterFooter