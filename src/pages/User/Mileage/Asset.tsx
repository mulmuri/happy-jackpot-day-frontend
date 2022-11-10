import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material';
import { PageItem } from '../../../components';
import Aos from "aos";
import addComma from '../../../util/addComma';
import GlobalContext from '../../../contexts/Global';
import MileageContext from '../../../contexts/Mileage';
import { mileageInterface } from '../../../model/mileageInterface';
import { userStatusInterface } from '../../../model/userInterface';
import { aosInterface } from '../../../model/viewInterface';



const TitleSection = ({name}: userStatusInterface) => {
    return (
        <Typography>{name}의 마일리지 </Typography>
    )
}





const MileageSection = ({amount}: mileageInterface) => {
    return (
        <Typography fontSize={30} align="center" mt={2}>{addComma((amount) || "---,---,---")}</Typography>
    )
}

const ButtonSection = () => {
    const navigate = useNavigate();

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group">
          <Button style={{width: 180}} onClick={() => navigate("/mileage/request")}><Typography fontSize={13} color="white">마일리지 출금</Typography></Button>
          <Button style={{width: 180}} onClick={() => navigate("/mileage/daily")}><Typography fontSize={13} color="white">주간 마일리지</Typography></Button>
        </ButtonGroup>
      </Box>
    )
}



const AssetCard = (props: aosInterface) => {

    const Global = useContext(GlobalContext);
    const { user } = Global.state;

    const Mileage = useContext(MileageContext)
    const { mileage, fetchMileage } = {...Mileage.state, ...Mileage.actions}

    useEffect(() => {
        Aos.init();
    }, [])

    useEffect(() => {
        fetchMileage();
    }, [])


    

    return (
        <PageItem data-aos={props.animation} data-aos-duration={props.duration}>
            <Container>
                <TitleSection name={user.name}/>
                <MileageSection amount={mileage.amount}/>
                <ButtonSection/>
            </Container>
        </PageItem>
    )
}

export default AssetCard;