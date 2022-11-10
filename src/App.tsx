import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { ViewFrame, MainHeader, MainBody, MainFooter } from "./components";
import { Introducion, Mileage, MileageRequest, MileageRequestSuccess, MileageWeek, Profile, Register, RegisterSuccess, Friend } from './pages/User';
import { BadRequest, Forbidden, GatewayTimeout, InternalServerError, NotFound, Unauthorized } from "./pages/Common/Error";
import { Signin } from "./pages/Common";
import { Management, MileageRequestManagement, MileageUpdateManagement, UserManagement } from "./pages/Admin";
import SigninSuccess from "./pages/Common/SigninSuccess/Main";
import "aos/dist/aos.css";
import { GlobalProvider } from "./contexts/Global";



function App() {
  return (
    <ViewFrame>
      <Router>
        <GlobalProvider>
          <MainHeader/>
        </GlobalProvider>
        <MainBody>
        <Routes>
            {/*User*/}
            <Route path="mileage">
              <Route path=""                element={<Mileage/>}/>
              <Route path="daily"           element={<MileageWeek/>}/>
              <Route path="request"         element={<MileageRequest/>}/>
              <Route path="request/success" element={<MileageRequestSuccess/>}/>
            </Route>
            <Route path="friend"            element={<Friend/>}/>
            <Route path="introducion"       element={<Introducion/>}/>
            <Route path="register">
              <Route path=""                element={<Register />}/>
              <Route path="success"         element={<RegisterSuccess />}/>
            </Route>
            <Route path="profile"           element={<Profile/>}/>

            {/*Admin*/}
            <Route path="manager">
              <Route path=""                        element={<Management/>}/>
              <Route path="mileage-request-status"  element={<MileageRequestManagement/>}/>
              <Route path="mileage-update"          element={<MileageUpdateManagement/>}/>
              <Route path="user"                    element={<UserManagement/>}/>
              <Route path="register-request-status" element={<MileageRequestManagement/>}/>
            </Route>

            {/*Common*/}
            <Route path="signin">
              <Route path=""                    element={<Signin/>} />
              <Route path="success"             element={<SigninSuccess/>} />
            </Route>
            <Route path=""                      element={<Navigate replace to="mileage"/>} />

            <Route path="*"     element={<NotFound/>}/>
            <Route path="error">
              <Route path="400" element={<NotFound/>}/>
              <Route path="404" element={<BadRequest/>}/>
              <Route path="401" element={<Unauthorized/>}/>
              <Route path="403" element={<Forbidden/>}/>
              <Route path="500" element={<InternalServerError/>}/>
              <Route path="504" element={<GatewayTimeout/>}/>
            </Route>
          </Routes>
        </MainBody>
        <MainFooter/>
      </Router>
    </ViewFrame>
  );
}

export default App;
