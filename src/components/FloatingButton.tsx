
import { Fab } from "@mui/material";
import Aos from "aos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { aosInterface, ButtonInterface } from "../model/viewInterface";
import BoxItem from "./BoxItem";




interface customInterface extends ButtonInterface, aosInterface {};

const FloatingButton = ({animation, duration, children, path, icon}: customInterface) => {

    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({});
    }, [])

    return (
      <BoxItem
        data-aos={animation} data-aos-duration={duration}
        sx={{
          maxWidth: '600px',
          textAlign: "center"
        }}>
        <Fab variant="extended" sx={{
          bgcolor: 'info.main',
          '&:first-of-type svg': { position: "absolute", left: 30},
          width: "80%"
        }} onClick={() => path && navigate(path)}>
          {icon} {children}
        </Fab>
      </BoxItem>
    )
}

export default FloatingButton;
