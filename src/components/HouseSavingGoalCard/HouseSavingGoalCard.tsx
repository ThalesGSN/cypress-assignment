import React, { FunctionComponent, useEffect, useState } from 'react';
import { Card, CardHeader, ConfirmButton } from './HouseSavingGoalCard.styles';
import house from '../../assets/icons/house.svg';
import TotalAmountInput from '../TotalAmountInput/TotalAmountInput';
import ReachGoalByInput from '../ReachGoalByInput/ReachGoalByInput';
import SavingGoalResults from '../SavingGoalResults/SavingGoalResults';
import { addYears, differenceInMonths, endOfDay, isThisMonth } from 'date-fns';

const HouseSavingGoalCard: FunctionComponent = () => {
  const today = new Date();
  const fourYearsFromNow = addYears(endOfDay(today), 4);
  const [totalAmount, setTotalAmount] = useState(25000);
  const [reachGoalBy, setReachGoalBy] = useState(fourYearsFromNow);
  const [interestRate, setInterestRate] = useState(0);

  useEffect(() => {
    fetch('https://mocki.io/v1/9368eb03-143d-4cea-a06e-fd921431cf62').then(
      response => {
        response.json().then(({ interestRate }) => {
          setInterestRate(interestRate);
        });
      }
    );
  }, []);

  const handleAmountChange = (newTotalAmount: number) => {
    setTotalAmount(newTotalAmount);
  };

  const handleReachGoalChange = (newReachGoal: Date) => {
    setReachGoalBy(newReachGoal);
  };

  const numberOfMonthsToSave = isThisMonth(reachGoalBy)
    ? 1
    : differenceInMonths(reachGoalBy, today);
  const result =
    (totalAmount * Math.pow(1 + interestRate / 100, numberOfMonthsToSave)) /
    numberOfMonthsToSave;

  return (
    <Card>
      <CardHeader>
        <img src={house} alt="A house icon" aria-hidden="true" />
        <h3>Buy a house</h3>
        <span className="label">Saving goal</span>
      </CardHeader>
      <TotalAmountInput
        initialValue={totalAmount}
        onChange={handleAmountChange}
        interestRate={interestRate}
      />
      <ReachGoalByInput
        initialDate={reachGoalBy}
        onChange={handleReachGoalChange}
      />
      <SavingGoalResults
        finalDate={reachGoalBy}
        numberOfMonthsToSave={numberOfMonthsToSave}
        result={result}
        totalAmount={totalAmount}
      />
      <ConfirmButton>Confirm</ConfirmButton>
    </Card>
  );
};

export default HouseSavingGoalCard;
