import React from "react";

export interface ChildrenProps {
    children: JSX.Element | JSX.Element[];
};

export interface aosInterface {
    animation?: string;
    duration?: number;
};

export interface componentInterface {
    component: JSX.Element | undefined
}



export interface columnInterface {
    col: string;
    pos: "left" | "center" | "right";
}

export interface tableInfoInterface {
    dataArray:    any[];
    instructions: columnInterface[];
    headers?:     columnInterface[];
    divider?:     boolean;    
};


export interface titleInterface {
    title: string;
}

export interface scriptInterface {
    title?: string;
    content?: string | JSX.Element;
}



export interface errorInterface {
    isError: boolean;
    target: string;    
    message: string;
}

export const defaultError = () => {
    let error: errorInterface = {
        isError: false,
        target: "",
        message: "",
    }
    return error
}

export interface formInterface {
    formType: string;
    label: string;
    error: errorInterface;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleCheck?: (event: React.FocusEvent<HTMLInputElement>) => void;
}


export interface QAContentInterface {
    question: string,
    answer: string
}


export interface ButtonInterface {
    children?: JSX.Element | string;
    path?: string;
    icon?: JSX.Element;
}


export interface LogoInterface {
    logo: string;
    color: string;
}

export interface wrapperInterface {
    top?: string;
    bottom?: string;
    height?: string;
    children?: JSX.Element | JSX.Element[];
}

export interface alertInterface {
    open: boolean;
    message: string;
}

export const defaultAlart = () => {
    let snack: alertInterface = {
        open: false,
        message: ""
    }
    return snack
}

export const copyObj = (obj: any) => {
    let copy: any = {};
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
        }
    }
    return copy
}