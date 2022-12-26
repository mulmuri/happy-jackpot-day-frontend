import { defaultTime } from "../../../axiosapi";
import { PageFrame, PageTitleItem, FloatingButton } from "../../../components";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import UpdateIcon from '@mui/icons-material/Update';

const Main = () => {
    return (
      <PageFrame>
        <PageTitleItem title="무엇을 하시겠습니까?"/>
        <FloatingButton
          animation="fade-up" duration={defaultTime.first}
          path="/admin/mileage-request-status"
          icon={<CurrencyExchangeIcon/>}>
          출금 요청 보기
        </FloatingButton>
        <FloatingButton
          animation="fade-up" duration={defaultTime.second}
          path="/admin/mileage-update"
          icon={<UpdateIcon/>}>
          마일리지 업데이트
        </FloatingButton>
        <FloatingButton
          animation="fade-up" duration={defaultTime.third}
          path="/admin/user"
          icon={<ManageAccountsIcon/>}>
          회원 관리하기
        </FloatingButton>
        <FloatingButton
          animation="fade-up" duration={defaultTime.third}
          path="/admin/register-request-status"
          icon={<GroupAddIcon/>}>
          회원가입 요청 보기
        </FloatingButton>
        <FloatingButton
          animation="fade-up" duration={defaultTime.fourth}
          path="/admin/register"
          icon={<PersonAddIcon/>}>
          회원 가입
        </FloatingButton>
      </PageFrame>
    )
}

export default Main;