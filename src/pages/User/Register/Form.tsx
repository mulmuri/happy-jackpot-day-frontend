import { Fragment, useContext } from "react"
import { InputItem, InputItemPW } from "../../../components"
import RegisterContext from "../../../contexts/Register"
import { defaultError } from "../../../model/viewInterface";
import { addHypen } from "../../../util/formatter";



export const IdForm = () => {
    const Register = useContext(RegisterContext);
    const {IdError, handleRegisterChange, registerValues, IdCheckerAdvance } = {...Register.state, ...Register.actions};

    return (
      <Fragment>
        <InputItem
          formType="name"
          label="이름"
          value={registerValues.name}
          
          error={IdError}
          handleChange={handleRegisterChange("name")}
        />
        <InputItem
          formType="ID"
          label="아이디"
          value={registerValues.ID}
          error={IdError}
          handleChange={handleRegisterChange("ID")}
          handleCheck={IdCheckerAdvance}
        />
     </Fragment>
    )
}

export const PwForm = () => {
    const Register = useContext(RegisterContext);
    const {PwError, handleRegisterChange, PwChecker, registerValues } = {...Register.state, ...Register.actions};
    if (registerValues.PWContrast === undefined) registerValues.PWContrast = "";

    return (
      <Fragment>
        <InputItemPW
          formType="PW"
          label="비밀번호"
          value={registerValues.PW}
          error={PwError}
          handleChange={handleRegisterChange("PW")}
        />
        <InputItemPW
          formType="PWContrast"
          label="비밀번호 재입력"
          value={registerValues.PWContrast}
          error={PwError}
          handleChange={handleRegisterChange("PWContrast")}
          handleCheck={PwChecker}
        />
     </Fragment>
    )
}

export const InfoForm = () => {
    const Register = useContext(RegisterContext);
    const {
        emailError, emailChecker,
        phoneError, phoneNumberChecker,
        handleRegisterChange, registerValues } = {...Register.state, ...Register.actions};

    return (
      <Fragment>
        <InputItem
          formType="phoneNumber"
          label="핸드폰 번호"
          value={registerValues.phoneNumber}
          error={phoneError}
          handleChange={handleRegisterChange("phoneNumber")}
          handleCheck={phoneNumberChecker}
        />
        <InputItem
          formType="email"
          label="이메일"
          value={registerValues.email}
          error={emailError}
          handleChange={handleRegisterChange("email")}
          handleCheck={emailChecker}
        />
        <InputItem
          formType="accountBankName"
          label="계좌 은행"
          value={registerValues.accountBankName}
          error={defaultError()}
          handleChange={handleRegisterChange("accountBankName")}
        />
        <InputItem
          formType="accountNumber"
          label="계좌 번호"
          value={registerValues.accountNumber}
          error={defaultError()}
          handleChange={handleRegisterChange("accountNumber")}
        />
     </Fragment>
    )
}