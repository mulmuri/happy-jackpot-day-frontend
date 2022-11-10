import { useEffect, useState } from 'react';
import { Box, Stepper, Step, StepLabel, StepContent, Button, ThemeProvider } from '@mui/material';
import { scriptInterface } from '../../../model/viewInterface';
import { IdForm, InfoForm, PwForm } from './Form';
import { stepperTheme } from '../../../theme/stepperTheme';



const RegisterSection = () => {
    const steps: scriptInterface[] = [
        {
            title: '아이디를 입력해주세요',
            content: IdForm(),
        },
        {
            title: '비밀번호를 입력해주세요.',
            content: PwForm(),
        },
        {
            title: '인적사항을 입력해주세요.',
            content: InfoForm(),
        },
    ];

    const [activeStep, setActiveStep] = useState(-1);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1)%steps.length );
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    useEffect(() => {
        setActiveStep(0);
    },[])

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
                    onClick={handleNext}
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