import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';

const SignupPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handlePrev = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const steps = ['step1', 'step2', 'step3'];
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return `step1 content step1 content step1 content step1 content 
        step1 content step1 content step1 content step1 content step1 
        content step1 content step1 content step1 content step1 content 
        step1 content step1 content step1 content step1 content`;
      case 1:
        return 'step 2 content';
      case 2:
        return `step 3 content step 3 content step 3 content`;
      default:
        return 'Unknown step';
    }
  };
  return (
    <Container fixed>
      <Typography variant="h1">Connthass</Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <Container fixed>
                <div>
                  <Button disabled={activeStep === 0} onClick={handlePrev}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </Container>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};

export default SignupPage;
