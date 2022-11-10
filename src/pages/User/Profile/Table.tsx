import { TableStructure, DividerItem } from "../../../components"
import { useContext } from "react";
import MemberContext from "../../../contexts/Member";
import { columnInterface } from "../../../model/viewInterface";
import { Box } from "@mui/material";




export const MainInfoSection = () => {

    const Member = useContext(MemberContext)
    const { profile } = Member.state;

    const dataArray = [
        {key: "아이디", value: profile["ID"]},
        {key: "이름", value: profile["name"]},
        {key: "이메일", value: profile["email"]},
        {key: "전화번호", value: profile["phoneNumber"]},
    ]

    const instructions: columnInterface[] =  [
        {col: "key",   pos: "left"},
        {col: "value", pos: "right"}
    ];

    return (
      <Box>
        <DividerItem title="기본 정보"/>
        <TableStructure dataArray={dataArray} instructions={instructions} divider={false}/>
      </Box>
    )
}


export const AccountSection = () => {

    const Member = useContext(MemberContext)
    const { profile } = Member.state;

    const dataArray = [
        {key: "은행 이름", value: profile["accountBankName"]},
        {key: "계좌 번호", value: profile["accountNumber"]},
    ]

    const instructions: columnInterface[] =  [
        {col: "key",   pos: "left"},
        {col: "value", pos: "right"}
    ];

    return (
      <Box>
        <DividerItem title="계좌 정보"/>
        <TableStructure dataArray={dataArray} instructions={instructions} divider={false}/>
      </Box>
    )
}


export const RecommenderSection = () => {

    const Member = useContext(MemberContext)
    const { profile } = Member.state;

    const dataArray = [
        {key: "추천인", value: profile["recommender"]},
    ]

    const instructions: columnInterface[] =  [
        {col: "key",   pos: "left"},
        {col: "value", pos: "right"}
    ];

    return (
      <Box>
        <DividerItem title="추천인 정보"/>
        <TableStructure dataArray={dataArray} instructions={instructions} divider={false}/>
      </Box>
    )
}
  

