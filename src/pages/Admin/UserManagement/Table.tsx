import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { columnInterface } from "../../../model/viewInterface";
import { personalInfoInterface } from "../../../model/userInterface";
import { BoxItem, TableStructure } from "../../../components";
import ManagerContext from "../../../contexts/Manager";




const UserListTable = () => {

    const Manager = useContext(ManagerContext)
    const { userList, fetchUserList } = {...Manager.state, ...Manager.actions}

    const dataArray: personalInfoInterface[] = userList.map((item) => {
        return item;
    });

    const instructions: columnInterface[] = [
        {col: "ID",          pos: "left"},
        {col: "name",        pos: "left"},
        {col: "email",       pos: "center"},
        {col: "phoneNumber", pos: "center"},
        {col: "recommender", pos: "right"},
    ];

    const headers: columnInterface[] = [
        {col: "아이디",  pos: "left"},
        {col: "이름",    pos: "left"},
        {col: "이메일",  pos: "center"},
        {col: "전화번호", pos: "center"},
        {col: "추천인",  pos: "right"},
    ];

    useEffect(() => {
        fetchUserList();
    }, []);
    
    return (
        <BoxItem>
          <Box style={{width: "100%"}}>
            <TableStructure dataArray={dataArray} instructions={instructions} headers={headers}/>
          </Box>
        </BoxItem>
    )
}

export default UserListTable