import { aosInterface, columnInterface, copyObj } from "../../../model/viewInterface"
import {useContext, useEffect } from 'react';
import { PageItem, TableStructure } from "../../../components"
import { Box } from '@mui/material';
import MileageContext from '../../../contexts/Mileage';
import Aos from "aos";



const FriendsCard = (props: aosInterface) => {

    const Mileage = useContext(MileageContext)
    const { friendsInfo, fetchFriendsInfo } = {...Mileage.state, ...Mileage.actions}


    const dataArray = friendsInfo.map((data) => {
        if (typeof data.amount === 'number') data.amount = data.amount + "원";
        return data;
    });

    let instructions: columnInterface[] = [
        {col: "name", pos: "left"},
        {col: "ID", pos: "center"},
        {col: "amount", pos: "right"}
    ];

    let headers: columnInterface[] = [
        {col: "이름", pos: "left"},
        {col: "아이디", pos: "center"},
        {col: "마일리지", pos: "right"}
    ];

    useEffect(() => {
        Aos.init();
    }, [])
    useEffect(() => {
        fetchFriendsInfo();
    }, [])

    return (
        <PageItem sx={{h: 100}}  data-aos={props.animation} data-aos-duration={props.duration}>
          <Box style={{width: "100%"}}>
            <TableStructure dataArray={dataArray} instructions={instructions} headers={headers}/>
          </Box>
        </PageItem>
    )
}


export default FriendsCard