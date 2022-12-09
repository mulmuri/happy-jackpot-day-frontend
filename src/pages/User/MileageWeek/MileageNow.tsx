import { Typography } from "@mui/material"
import Aos from "aos"
import { useContext, useEffect } from "react"
import { aosInterface } from "../../../model/viewInterface"
import { mileageInterface } from "../../../model/mileageInterface"
import { PageItem } from "../../../components"
import MileageContext from "../../../contexts/Mileage"
import { addComma } from "../../../util/formatter"



const TitleSection = () => {
    return (
        <Typography fontSize={10} align="center" mt={5}> 주간 누적 마일리지 </Typography>
    )
}
  
const MileageSection = ({amount}: mileageInterface) => {
    return (
        <Typography fontSize={30} align="center" mt={0}>{ addComma(amount)}</Typography>
    )
}
  
const MileageNow = (props: aosInterface) => {
    const Mileage = useContext(MileageContext)
    const { mileage, fetchMileage, } = {...Mileage.state, ...Mileage.actions}
  
    useEffect(() => {
        fetchMileage();
    }, []);

    useEffect(() => {
      Aos.init({});
    }, [])
  
    return (
        <PageItem data-aos={props.animation} data-aos-duration={props.duration}>
            <TitleSection/>
            <MileageSection amount={mileage.amount} />
        </PageItem>
    )
};
  
export default MileageNow;