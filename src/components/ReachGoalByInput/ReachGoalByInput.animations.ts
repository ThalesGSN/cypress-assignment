import { GenerateRefAnimationTrigger } from '../../utils/functions';

export const ReachGoalByInputAnimationNext = [
  { opacity: 0.5, transform: 'translateX(50px)' },
  { opacity: 1, transform: 'translateX(0)' }
];

export const ReachGoalByInputAnimationPrevious = [
  { opacity: 0.5, transform: 'translateX(-50px)' },
  { opacity: 1, transform: 'translateX(0)' }
];

export const ReachGoalByInputAnimationOptions: KeyframeAnimationOptions = {
  duration: 500,
  iterations: 1,
  easing: 'ease-out'
};

export const ReachGoalByRefAnimationNext = GenerateRefAnimationTrigger(
  ReachGoalByInputAnimationNext,
  ReachGoalByInputAnimationOptions
);
export const ReachGoalByRefAnimationPrevious = GenerateRefAnimationTrigger(
  ReachGoalByInputAnimationPrevious,
  ReachGoalByInputAnimationOptions
);
