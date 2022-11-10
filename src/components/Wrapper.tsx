import { wrapperInterface } from "../model/viewInterface";
import WhiteSpace from "./WhiteSpace";



const Wrapper = ({top, bottom, children}: wrapperInterface) => {
    return (
      <>
        <WhiteSpace height={top}/>
        {children}
        <WhiteSpace height={bottom}/>
      </>
    )
}

export default Wrapper;