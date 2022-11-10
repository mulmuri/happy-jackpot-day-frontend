import { Box, ButtonGroup } from "@mui/material";
import { useContext, useEffect } from "react";
import { columnInterface } from "../../../model/viewInterface";
import { withdrawalInterface } from "../../../model/mileageInterface";
import { BoxItem, TableStructure, TransparentButton } from "../../../components";
import WithdrawalManagerContext from "../../../contexts/WithdrawalManager";




const WithdrawalListTable = () => {

    const WithdrawalManager = useContext(WithdrawalManagerContext)
    const {
        withdrawalList,
        fetchWithdrawalList, acceptWithdrawalRequest, rejectWithdrawalRequest
    } = {...WithdrawalManager.state, ...WithdrawalManager.actions}

    const ActionButton = (reqno: number) => {
        return (
            <ButtonGroup>
                <TransparentButton onClick={() => {acceptWithdrawalRequest(reqno)}}>승락</TransparentButton>
                <TransparentButton onClick={() => {rejectWithdrawalRequest(reqno)}}>거절</TransparentButton>
            </ButtonGroup>
        )
    }

    const dataArray: withdrawalInterface[] = withdrawalList.map((item) => {
        item.component = ActionButton(item.reqno);
        return item;
    });

    const instructions: columnInterface[] = [
        {col: "ID",              pos: "left"},
        {col: "name",            pos: "left"},
        {col: "amount",          pos: "center"},
        {col: "accountBankName", pos: "right"},
        {col: "accountNumber",   pos: "right"},
    ];

    const headers: columnInterface[] = [
        {col: "아이디",  pos: "left"},
        {col: "이름",    pos: "left"},
        {col: "금액",    pos: "center"},
        {col: "은행",    pos: "right"},
        {col: "계좌번호", pos: "right"},
    ];

    useEffect(() => {
        fetchWithdrawalList();
    }, []);
    
    return (
        <BoxItem>
          <Box style={{width: "100%"}}>
            <TableStructure dataArray={dataArray} instructions={instructions} headers={headers}/>
          </Box>
        </BoxItem>
    )
}

export default WithdrawalListTable