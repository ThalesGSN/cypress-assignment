import React, { useEffect, useRef } from 'react';
import {
  AmountContainer,
  AmountSpan,
  ResultsContainer,
  ResultsDetails
} from './SavingGoalResults.styles';
import { Months } from '../../utils/constants';
import { CurrencyFormat } from '../../utils/functions';
import { AnimateResultRef } from './SavingGoalResults.animations';

export interface SavingGoalResultsProps {
  result: number;
  numberOfMonthsToSave: number;
  totalAmount: number;
  finalDate: Date;
}

const SavingGoalResults = (props: SavingGoalResultsProps) => {
  const { numberOfMonthsToSave, totalAmount, result, finalDate } = props;
  const monthsToSaveRef = useRef<HTMLElement>(null);
  const totalAmountRef = useRef<HTMLElement>(null);
  const finalDateRef = useRef<HTMLElement>(null);
  const resultRef = useRef<HTMLElement>(null);

  const year = finalDate.getFullYear();
  const month = finalDate.getMonth();

  useEffect(() => AnimateResultRef(resultRef), [result]);
  useEffect(() => AnimateResultRef(monthsToSaveRef), [numberOfMonthsToSave]);
  useEffect(() => AnimateResultRef(totalAmountRef), [totalAmount]);
  useEffect(() => AnimateResultRef(finalDateRef), [finalDate]);

  return (
    <ResultsContainer aria-label="Results" aria-live="polite">
      <AmountContainer>
        <span aria-hidden="true">
          Monthly <AmountSpan>amount</AmountSpan>
        </span>
        <mark
          className="animate"
          aria-label="Monthly value to be saved"
          ref={resultRef}
        >
          <strong>{CurrencyFormat(result)}</strong>
        </mark>
      </AmountContainer>
      <ResultsDetails open>
        <summary />
        <p>
          You’re planning{' '}
          <strong ref={monthsToSaveRef}>
            {numberOfMonthsToSave} monthly deposits
          </strong>{' '}
          to reach your{' '}
          <strong ref={totalAmountRef}>{CurrencyFormat(totalAmount)}</strong>{' '}
          goal by{' '}
          <strong ref={finalDateRef} className="finalDate">
            {Months[month]} {year}
          </strong>
          .
        </p>
      </ResultsDetails>
    </ResultsContainer>
  );
};

export default SavingGoalResults;
