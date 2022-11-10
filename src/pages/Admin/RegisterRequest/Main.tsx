import { PageFrame, PageTitleItem } from "../../../components";
import { ManagerProvider } from "../../../contexts/Manager";
import RegisterListTable from "./Table";



const Main = () => {
    return (
        <PageFrame>
          <ManagerProvider>
            <PageTitleItem title="회원가입 요청"/>
            <RegisterListTable/>
          </ManagerProvider>
        </PageFrame>
    )
}

export default Main;