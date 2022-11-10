import { Fragment, useContext } from "react"
import { InputItem, InputItemPW } from "../../../components"
import RegisterContext from "../../../contexts/Register"



export const IdForm = () => {
    const Register = useContext(RegisterContext);
    const {IdError, handleRegisterChange, IdChecker } = {...Register.state, ...Register.actions};

    return (
      <Fragment>
        <InputItem
          formType="name"
          label="이름"
          error={IdError}
          handleChange={handleRegisterChange("name")}
        />
        <InputItem
          formType="ID"
          label="아이디"
          error={IdError}
          handleChange={handleRegisterChange("ID")}
          handleCheck={IdChecker}
        />
     </Fragment>
    )
}

export const PwForm = () => {
    const Register = useContext(RegisterContext);
    const {PwError, handleRegisterChange, PwChecker } = {...Register.state, ...Register.actions};

    return (
      <Fragment>
        <InputItemPW
          formType="PW"
          label="비밀번호"
          error={PwError}
          handleChange={handleRegisterChange("PW")}
        />
        <InputItemPW
          formType="PWContrast"
          label="비밀번호 재입력"
          error={PwError}
          handleChange={handleRegisterChange("PWContrast")}
          handleCheck={PwChecker}
        />
     </Fragment>
    )
}

export const InfoForm = () => {
    const Register = useContext(RegisterContext);
    const {InfoError, handleRegisterChange, emailChecker, phoneNumberChecker } = {...Register.state, ...Register.actions};

    return (
      <Fragment>
        <InputItem
          formType="phoneNumber"
          label="핸드폰 번호"
          error={InfoError}
          handleChange={handleRegisterChange("phoneNumber")}
          handleCheck={phoneNumberChecker}
        />
        <InputItem
          formType="email"
          label="이메일"
          error={InfoError}
          handleChange={handleRegisterChange("ID")}
          handleCheck={emailChecker}
        />
        <InputItem
          formType="accountBankName"
          label="계좌 은행"
          error={InfoError}
          handleChange={handleRegisterChange("accountBankName")}
        />
        <InputItem
          formType="accountNumber"
          label="계좌 번호"
          error={InfoError}
          handleChange={handleRegisterChange("accountNumber")}
        />
     </Fragment>
    )
}