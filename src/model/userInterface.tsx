import { componentInterface } from "./viewInterface";

export interface userStatusInterface {
    name: string;
    status?: string;
}

export const defaultUserStatus = () : userStatusInterface => {
    let user: userStatusInterface = {
        name: "",
        status: ""
    }
    return user
}


export interface authInterface {
    ID: string;
    PW: string;
    PWContrast?: string;
}

export const defaultAuth = () : authInterface => {
    let auth: authInterface = {
        ID: "",
        PW: ""
    }
    return auth
}


export interface userInterface {
    ID: string;
    name: string;    
}


export interface accountInterface {
    accountBankName: string;
    accountNumber: string;
}

export interface personalInfoInterface extends userInterface, accountInterface {
    email: string;
    phoneNumber: string;
    recommender: string;
}

export const defaultPersonalInfo = () : personalInfoInterface => {
    let personalInfo: personalInfoInterface = {
        ID: '',
        name: '',
        email: '',
        phoneNumber: '',
        accountBankName: '',
        accountNumber: '',
        recommender: '',
    }
    return personalInfo
}



export interface registerManagerInterface extends personalInfoInterface, componentInterface {}



export interface registerInterface extends personalInfoInterface, authInterface {}

export const defaultRegister = () : registerInterface => {
    let register: registerInterface = {
        ID: '',
        PW: '',
        PWContrast: '',
        name: '',
        email: '',
        phoneNumber: '',
        accountBankName: '',
        accountNumber: '',
        recommender: '',
    }
    return register
}