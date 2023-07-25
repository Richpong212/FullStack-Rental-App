import React from "react";

interface LottieOptions {
  loop: boolean;
  autoplay: boolean;
  animationData: any; // Adjust this type according to the type of animationData
  rendererSettings?: {
    preserveAspectRatio: string;
  };
}

interface LottieProps {
  options: LottieOptions;
  height: number;
  width: number;
}

const MockLottie: React.FC<LottieProps> = ({ options, height, width }) => {
  // Customize the mock implementation here as needed
  return <div data-testid="mock-lottie" />;
};

export default MockLottie;
