import { Route, Routes } from "react-router-dom"
import { AwaterFooter, MainBody, MainHeader } from "../../components"
import { GlobalProvider } from "../../contexts/Global"
import Signin from "./Signin/Main"
import SigninSuccess from "./SigninSuccess/Main"



const SigninRouter = () => {
    return (
      <>
        <GlobalProvider>
          <MainHeader/>
        </GlobalProvider>
        <MainBody>
          <Routes>
            <Route path=""        element={<Signin/>}/>
            <Route path="success" element={<SigninSuccess/>}/>
          </Routes>
        </MainBody>
        <AwaterFooter/>
      </>
    )
}

export default SigninRouter