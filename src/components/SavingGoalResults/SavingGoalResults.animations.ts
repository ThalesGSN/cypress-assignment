import { GenerateRefAnimationTrigger } from '../../utils/functions';

export const ChangeResultAnimation: Keyframe[] = [
  {
    transform: 'translateY(-20px)',
    opacity: 0.1
  },
  {
    transform: 'translateY(0)',
    opacity: 1
  }
];

export const ChangeResultAnimationOptions: KeyframeAnimationOptions = {
  duration: 500,
  iterations: 1,
  easing: 'ease-out'
};

export const AnimateResultRef = GenerateRefAnimationTrigger(
  ChangeResultAnimation,
  ChangeResultAnimationOptions
);
