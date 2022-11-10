import { defaultTime } from "../../../axiosapi";
import { PageFrame, PageTitleItem } from "../../../components";
import { MileageProvider } from "../../../contexts/Mileage";
import FriendsCard from "./Table";



const Friend = () => {
    return (
        <PageFrame>
          <MileageProvider>
            <PageTitleItem title="친구 목록"/>
            <FriendsCard animation="fade-up" duration={defaultTime.second}/>
          </MileageProvider>
        </PageFrame>
    );
};

export default Friend;