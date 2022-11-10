import { useNavigate } from 'react-router-dom';
import { FitButton, PageFrame, LogoSection, MessageItem } from '../../components';
import { scriptInterface } from '../../model/viewInterface';



interface ErrorStatusInterfaces {
    [key: string]: {
        status: number,
        subTitle: string
    }
}

const ErrorStatus: ErrorStatusInterfaces =
{
    BadRequest: {
        status: 400,
        subTitle: `Sorry, bad request.`
    },
    Unauthorized: {
        status: 401,
        subTitle: `Sorry, you are not authorized to access this page.`
    },
    Forbidden: {
        status: 403,
        subTitle: `Sorry, you are not authorized to access this page.`
    },
    NotFound: {
        status: 404,
        subTitle: `Sorry, the page you visited does not exist.`
    },
    InternalServerError: {
        status: 500,
        subTitle: `Sorry, server is down.`
    },
    GatewayTimeout: {
        status: 504,
        subTitle: `Sorry, server is not responsing`
    }
}



const ErrorPage = (status: number) => {

    const navigate = useNavigate();

    const message: scriptInterface = {
        title: status + " " + getErrorStatus(status),
        content: ErrorStatus[getErrorStatus(status)].subTitle
    }

    return (
      <PageFrame>
        <LogoSection logo="Warning" color="warning.main"/>
        <MessageItem title={message.title} content={message.content}/>
        <FitButton onClick={() => navigate("/")}>홈으로 돌아가기</FitButton>
      </PageFrame>
    )
}

export const getErrorStatus = (errorNo: number) => {
    switch (errorNo) {
        case 400: return "NotFound";
        case 401: return "Unauthorized";
        case 403: return "Forbidden";
        case 404: return "BadRequest";
        case 500: return "InternalServerError";
        case 504: return "GatewayTimeout";
        default: return "NotFound";
    }
}


export const BadRequest = () => ErrorPage(404);
export const Unauthorized = () => ErrorPage(401);
export const Forbidden = () => ErrorPage(403);
export const NotFound = () => ErrorPage(400);
export const InternalServerError = () => ErrorPage(500);
export const GatewayTimeout = () => ErrorPage(504);