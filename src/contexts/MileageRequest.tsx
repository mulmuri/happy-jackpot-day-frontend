import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { defaultMileage } from "../model/mileageInterface";
import { ChildrenProps } from "../model/viewInterface";
import MileageContext from "./Mileage";

const MileageRequestContext = createContext({
    state: {
        mileage: defaultMileage(),
        isMileageReqError: false,
        mileageReq: '',
    },

    actions: {
        handlePanelClick: (val: string) => {},
        checkExcess: (req: string | number, val: string | number): any => {}
    }
});



const mileageReqReducer = (state: string, action: string) => {

    switch (action) {
        case '<-':
            return (state !== '') ? state.slice(0, -1) : state;
        case '0':
            return (state !== '') ? state + '0' : state;
        case '00':
            return (state !== '') ? state + '00' : state;
        default:
            return state + action;
    }
}



const MileageRequestProvider = ({children}: ChildrenProps) => {

    const [isMileageReqError, setIsMileageReqError] = useState(false);
    const [mileageReq, setMileageReq] = useReducer(mileageReqReducer, '');

    const { mileage, fetchMileage } = {...useContext(MileageContext).state, ...useContext(MileageContext).actions};

    const checkExcess = (mileageReq: string | number, mileageNow: string | number) => {
        return (Number(mileageReq) > Number(mileageNow)) ? true : false;
    }

    const handlePanelClick = (val: string) => {
        setMileageReq(val);

        setIsMileageReqError(checkExcess(mileageReqReducer(mileageReq, val), mileage.amount));
    }

    useEffect(() => {
        fetchMileage();
    }, [])



    return (
        <MileageRequestContext.Provider value={{
            state: { mileage, isMileageReqError, mileageReq},
            actions: {handlePanelClick, checkExcess}
        }}>{children}</MileageRequestContext.Provider>
    )
}

const MileageRequestConsumer = MileageRequestContext.Consumer;
export { MileageRequestProvider, MileageRequestConsumer };
export default MileageRequestContext;

