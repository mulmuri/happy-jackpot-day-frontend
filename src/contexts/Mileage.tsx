import { createContext, useState } from "react"
import { AxiosError } from "axios";
import axiosAPI from "../axiosapi";
import { mileageInterface, defaultMileage, weeklyMileageInterface, defaultWeeklyMileage, friendsCountInterface, friendsInfoInterface, } from "../model/mileageInterface"
import { ChildrenProps } from "../model/viewInterface"
import { useNavigate } from "react-router-dom";



const MileageContext = createContext({

    state: {
        mileage: defaultMileage(),
        weeklyMileage: defaultWeeklyMileage(),
        friendsCount: new Array<friendsCountInterface>(),
        friendsInfo: new Array<friendsInfoInterface>()
    },

    actions: {
        fetchMileage : () => {},
        fetchWeeklyMileage : () => {},
        fetchFriendsCount : () => {},
        fetchFriendsInfo : () => {},
        saveDailyMileage : (daytype: string) => {},
        withdrawalRequest : (amount: number) => {}
    }
})



const MileageProvider = ({children}: ChildrenProps) => {

    const [mileage, setMileage] = useState<mileageInterface>(defaultMileage());
    const [weeklyMileage, setWeeklyMileage] = useState<weeklyMileageInterface>(defaultWeeklyMileage());
    const [friendsCount, setFriendsCount] = useState<friendsCountInterface[]>([]);
    const [friendsInfo, setFriendsInfo] = useState<friendsInfoInterface[]>([]);

    const navigate = useNavigate();

    const fetchMileage = async () => {
        try {
            const response = await axiosAPI({
                method: "GET",
                url: "/user/mileage/saved"
            });
            setMileage(response.data);

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            navigate("/error/"+response.status);
        }
    };

    const fetchWeeklyMileage = async () => {
        try {
            const response = await axiosAPI({
                method: "GET",
                url: "/user/mileage/weekly"
            });
            setWeeklyMileage(response.data);

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            navigate("/error/"+response.status);
        }
    };

    const fetchFriendsCount = async () => {
        try {
            const response = await axiosAPI({
                method: "GET",
                url: "/user/mileage/friend/bydegree"
            });
            setFriendsCount(response.data);

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            navigate("/error/"+response.status);
        }
    };

    const fetchFriendsInfo = async () => {
        try {
            const response = await axiosAPI({
                method: "GET",
                url: "/user/mileage/friend/directly"
            });
            setFriendsInfo(response.data);

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            navigate("/error/"+response.status);
        }
    };

    const saveDailyMileage = async (weekday: string) => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/user/mileage/save",
                params: {
                    weekday: weekday
                }
            });
            setWeeklyMileage(response.data)

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            navigate("/error/"+response.status);
        }
    }

    const withdrawalRequest = async (amount: number) => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/user/mileage/withdrawal/request",
                data: {
                    amount: amount
                }
            });
            setWeeklyMileage(response.data)

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            navigate("/error/"+response.status);
        }
    }



    return (
        <MileageContext.Provider value={{
            state: {mileage, weeklyMileage, friendsCount, friendsInfo},
            actions: {fetchMileage, fetchWeeklyMileage, fetchFriendsCount, fetchFriendsInfo, saveDailyMileage, withdrawalRequest}
        }}>{children}</MileageContext.Provider>
    )
}



const MileageConsumer = MileageContext.Consumer;
export { MileageProvider, MileageConsumer};
export default MileageContext;