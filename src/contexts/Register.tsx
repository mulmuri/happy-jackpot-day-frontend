import { ChildrenProps, defaultError, errorInterface } from "../model/viewInterface"
import { AxiosError } from "axios";
import React, { createContext, useState } from "react"
import axiosAPI from "../axiosapi";
import { authInterface, defaultRegister, registerInterface } from "../model/userInterface";
import { useNavigate } from "react-router-dom";



const RegisterContext = createContext({
    state: {
        registerValues : defaultRegister(),
        IdError : defaultError(),
        PwError : defaultError(),
        InfoError : defaultError(),
    },

    actions: {
        handleRegisterChange : (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {},
        setIdError : (prop: errorInterface) => {},
        setPwError : (prop: errorInterface) => {},
        setInfoError : (prop: errorInterface) => {},
        requestRegister : () => {},
        IdChecker : () => {},
        PwChecker : () => {},
        phoneNumberChecker : () => {},
        emailChecker : () => {},
    }
})



const RegisterProvider = ({children}: ChildrenProps) => {
    
    const [registerValues, setRegisterValues] = useState<registerInterface>(defaultRegister());
    const [IdError, setIdError] = useState<errorInterface>(defaultError());
    const [PwError, setPwError] = useState<errorInterface>(defaultError());
    const [InfoError, setInfoError] = useState<errorInterface>(defaultError());

    const handleRegisterChange = (prop: keyof authInterface) => (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(registerValues)
        setRegisterValues({ ...registerValues, [prop]: event.target.value });
    };
    
    const navigate = useNavigate();

    const requestRegister = async () => {
        if (IdError.isError || PwError.isError || InfoError) {
            return;
        }

        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/user/account/register/request",
                data: registerValues
            });

            if (response.status === 200) {
                navigate("/mileage");
            }

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
            console.log(response.status)
        }
    }

    const IdChecker = async () => {
        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/user/account/register/checkidvalid",
                data: registerValues
            });

            if (response.status === 200) {
                navigate("/mileage");
            }

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
        }
    }

    const PwChecker = () => {
        if (registerValues.PW !== registerValues.PWContrast) {
            setPwError({
                isError: true,
                target: "PWContrast",
                message: "비밀번호가 다릅니다"
            })
        }
    }

    const phoneNumberChecker = () => {
        if (registerValues.phoneNumber.length !== 11) {
            setInfoError({
                isError: true,
                target: "PhoneNumber",
                message: "연락처가 올바르지 않습니다"
            })
        }
    }

    const emailChecker = () => {
        let regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        if (regex.test(registerValues.email) === false) {
            setInfoError({
                isError: true,
                target: "email",
                message: "이메일 형식이 올바르지 않습니다"
            })
        }
    }

    return (
        <RegisterContext.Provider value={{
            state: { registerValues, IdError, PwError, InfoError },
            actions: { handleRegisterChange, requestRegister,
                setIdError, setPwError, setInfoError,
                IdChecker, PwChecker, phoneNumberChecker, emailChecker
            }
        }}>{children}</RegisterContext.Provider>
    )
}

const RegisterConsumer = RegisterContext.Consumer;
export { RegisterProvider, RegisterConsumer};
export default RegisterContext;