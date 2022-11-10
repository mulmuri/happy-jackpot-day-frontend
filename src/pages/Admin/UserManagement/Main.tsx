import { PageFrame, PageTitleItem } from "../../../components";
import { ManagerProvider } from "../../../contexts/Manager";
import UserListTable from "./Table";



const Main = () => {
    return (
        <PageFrame>
          <ManagerProvider>
            <PageTitleItem title="회원 관리"/>
            <UserListTable/>
          </ManagerProvider>
        </PageFrame>
    )
}

export default Main;