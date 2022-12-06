import { ChildrenProps } from "../model/viewInterface"
import { AxiosError } from "axios";
import { createContext, useState } from "react"
import axiosAPI from "../axiosapi";
import { withdrawalInterface } from "../model/mileageInterface";



const WithdrawalManagerContext = createContext({
    state: {
        withdrawalList : new Array<withdrawalInterface>(),
    },

    actions: {
        fetchWithdrawalList : () => {},
        acceptWithdrawalRequest : (reqno: number) => {},
        rejectWithdrawalRequest : (reqno: number) => {},
    }
})



const WithdrawalManagerProvider = ({children}: ChildrenProps) => {
    const [withdrawalList, setMileageReqList] = useState<withdrawalInterface[]>([]);


    const fetchWithdrawalList = async () => {
        try {
            const response = await axiosAPI({
                method: "GET",
                url: "/admin/account/mileage/withdrawal/requests"
            });
            setMileageReqList(response.data)

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            console.log(response.status)
        }
    }

    const acceptWithdrawalRequest = async (userid: number) => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/admin/account/mileage/withdrawal/response",
                params: {
                    accept: "true",
                    userid: userid
                }
            });
            setMileageReqList(response.data)

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            console.log(response.status)
        }
    }

    const rejectWithdrawalRequest = async (userid: number) => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/admin/account/mileage/withdrawal/response",
                params: {
                    accept: "false",
                    userid: userid
                }
            });
            setMileageReqList(response.data)

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            console.log(response.status)
        }
    }

    

    return (
        <WithdrawalManagerContext.Provider value={{
            state: { withdrawalList },
            actions: { fetchWithdrawalList, acceptWithdrawalRequest, rejectWithdrawalRequest}
        }}>{children}</WithdrawalManagerContext.Provider>
    )
}

const WithdrawalManagerConsumer = WithdrawalManagerContext.Consumer;
export { WithdrawalManagerProvider, WithdrawalManagerConsumer};
export default WithdrawalManagerContext;