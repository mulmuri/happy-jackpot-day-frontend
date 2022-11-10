import { ChildrenProps } from "../model/viewInterface"
import { createContext, useState } from "react"
import { defaultPersonalInfo, personalInfoInterface, registerInterface } from "../model/userInterface";
import axiosAPI from "../axiosapi";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";



const MemberContext = createContext({
    state: {
        profile: defaultPersonalInfo(),
        IdValid: true
    },
    actions: {
        fetchProfile : () => {},
        handleRegister: (data: registerInterface) => {},
        checkIdValid: (ID: string) => {},
    }
})



const MemberProvider = ({children}: ChildrenProps) => {

    const [profile, setProfile] = useState<personalInfoInterface>(defaultPersonalInfo());
    const [IdValid, setIdValid] = useState<boolean>(true);
    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const response = await axiosAPI({
                method: "GET",
                url: "/user/account/personalinfo"
            });
            setProfile(response.data);

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
        }
    };

    const handleRegister = async (data: registerInterface) => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/user/account/register",
                data: data
            });

            if (response.status === 200) {
                navigate("/register/success")
            } 

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            navigate("/error/"+response.status);
        }
    };

    const checkIdValid = async (ID: string) => {
        try {
            const response = await axiosAPI({
                method: "GET",
                url: "/user/account/personalinfo",
                data: {
                    ID: ID
                }
            });
            setIdValid((response.data === "true"));

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            navigate("/error/"+response.status);
        }
    };



    return (
        <MemberContext.Provider value={{
            state: { profile, IdValid },
            actions: { fetchProfile, handleRegister, checkIdValid }
        }}>{children}</MemberContext.Provider>
    )
}

const MemberConsumer = MemberContext.Consumer;
export { MemberProvider, MemberConsumer};
export default MemberContext;