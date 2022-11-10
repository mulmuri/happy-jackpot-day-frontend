import { Box, ButtonGroup } from "@mui/material";
import { useContext, useEffect } from "react";
import { columnInterface } from "../../../model/viewInterface";
import { registerManagerInterface } from "../../../model/userInterface";
import { BoxItem, TableStructure, TransparentButton } from "../../../components";
import ManagerContext from "../../../contexts/Manager";



const RegisterListTable = () => {

    const Manager = useContext(ManagerContext)
    const { registerList, fetchRegisterList, acceptRegisterRequest, rejectRegisterRequest } = {...Manager.state, ...Manager.actions}

    const ActionButton = (userid: string) => {
        return (
            <ButtonGroup>
                <TransparentButton onClick={() => {acceptRegisterRequest(userid)}}>승락</TransparentButton>
                <TransparentButton onClick={() => {rejectRegisterRequest(userid)}}>거절</TransparentButton>
            </ButtonGroup>
        )
    }

    const dataArray: registerManagerInterface[] = registerList.map((item) => {
        item.component = ActionButton(item.ID);
        return item;
    });

    const instructions: columnInterface[] = [
        {col: "ID",              pos: "left"},
        {col: "name",            pos: "left"},
        {col: "email",           pos: "center"},
        {col: "phoneNumber",     pos: "center"},
        {col: "accountBankName", pos: "right"},
        {col: "accountNumber",   pos: "right"},
        {col: "recommender",     pos: "right"},
    ];

    const headers: columnInterface[] = [
        {col: "아이디",  pos: "left"},
        {col: "이름",    pos: "left"},
        {col: "이메일",  pos: "center"},
        {col: "전화번호", pos: "center"},
        {col: "은행",    pos: "right"},
        {col: "계좌번호", pos: "right"},
        {col: "추천인",  pos: "right"},
    ];

    useEffect(() => {
        fetchRegisterList();
    }, []);
    
    return (
        <BoxItem>
          <Box style={{width: "100%"}}>
            <TableStructure dataArray={dataArray} instructions={instructions} headers={headers}/>
          </Box>
        </BoxItem>
    )
}

export default RegisterListTable