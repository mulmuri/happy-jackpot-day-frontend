import { PageFrame, LogoSection, MessageItem } from "../../../components"
import { scriptInterface } from "../../../model/viewInterface";



const SigninSuccess = () => {
    const message: scriptInterface = {
        title: "로그인 성공",
        content: "운영자의 승인을 대기중이며 \n 이후 이용 가능합니다."
    }

    return (
        <PageFrame>
            <LogoSection logo="Success" color="success.main"/>
            <MessageItem title={message.title} content={message.content}/>
        </PageFrame>
    )
};

export default SigninSuccess;