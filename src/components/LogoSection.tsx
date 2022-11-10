import { LogoInterface } from "../model/viewInterface";
import InsightsIcon from '@mui/icons-material/Insights';
import ReportIcon from '@mui/icons-material/Report';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Wrapper from "./Wrapper";
import { IconButton } from "@mui/material";


const LogoSection = ({logo, color}: LogoInterface) => {
    const style = {mr: 0, width: 128, height: 128, color: color};
    let icon;

    switch (logo) {
        case "Main":
            icon = <InsightsIcon   sx={style} fontSize="large"/>;
            break;
        case "Warning":
            icon = <ReportIcon     sx={style} fontSize="large"/>;
            break;
        case "Profile":
            icon = <PersonPinIcon  sx={style} fontSize="large"/>;
            break;
        case "Success":
            icon = <ThumbUpAltIcon sx={style} fontSize="large"/>
            break;
        default:
            throw new Error('undefined icon');
    }

    return (
        <Wrapper top="0px" bottom="0px">
          <IconButton size="large" edge="start">
            {icon}
          </IconButton>  
        </Wrapper>
    )
}


export default LogoSection;