import { PageFrame } from "../../../components";
import { defaultTime } from "../../../axiosapi";
import MileageWeekTable from './Table';
import MileageNow from "./MileageNow";
import { MileageProvider } from "../../../contexts/Mileage";



const MileageWeek = () => {
  return (
    <PageFrame>
      <MileageProvider>
        <MileageNow       animation="fade-up" duration={defaultTime.first}/>
        <MileageWeekTable animation="fade-up" duration={defaultTime.second}/>
      </MileageProvider>
    </PageFrame>
  )
}


export default MileageWeek;