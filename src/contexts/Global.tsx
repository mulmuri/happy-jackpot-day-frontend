import { ChildrenProps, defaultError, errorInterface } from "../model/viewInterface"
import { AxiosError } from "axios";
import React, { createContext, useEffect, useState } from "react"
import axiosAPI from "../axiosapi";
import { authInterface, defaultAuth, defaultUserStatus, userInterface, userStatusInterface } from "../model/userInterface";
import { useNavigate } from "react-router-dom";




const GlobalContext = createContext({
    state: {
        authValues: defaultAuth(),
        error: defaultError(),
        user : defaultUserStatus(),
    },

    actions: {
        requestSignin: async () => {},
        requestSignout: async () => {},
        setError: (prop: errorInterface) => {},
        handleAuthChange: (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {},
        setUser: (value: userInterface) => {}
    }
})



const GlobalProvider = ({children}: ChildrenProps) => {

    const navigate = useNavigate();
    
    const [authValues, setAuthValues] = useState<authInterface>(defaultAuth());
    const [error, setError] = useState<errorInterface>(defaultError());

    const handleAuthChange = (prop: keyof authInterface) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthValues({ ...authValues, [prop]: event.target.value });
    };

    const [user, setUser] = useState<userStatusInterface>(defaultUserStatus());



    
    const requestSignin = async () => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/auth/signin",
                data: authValues
            });

            if (response.status === 200) {
                setUser({
                    name: "asdf",
                    status: "Admin",
                })
                //setUser({
                //    name: response.data.name,
                //    status: response.data.status
                //})
                navigate("/mileage");
            }

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);

            if (response.status === 401) {
                setError({
                    isError: true,
                    target: "PW",
                    message: "ID나 비밀번호가 올바르지 않습니다."
                });
            } else {
                navigate("/error/"+response.status);
            }
        }
    }

    const requestSignout = async () => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/auth/signout",
                data: authValues
            });

            if (response.status === 200) {
                navigate("/signin");
            }

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            navigate("/error/"+response.status);
        }
    }

    




    return (
        <GlobalContext.Provider value={{
            state: { error, authValues, user },
            actions: { setError, requestSignin, requestSignout, handleAuthChange, setUser }
        }}>{children}</GlobalContext.Provider>
    )
}

const GlobalConsumer = GlobalContext.Consumer;
export { GlobalProvider, GlobalConsumer};
export default GlobalContext;