import { defaultTime } from '../../../axiosapi';
import { PageFrame, FloatingButton, PageTitleItem, WhiteSpace } from '../../../components';
import QAContent from './QAContent';
import NavigationIcon from '@mui/icons-material/Navigation';





const Introducion = () => {
  return (
    <PageFrame>
        <PageTitleItem title="QnA"/>
        <QAContent/>
        <FloatingButton animation="fade-up" duration={defaultTime.first}
          path="/register"
          icon={<NavigationIcon/>} >
          친구 초대하기
        </FloatingButton>
        <WhiteSpace height="40px"/>
    </PageFrame>
  );
}

export default Introducion;