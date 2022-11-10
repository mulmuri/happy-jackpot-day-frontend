import { PageFrame, PageTitleItem } from "../../../components";
import { WithdrawalManagerProvider } from "../../../contexts/WithdrawalManager";
import WithdrawalListTable from "./Table";




const Main = () => {
    return (
        <PageFrame>
          <WithdrawalManagerProvider>
            <PageTitleItem title="출금 요청"/>
            <WithdrawalListTable/>
          </WithdrawalManagerProvider>
        </PageFrame>
    )
}

export default Main;