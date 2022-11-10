import Aos from 'aos';
import { useContext, useEffect } from 'react';
import { aosInterface, columnInterface } from "../../../model/viewInterface"
import { PageItem, TableStructure,TransparentButton } from "../../../components"
import { Box } from '@mui/material';
import MileageContext from '../../../contexts/Mileage';
import { dailyMileageInterface, weekdays } from '../../../model/mileageInterface';



const MileageWeekTable = (props: aosInterface) => {

    const Mileage = useContext(MileageContext)
    const { weeklyMileage, fetchWeeklyMileage, saveDailyMileage } = {...Mileage.state, ...Mileage.actions}

    const dataArray: dailyMileageInterface[] = weekdays.map((weekday) => {
        return {
            weekday: weekday,
            amount: weeklyMileage[weekday] | 0,
            component: <TransparentButton onClick={() => {saveDailyMileage(weekday)}}>적립</TransparentButton>
        }
    });

    const instructions: columnInterface[] =  [
        {col: "weekday",  pos: "left"},
        {col: "amount", pos: "right"}
    ];

    useEffect(() => {
        Aos.init();
    }, [])

    useEffect(() => {
        fetchWeeklyMileage();
    }, [])




    return (
        <PageItem sx={{h: 100}}  data-aos={props.animation} data-aos-duration={props.duration}>
          <Box style={{width: "100%"}}>
            <TableStructure dataArray={dataArray} instructions={instructions}/>
          </Box>
        </PageItem>
    )
}


export default MileageWeekTable;