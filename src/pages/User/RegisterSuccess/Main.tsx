import { useNavigate } from "react-router-dom";
import { FitButton, PageFrame, LogoSection, MessageItem } from "../../../components"
import { scriptInterface } from "../../../model/viewInterface";



const RegisterSuccess = () => {

    const message: scriptInterface = {
        title: "회원가입 완료",
        content: "가입해주셔서 감사합니다. \n 운영진의 승인 후 타 기기에서 로그인하여 이용 가능합니다."
    }

    const navigate = useNavigate();

    return (
        <PageFrame>
            <LogoSection logo="Success" color="success.main"/>
            <MessageItem title={message.title} content={message.content}/>
            <FitButton onClick={() => navigate("../..")}>홈으로 돌아가기</FitButton>
        </PageFrame>
    )
};

export default RegisterSuccess;