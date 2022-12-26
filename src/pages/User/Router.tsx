import { Navigate, Route, Routes } from "react-router-dom"
import { MainBody, MainHeader, MemberFooter } from "../../components"
import { GlobalProvider } from "../../contexts/Global"
import ErrorRouter from "../Common/Error"
import Friend from "./Friend/Main"
import Introducion from "./Introduction/Main"
import Mileage from "./Mileage/Main"
import MileageRequest from "./MileageRequest/Main"
import MileageRequestSuccess from "./MileageRequestSuccess/Main"
import MileageWeek from "./MileageWeek/Main"
import Profile from "./Profile/Main"
import Register from "./Register/Main"
import RegisterSuccess from "./RegisterSuccess/Main"




const UserRouter = () => {
    return (
      <>
        <GlobalProvider>
          <MainHeader/>
        </GlobalProvider>
        <MainBody>
          <Routes>
            <Route path="mileage">
              <Route path=""                element={<Mileage/>}/>
              <Route path="daily"           element={<MileageWeek/>}/>
              <Route path="request"         element={<MileageRequest/>}/>
              <Route path="request/success" element={<MileageRequestSuccess/>}/>
            </Route>
              <Route path="friend"          element={<Friend/>}/>
              <Route path="introducion"     element={<Introducion/>}/>
              <Route path="register">
                <Route path=""              element={<Register />}/>
                <Route path="success"       element={<RegisterSuccess />}/>
              </Route>
              <Route path="profile"         element={<Profile/>}/>
            <Route path="error/*"           element={<ErrorRouter root="user"/>}/>
            <Route path=""                  element={<Navigate replace to="mileage"/>} />
          </Routes>
        </MainBody>
        <MemberFooter/>
      </>
    )
}

export default UserRouter