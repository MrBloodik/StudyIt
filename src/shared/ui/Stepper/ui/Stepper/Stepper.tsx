import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import StepConnector from "../StepConnector/StepConnector";
import StepContentWrapper from "../StepContentWrapper/StepContentWrapper";
import StepIndicator from "../StepIndicator/StepIndicator";

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = React.Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <View /* outer-container */ {...rest}>
      <View
      /* step-circle-container */
      /* className kept as reference: step-circle-container ${stepCircleContainerClassName} */
      >
        <View /* step-indicator-row */ /* ${stepContainerClassName} */>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    },
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={(clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }}
                  />
                )}
                {isNotLastStep && (
                  <StepConnector isComplete={currentStep > stepNumber} />
                )}
              </React.Fragment>
            );
          })}
        </View>

        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          style={
            {
              /* step-content-default ${contentClassName} */
            }
          }
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        {!isCompleted && (
          <View /* footer-container ${footerClassName} */>
            <View /* footer-nav ${currentStep !== 1 ? "spread" : "end"} */>
              {currentStep !== 1 && (
                <Pressable
                  onPress={handleBack}
                  /* back-button ${currentStep === 1 ? "inactive" : ""} */
                  {...backButtonProps}
                >
                  <Text>{backButtonText}</Text>
                </Pressable>
              )}
              <Pressable
                onPress={isLastStep ? handleComplete : handleNext}
                /* next-button */
                {...nextButtonProps}
              >
                <Text>{isLastStep ? "Complete" : nextButtonText}</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export function Step({ children }) {
  return <View /* step-default */>{children}</View>;
}
