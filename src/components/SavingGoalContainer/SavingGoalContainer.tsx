import React, { FunctionComponent } from 'react';
import { Container } from './SavingGoalContainer.styles';
import HouseSavingGoalCard from '../HouseSavingGoalCard/HouseSavingGoalCard';

const SavingGoalContainer: FunctionComponent = () => (
  <Container>
    <p className="title">
      Let&apos;s plan your <strong>saving goal.</strong>
    </p>
    <HouseSavingGoalCard />
  </Container>
);

export default SavingGoalContainer;
