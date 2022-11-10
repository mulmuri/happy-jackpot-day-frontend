import { ChildrenProps, defaultAlart, alertInterface } from "../model/viewInterface"
import { createContext, useState } from "react"



const SnackContext = createContext({
    state: {
        snackState : defaultAlart(),
    },

    actions: {
        handleOpen : (message: string) => {},
        handleClose : () => {}
    }
})



const SnackProvider = ({children}: ChildrenProps) => {


    const [snackState, setSnackState] = useState<alertInterface>(defaultAlart());

    const handleOpen = (message: string) => {
        if (!snackState.open) {
            setTimeout(() => setSnackState({
                ...snackState,
                open: true,
            }), 200)
        }
    
        setSnackState({
            message: message,
            open: true
        });
    }

    const handleClose = () => {
        setSnackState({
            ...snackState,
            open: false
        })
    }



    return (
        <SnackContext.Provider value={{
            state: { snackState },
            actions: { handleOpen, handleClose }
        }}>{children}</SnackContext.Provider>
    )
}

const SnackConsumer = SnackContext.Consumer;
export { SnackProvider, SnackConsumer};
export default SnackContext;