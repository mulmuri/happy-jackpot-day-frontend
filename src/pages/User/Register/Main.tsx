import { PageFrame } from "../../../components";
import { RegisterProvider } from "../../../contexts/Register";
import RegisterSection from "./Stepper"
/*
코드를 다 이해하고 내가 사용하는 용도에 맞게 수정해야 함 / 아닐수도 있음
미디어쿼리 적용하기

Step.1 : 로그인 정보
 - ID
 - PW
 - PW-again
Step.2 : 개인 정보
 - anme
 - Phone
 - Email
Step.3 : 계좌 정보
 - account


 signin, register 모두 두 종류의 input container 을 사용하기 때문에 컴포넌트로 분리할 필요 있음
*/



const Register = () => {
  return (
    <PageFrame>
      <RegisterProvider>
        <RegisterSection />
      </RegisterProvider>
    </PageFrame>
  )
}

export default Register;

