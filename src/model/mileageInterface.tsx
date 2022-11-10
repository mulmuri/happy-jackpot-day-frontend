import { componentInterface } from "./viewInterface";
import { accountInterface, userInterface } from "./userInterface";

export interface mileageInterface {
    amount: number | string
}

export const defaultMileage = () : mileageInterface => {
    let mileage: mileageInterface = {
        amount: 0
    }
    return mileage
}


export interface mileageUpdateInterface extends userInterface, mileageInterface {}



export interface weeklyMileageInterface {
    ID: string;
    monday: number;
    tuesday: number;
    wensday: number;
    thursday: number;
    friday: number
}

export const defaultWeeklyMileage = () : weeklyMileageInterface => {
    let weeklyMileage: weeklyMileageInterface = {
        ID: "",
        monday: 0,
        tuesday: 0,
        wensday: 0,
        thursday: 0,
        friday: 0
    }
    return weeklyMileage
}



export interface dailyMileageInterface extends mileageInterface {
    weekday: "monday" | "tuesday" | "wensday" | "thursday" | "friday";
    component : JSX.Element | null;
}

export const weekdays: ("monday" | "tuesday" | "wensday" | "thursday" | "friday")[]  = ["monday", "tuesday", "wensday", "thursday", "friday"];



export interface friendsCountInterface extends mileageInterface {
    count: number | string;
    index: string;
}



export interface friendsInfoInterface extends userInterface, mileageInterface {}



export interface withdrawalInterface extends userInterface, mileageInterface, accountInterface, componentInterface {
    reqno: number;
}
