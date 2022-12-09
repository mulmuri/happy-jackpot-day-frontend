import { ChildrenProps, defaultError, errorInterface } from "../model/viewInterface"
import { AxiosError } from "axios";
import React, { createContext, useEffect, useState } from "react"
import axiosAPI from "../axiosapi";
import { defaultRegister, registerInterface } from "../model/userInterface";
import { useNavigate } from "react-router-dom";
import { checkEmailFormat, checkIDFormat, checkPhoneFormat, checkPWFormat } from "../util/formatter";



const RegisterContext = createContext({
    state: {
        registerValues : defaultRegister(),
        IdError : defaultError(),
        PwError : defaultError(),
        emailError : defaultError(),
        phoneError : defaultError()
    },

    actions: {
        handleRegisterChange : (prop: any, func?: () => void) => (event: React.ChangeEvent<HTMLInputElement>) : void => {},

        setIdError : (prop: errorInterface) => {},
        setPwError : (prop: errorInterface) => {},
        setEmailError : (prop: errorInterface) => {},
        setPhoneError : (prop: errorInterface) => {},

        requestRegister : () => {},
        IdCheckerAdvance : () => {},
        IdChecker : () : boolean => {return false},
        PwChecker : () : boolean => {return false},
        phoneNumberChecker : () : boolean => {return false},
        emailChecker : () : boolean => {return false},
    }
})



const RegisterProvider = ({children}: ChildrenProps) => {

    const [registerValues, setRegisterValues] = useState<registerInterface>(defaultRegister());
    const [IdNotOverlap, setIdNotOverlap] = useState<boolean>(true);
    const [IdError, setIdError] = useState<errorInterface>(defaultError());
    const [PwError, setPwError] = useState<errorInterface>(defaultError());
    const [emailError, setEmailError] = useState<errorInterface>(defaultError());
    const [phoneError, setPhoneError] = useState<errorInterface>(defaultError());

    const handleRegisterChange = (prop: keyof registerInterface, func?: () => void) => (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (func !== undefined) func();
        setRegisterValues({ ...registerValues, [prop]: event.target.value});
    };
    
    const navigate = useNavigate();

    const requestRegister = async () => {
        const flag = IdError.isError || PwError.isError || emailError.isError || phoneError.isError;
        if (flag) {
            return
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

    const IdCheckerAdvance = async () => {

        try {
            const response = await axiosAPI({
                method: "POST",
                url: "/user/account/register/checkidvalid",
                data: registerValues
            });
            setIdNotOverlap(response.data.flag);

        } catch (error) {
            const { response } = error as AxiosError;
            if (typeof response === 'undefined') throw (error);
        }

        IdChecker();
    }


    const IdChecker = () => {

        const flagNotNull = (registerValues.ID !== undefined && registerValues.ID !== "");
        const flagFormat = checkIDFormat(registerValues.ID);
        const flagNotOverlap = IdNotOverlap;
        const flag = flagNotOverlap && flagNotNull && flagFormat;

        if (!flagNotNull) {
            setIdError({
                isError: true,
                target: "ID",
                message: "ID를 입력해주세요."
            });
        } else if (!flagFormat) {
            setIdError({
                isError: true,
                target: "ID",
                message: "아이디는 6글자 이상의 영문자 또는 숫자의 조합입니다."
            });
        } else if (!flagNotOverlap) {
            setIdError({
                isError: true,
                target: "ID",
                message: "중복된 ID 가 존재합니다."
            });
            console.log("!!!!overlap")
        } else {
            setIdError({
                ...IdError,
                isError: false
            })
        }

        return flag
    }

    useEffect(() => {
        if (registerValues.ID !== "") IdChecker()
    }, [IdNotOverlap])

    

    const PwChecker = () => {
        const flagEquals = (registerValues.PW === registerValues.PWContrast);
        const flagNotNull = (registerValues.PW !== undefined && registerValues.PW !== "");
        const flagFormat = checkPWFormat(registerValues.PW);
        const flag = flagEquals && flagNotNull && flagFormat;

        if (!flagNotNull) {
            setPwError({
                isError: true,
                target: "PWContrast",
                message: "비밀번호를 입력해주세요."
            })
        } else if (!flagEquals) {
            setPwError({
                isError: true,
                target: "PWContrast",
                message: "비밀번호가 다릅니다"
            })
        } else if (!flagFormat) {
            setPwError({
                isError: true,
                target: "PWContrast",
                message: "비밀번호는 8자리 이상 숫자와 소문자의 조합입니다."
            })
        } else {
            setPwError({
                ...PwError,
                isError: false
            })
        }

        return flag;
    }

    const phoneNumberChecker = () => {

        const flagNotNull = (registerValues.phoneNumber !== "");
        const flagFormat = checkPhoneFormat(registerValues.phoneNumber);
        const flag = flagNotNull && flagFormat;

        if (!flagNotNull) {
            setPhoneError({
                isError: true,
                target: "phoneNumber",
                message: "연락처를 입력해주세요."
            })
        } else if (!flagFormat) {
            setPhoneError({
                isError: true,
                target: "phoneNumber",
                message: "숫자 11자리로 입력해주세요."
            })
        } else {
            setPhoneError({
                ...phoneError,
                isError: false
            })
        }

        return flag
    }

    const emailChecker = () => {
        const flagNotNull = (registerValues.email !== "")
        const flagFormat = checkEmailFormat(registerValues.email);
        const flag = flagNotNull && flagFormat;

        if (!flagNotNull) {
            setEmailError({
                isError: true,
                target: "email",
                message: "이메일을 입력해주세요."
            })
        } else if (!flagFormat) {
            setEmailError({
                isError: true,
                target: "email",
                message: "이메일 형식이 올바르지 않습니다"
            })
        } else {
            setEmailError({
                ...emailError,
                isError: false
            })
        }

        return flag
    }

    return (
        <RegisterContext.Provider value={{
            state: { registerValues, IdError, PwError, emailError, phoneError },
            actions: { handleRegisterChange, requestRegister,
                setIdError, setPwError, setEmailError, setPhoneError,
                IdChecker, IdCheckerAdvance, PwChecker, phoneNumberChecker, emailChecker
            }
        }}>{children}</RegisterContext.Provider>
    )
}

const RegisterConsumer = RegisterContext.Consumer;
export { RegisterProvider, RegisterConsumer};
export default RegisterContext;