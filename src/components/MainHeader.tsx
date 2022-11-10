import { AppBar, Box, Toolbar, Typography, IconButton, Avatar, ThemeProvider } from '@mui/material'
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import GlobalContext  from '../contexts/Global';
import { useContext } from 'react';
import { headerTheme } from '../theme/headerTheme';
import { userStatusInterface } from '../model/userInterface';



const LogoSection = () => {
  return (
    <IconButton size="large" edge="start">
      <InsightsIcon sx={{mr: 0, color: "white"}} fontSize="large"/>
    </IconButton>
  )
}

const NameSection = ({name}: userStatusInterface) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {name}
        </Typography>
    )
}

const AvatarSection = () => {
    const navigate = useNavigate();

    return (
      <IconButton size="large" edge="start" sx={{ p: 0 }} onClick={() => navigate("/profile")}>
        <Avatar/>
      </IconButton>
    )
}


const ManagerSection = () => {
    const navigate = useNavigate();

    return (
        <IconButton size="large" edge="start" sx={{mr: 2}} onClick={() => navigate("/manager")}>
          <SettingsIcon sx={{mr: 0, color: "white"}} fontSize="large"/>
        </IconButton>
    )
}



const MainHeader = () => {
    const Global = useContext(GlobalContext);
    const { user } = {...Global.state, ...Global.actions};




    return (
    <ThemeProvider theme={headerTheme}>
    <Box>
      <AppBar>
        <Toolbar sx={{pt: 0, pb: 0}}>
          <LogoSection/>
          <NameSection name={user.name}/>
          {user.status === "Admin" && <ManagerSection/>}
          <AvatarSection/>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}



export default MainHeader