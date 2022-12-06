import { ChildrenProps } from "../model/viewInterface"
import { AxiosError } from "axios";
import { createContext, useState } from "react"
import axiosAPI from "../axiosapi";
import { mileageUpdateInterface } from "../model/mileageInterface";



const MileageManagerContext = createContext({
    state: {
        mileageUpdateList : new Array<mileageUpdateInterface>(),
    },

    actions: {
        encodeMileageUpdate : () => {},
        sendMileageUpdate : () => {}
    }
})



const MileageManagerProvider = ({children}: ChildrenProps) => {

    const [mileageUpdateList, setMileageUpdateList] = useState<mileageUpdateInterface[]>([]);

    const encodeMileageUpdate = async () => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/admin/account/mileage/daily/extract"
            });
            setMileageUpdateList(response.data);

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            console.log(response.status)
        }
    }

    const sendMileageUpdate = async () => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/admin/account/mileage/daily/execute",
                data: mileageUpdateList
            });
            setMileageUpdateList(response.data);

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            console.log(response.status)
        }
    }



    return (
        <MileageManagerContext.Provider value={{
            state: { mileageUpdateList },
            actions: { encodeMileageUpdate, sendMileageUpdate }
        }}>{children}</MileageManagerContext.Provider>
    )
}

const MileageManagerConsumer = MileageManagerContext.Consumer;
export { MileageManagerProvider, MileageManagerConsumer};
export default MileageManagerContext;