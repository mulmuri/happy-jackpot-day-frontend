import { PageFrame, PageTitleItem } from "../../../components";
import { MileageManagerProvider } from "../../../contexts/MileageManager";



const Main = () => {
    return (
        <PageFrame>
          <MileageManagerProvider>
            <PageTitleItem title="마일리지 업데이트"/>
          </MileageManagerProvider>
        </PageFrame>
    )
}

export default Main;