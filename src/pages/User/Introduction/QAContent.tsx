import { Typography } from "@mui/material";
import { Fragment } from "react";
import { BoxItem } from "../../../components";
import { scriptInterface } from "../../../model/viewInterface";



const QAContent = () => {

    const QAContent: scriptInterface[] = 
    [
        {
            title: `마일리지는 어떻게 적립되나요?`,
            content: `매일 00시에 회원들의 매매 결과를 계산하여, 자신이 직간접적으로 추천한 회원들의 매매 수익의 합 중 특정 퍼센테이지만큼 마일리지로 적립됩니다.`
        },
        {
            title: `내 마일리지는 어떻게 확인할 수 있나요?`,
            content: `메인 화면 상단에 보이는 마일리지는 누적 마일리지, 하단 표에서는 차수별 주간 마일리지를 확인하실 수 있으며, 주간 마일리지를 클릭하여 일별 획득 마일리지를 볼 수 있습니다.`
        },
        {
            title: `친구 마일리지도 확인할 수 있나요?`,
            content: `하단 두 번째 버튼을 누르면 자신이 추천한 친구들의 수익을 확인할 수 있습니다.`
        },
        {
            title: `마일리지는 어떻게 사용하나요?`,
            content: `마일리지는 출금 요청을 통해 돈으로 입금받으실 수 있으며, 매주 마일리지는 초기화됩니다.`
        },
        {
            title: `앱 관련 문의는 어떻게 하나요?`,
            content: `앱 관련 문의, 오류 보고, 건의 사항 등은 darkblue31415@gmail.com 으로 보내주시면 감사하겠습니다.`
        },
        {
            title: `친구 추천은 어떻게 하나요?`,
            content: `아래 버튼을 클릭하여 추천인 회원가입을 할 수 있습니다. 회원 가입은 오로지 추천인의 화면에서만 할 수 있으며, 관리자의 승인 후 개인 기기에서 로그인할 수 있습니다.`
        },
    ]

    return (
        <Fragment>
        {QAContent.map((item, idx) => (
            <BoxItem key={idx} sx={{pd:2, pt:2}}>
              <Typography variant="subtitle1" color="text.secondary">
                Q. {item.title}
              </Typography>
              <Typography variant="subtitle2" component="p" color="text.primary" sx={{ml: 2.7}}>
                {item.content}
              </Typography>
            </BoxItem>
        ))}
        </Fragment>
    )
}

export default QAContent;