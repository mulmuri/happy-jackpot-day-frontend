import { PageFrame, PageTitleItem } from "../../../components"
import { MileageProvider } from "../../../contexts/Mileage";
import { MileageRequestProvider } from "../../../contexts/MileageRequest";
import MoneyInput from "./MoneyInput";
import Panel from "./Panel";
import SendButton from "./SendButton";



const MileageRequest = () => {
    return (
        <PageFrame>
          <MileageRequestProvider>
            <MileageProvider>
              <PageTitleItem title="마일리지 전환"/>
              <MoneyInput/>
              <Panel/>
              <SendButton/>
            </MileageProvider>
          </MileageRequestProvider>
        </PageFrame>
    )
};

export default MileageRequest;