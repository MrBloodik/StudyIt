import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import StepConnector from "../StepConnector/StepConnector";
import StepContentWrapper from "../StepContentWrapper/StepContentWrapper";
import StepIndicator from "../StepIndicator/StepIndicator";

import s from "./StepperStyle";

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  backButtonProps = {},
  nextButtonProps = {},
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}) {
  const stepsArray = React.Children.toArray(children);
  const totalSteps = stepsArray.length || 1;
  const safeInitial = Math.min(
    Math.max(Number(initialStep) || 1, 1),
    totalSteps
  );
  const [currentStep, setCurrentStep] = useState(safeInitial);
  const [direction, setDirection] = useState(1); // 1 forward, -1 back

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
    <View style={s.outerContainer} {...rest}>
      <View style={s.stepCircleContainer}>
        <View style={s.stepIndicatorRow}>
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
                      if (clicked === currentStep) return;
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
                      if (clicked === currentStep) return;
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
          style={s.stepContentDefault}
        >
          {
            stepsArray[
              Math.max(0, Math.min(currentStep - 1, stepsArray.length - 1))
            ]
          }
        </StepContentWrapper>

        {!isCompleted && (
          <View style={s.footerContainer}>
            <View
              style={currentStep !== 1 ? s.footerNavSpread : s.footerNavEnd}
            >
              {currentStep !== 1 && (
                <Pressable
                  onPress={handleBack}
                  style={[
                    s.backButton,
                    currentStep === 1 ? s.backButtonInactive : null,
                  ]}
                  {...backButtonProps}
                >
                  <Text style={s.backButtonText}>{backButtonText}</Text>
                </Pressable>
              )}
              <Pressable
                onPress={isLastStep ? handleComplete : handleNext}
                style={s.nextButton}
                {...nextButtonProps}
              >
                <Text style={s.nextButtonText}>
                  {isLastStep ? "Complete" : nextButtonText}
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export function Step({ children }) {
  return <View style={s.stepDefault}>{children}</View>;
}
