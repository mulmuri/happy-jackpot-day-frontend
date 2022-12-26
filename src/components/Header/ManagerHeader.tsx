import { AppBar, Box, Toolbar, ThemeProvider } from '@mui/material'
import GlobalContext  from '../../contexts/Global';
import { useContext } from 'react';
import { headerTheme } from '../../theme/headerTheme';
import { NameSection, LogoSection, AvatarSection, ManagerSection } from './HeaderComponent';



const UserHeader = () => {
    const Global = useContext(GlobalContext);
    const { user } = {...Global.state, ...Global.actions};

    return (
    <ThemeProvider theme={headerTheme}>
    <Box>
      <AppBar>
        <Toolbar sx={{pt: 0, pb: 0}}>
          <LogoSection/>
          <NameSection name={user.name}/>
          <ManagerSection/>
          <AvatarSection/>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
    );
}



export default UserHeader