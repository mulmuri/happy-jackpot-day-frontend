import { Route, Routes } from "react-router-dom"
import { Management, MileageRequestManagement, MileageUpdateManagement, RegisterRequestManagement, UserManagement } from "."
import { MainBody, MainHeader, MemberFooter } from "../../components"
import { GlobalProvider } from "../../contexts/Global"
import { Register, RegisterSuccess } from "../User"





const ManagerRouter = () => {
    return (
      <>
        <GlobalProvider>
          <MainHeader/>
        </GlobalProvider>
        <MainBody>
          <Routes>
            <Route path=""                        element={<Management/>}/>
            <Route path="mileage-request-status"  element={<MileageRequestManagement/>}/>
            <Route path="mileage-update"          element={<MileageUpdateManagement/>}/>
            <Route path="user"                    element={<UserManagement/>}/>
            <Route path="register-request-status" element={<RegisterRequestManagement/>}/>
            <Route path="register">
              <Route path=""                      element={<Register/>}/>
              <Route path="success"               element={<RegisterSuccess/>}/>
            </Route>
          </Routes>
        </MainBody>
        <MemberFooter/>
      </>
    )
}

export default ManagerRouter