import { useContext, useEffect, useState } from 'react';
import { Box, Stepper, Step, StepLabel, StepContent, Button, ThemeProvider } from '@mui/material';
import { scriptInterface } from '../../../model/viewInterface';
import { IdForm, InfoForm, PwForm } from './Form';
import { stepperTheme } from '../../../theme/stepperTheme';
import RegisterContext from '../../../contexts/Register';




interface registerIterator extends scriptInterface {
    func: (() => void)
}


const RegisterSection = () => {
    const [activeStep, setActiveStep] = useState(-1);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    useEffect(() => {
        setActiveStep(0);
    },[]);

    const Register = useContext(RegisterContext)
    const { requestRegister, IdChecker, PwChecker, emailChecker, phoneNumberChecker } = Register.actions;


    const steps: (registerIterator)[] = [
        {
            title: '아이디를 입력해주세요',
            content: IdForm(),
            func: () => {
                if (IdChecker()) {
                    handleNext();
                }
            }
        },
        {
            title: '비밀번호를 입력해주세요.',
            content: PwForm(),
            func : () => {
                if (PwChecker()) {
                    handleNext();
                }
            }
        },
        {
            title: '인적사항을 입력해주세요.',
            content: InfoForm(),
            func: () => {
                if (emailChecker() && phoneNumberChecker()) {
                    requestRegister();
                }
            }
        },
    ];

    return (
    <ThemeProvider theme={stepperTheme}>
    <Box sx={{ width: "80%"}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.title}>
            <StepLabel >{step.title}</StepLabel>
            <StepContent>
              {step.content}
              <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    color="info"
                    onClick={step.func}
                    //onClick={(index === steps.length - 1 ? requestRegister :  handleNext)}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? '회원가입' : '다음'}
                  </Button>
                  {index !== 0 &&
                  <Button
                    variant="text"
                    color="info"
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    이전
                  </Button>}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
    </ThemeProvider>
  );
}

export default RegisterSection;