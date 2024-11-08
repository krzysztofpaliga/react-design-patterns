import React, { useState } from "react";

function UncontrolledOnboardingFlow({ children, onFinish }) {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updatedData = {
      ...onboardingData,
      ...stepData,
    };

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }

    setOnboardingData(updatedData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
}

export default UncontrolledOnboardingFlow;
