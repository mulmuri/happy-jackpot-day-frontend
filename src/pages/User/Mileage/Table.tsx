import Aos from 'aos';
import { useContext, useEffect } from 'react';
import { aosInterface, columnInterface } from "../../../model/viewInterface"
import { PageItem, TableStructure } from "../../../components"
import { Box } from '@mui/material';
import GlobalContext from '../../../contexts/Global';
import MileageContext from '../../../contexts/Mileage';



const Table = (props: aosInterface) => {

    const Global = useContext(GlobalContext);
    const { user } = Global.state;

    const Mileage = useContext(MileageContext)
    const { friendsCount, fetchFriendsCount } = {...Mileage.state, ...Mileage.actions}

    const dataArray = friendsCount.map((data, idx) => {
        data.index = (idx+1)+"차";
        data.count = (idx === 0) ? user.name : data.count + "명";
        data.amount = data.amount + "원";
        return data;
    });

    const instructions: columnInterface[] =  [
        {col: "index",  pos: "left"},
        {col: "number", pos: "center"},
        {col: "amount", pos: "right"}
    ];

    const headers: columnInterface[] = [
        {col: "차수",   pos: "left"},
        {col: "인원수",  pos: "center"},
        {col: "마일리지", pos: "right"}
    ]

    useEffect(() => {
        Aos.init();
    }, [])

    useEffect(() => {
        fetchFriendsCount();
    }, [])

    
    return (
        <PageItem sx={{h: 100}}  data-aos={props.animation} data-aos-duration={props.duration}>
          <Box style={{width: "100%"}}>
            <TableStructure dataArray={dataArray} instructions={instructions} headers={headers}/>
          </Box>
        </PageItem>
    )
}


export default Table;