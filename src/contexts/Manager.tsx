import { ChildrenProps } from "../model/viewInterface"
import { AxiosError } from "axios";
import { createContext, useState } from "react"
import axiosAPI from "../axiosapi";
import {personalInfoInterface, registerManagerInterface} from "../model/userInterface";



const ManagerContext = createContext({
    state: {
        registerList : new Array<registerManagerInterface>(),
        userList : new Array<personalInfoInterface>()
    },

    actions: {
        fetchRegisterList : () => {},
        acceptRegisterRequest : (userid: string) => {},
        rejectRegisterRequest : (userid: string) => {},
        fetchUserList : () => {}
    }
})



const ManagerProvider = ({children}: ChildrenProps) => {
    const [registerList, setRegisterList] = useState<registerManagerInterface[]>([]);
    const [userList, setUserList] = useState<personalInfoInterface[]>([]);


    const fetchRegisterList = async () => {
        try {
            const response = await axiosAPI({
                method: "GET",
                url: "/admin/account/registration/requests",
            });
            setRegisterList(response.data)

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            console.log(response.status)
        }
    }

    const acceptRegisterRequest = async (userid: string) => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/admin/account/registration/response",
                params: {
                    accept: "true",
                    userid: userid
                }
            });
            setRegisterList(response.data)

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            console.log(response.status)
        }
    }

    const rejectRegisterRequest = async (userid: string) => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/admin/account/registration/response",
                params: {
                    accept: "false",
                    userid: userid
                }
            });
            setRegisterList(response.data)

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            console.log(response.status)
        }
    }

    const fetchUserList = async () => {
        try {
            const response = await axiosAPI({
                method: "GET",
                url: "/admin/account/registration/requests",
            });
            setUserList(response.data)

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            console.log(response.status)
        }
    }
    

    return (
        <ManagerContext.Provider value={{
            state: { registerList, userList },
            actions: { fetchRegisterList, acceptRegisterRequest, rejectRegisterRequest, fetchUserList}
        }}>{children}</ManagerContext.Provider>
    )
}

const ManagerConsumer = ManagerContext.Consumer;
export { ManagerProvider, ManagerConsumer};
export default ManagerContext;