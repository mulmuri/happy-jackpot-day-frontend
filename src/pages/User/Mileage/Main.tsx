import AnnouncementCard from './Announcement';
import AssetCard from './Asset'
import Table from './Table';
import { PageFrame } from '../../../components';
import { defaultTime } from '../../../axiosapi';
import { MileageProvider } from '../../../contexts/Mileage';



const Mileage = () => {
    return (
        <PageFrame>
          <MileageProvider>
            <AnnouncementCard animation="fade-up" duration={defaultTime.first}/>
            <AssetCard        animation="fade-up" duration={defaultTime.second}/>
            <Table            animation="fade-up" duration={defaultTime.third}/>
          </MileageProvider>
        </PageFrame>
    );
}

export default Mileage