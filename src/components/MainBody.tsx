import { Fragment } from "react";
import { ChildrenProps } from "../model/viewInterface";


const MainBody = ({children}: ChildrenProps) => {
    return <Fragment> {children} </Fragment>
}

export default MainBody