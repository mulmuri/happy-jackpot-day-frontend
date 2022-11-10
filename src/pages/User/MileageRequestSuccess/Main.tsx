import { useNavigate } from "react-router-dom";
import { PageFrame, FitButton, LogoSection, MessageItem } from "../../../components";
import { scriptInterface } from "../../../model/viewInterface";



const MileageRequestSuccess = () => {
    const message: scriptInterface = {
        title: "전환 요청됨",
        content: "마일리지 전환 요청에 성공하였습니다. \n 관리자 확인 후 반영될 예정입니다."
    }

    const navigate = useNavigate();



    return (
        <PageFrame>
            <LogoSection logo="Success" color="success.main"/>
            <MessageItem title={message.title} content={message.content}/>
            <FitButton onClick={() => navigate("/")}>홈으로 돌아가기</FitButton>
        </PageFrame>
    )
};

export default MileageRequestSuccess;