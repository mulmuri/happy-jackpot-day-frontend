import { Typography, IconButton, Avatar } from '@mui/material'
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

import { userStatusInterface } from '../../model/userInterface';


export const LogoSection = () => {
    return (
      <IconButton size="large" edge="start">
        <InsightsIcon sx={{mr: 0, color: "white"}} fontSize="large"/>
      </IconButton>
    )
  }
  
export const NameSection = ({name}: userStatusInterface) => {
      return (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {name}
          </Typography>
      )
  }
  
export const AvatarSection = () => {
      const navigate = useNavigate();
  
      return (
        <IconButton size="large" edge="start" sx={{ p: 0 }} onClick={() => navigate("/user/profile")}>
          <Avatar/>
        </IconButton>
    )
}
  
  
export const ManagerSection = () => {
      const navigate = useNavigate();
  
      return (
          <IconButton size="large" edge="start" sx={{mr: 2}} onClick={() => navigate("/manager")}>
            <SettingsIcon sx={{mr: 0, color: "white"}} fontSize="large"/>
          </IconButton>
      )
  }