import { Route, Routes, useNavigate } from 'react-router-dom';
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



const ErrorPage = (status: number, root: string) => {

    const navigate = useNavigate();

    const message: scriptInterface = {
        title: status + " " + getErrorStatus(status),
        content: ErrorStatus[getErrorStatus(status)].subTitle
    }

    return (
      <PageFrame>
        <LogoSection logo="Warning" color="warning.main"/>
        <MessageItem title={message.title} content={message.content}/>
        <FitButton onClick={() => navigate(`${root}/`)}>홈으로 돌아가기</FitButton>
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


export const BadRequest          = ({root}: {root: string}) => ErrorPage(404, root);
export const Unauthorized        = ({root}: {root: string}) => ErrorPage(401, root);
export const Forbidden           = ({root}: {root: string}) => ErrorPage(403, root);
export const NotFound            = ({root}: {root: string}) => ErrorPage(400, root);
export const InternalServerError = ({root}: {root: string}) => ErrorPage(500, root);
export const GatewayTimeout      = ({root}: {root: string}) => ErrorPage(504, root);



const ErrorRouter = ({root}: {root?: string}) => {
    if (root === undefined) root = "";

    return (
      <Routes>
        <Route path="400" element={<NotFound            root={root}/>}/>
        <Route path="404" element={<BadRequest          root={root}/>}/>
        <Route path="401" element={<Unauthorized        root={root}/>}/>
        <Route path="403" element={<Forbidden           root={root}/>}/>
        <Route path="500" element={<InternalServerError root={root}/>}/>
        <Route path="504" element={<GatewayTimeout      root={root}/>}/>
      </Routes>
    )
}

export default ErrorRouter