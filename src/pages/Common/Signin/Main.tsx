import { useContext } from 'react';
import LoginButton    from "./LoginButton";
import UtilButton from "./UtilButton";
import GlobalContext, { GlobalProvider }  from '../../../contexts/Global';
import { PageFrame, InputItem, InputItemPW, LogoSection } from "../../../components";



const Signin = () => {
    return (
        <GlobalProvider>
            <SigninProps/>
        </GlobalProvider>
    )
}



const SigninProps = () => {
    const Sign = useContext(GlobalContext);
    const { handleAuthChange, error } = {...Sign.state, ...Sign.actions};


    return (
        <PageFrame>
          <LogoSection logo="Main" color="success.main"/>
          <InputItem
            formType="ID"
            label="아이디"
            error={error}
            handleChange={handleAuthChange("ID")}
          />
          <InputItemPW
            formType="PW"
            label="비밀번호"
            error={error}
            handleChange={handleAuthChange("PW")}
          />
          <LoginButton/>
          <UtilButton/>
        </PageFrame>
    )
}
  
export default Signin;