import React, { useEffect, useRef, useState } from 'react';
import { InputContainer } from './ReachGoalByInput.styles';
import ReachGoalButton from './ReachGoalButton/ReachGoalButton';
import DateTimeShow from './DateTimeShow/DateTimeShow';
import {
  ReachGoalByRefAnimationNext,
  ReachGoalByRefAnimationPrevious
} from './ReachGoalByInput.animations';
import { addMonths, isPast } from 'date-fns';

export interface ReachGoalInputProps {
  initialDate: Date;
  onChange: (date: Date) => void;
}

const ReachGoalByInput = (props: ReachGoalInputProps) => {
  const { initialDate, onChange } = props;

  const [date, setDate] = useState(initialDate);
  const [isNextPressed, setNextPressed] = useState(true);
  const [disabledSelectPreviousMonth, disableSelectPreviousMonth] = useState(
    false
  );
  const dataTimeShowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    disableSelectPreviousMonth(isPast(addMonths(date, -1)));

    const animate = isNextPressed
      ? ReachGoalByRefAnimationNext
      : ReachGoalByRefAnimationPrevious;
    animate(dataTimeShowRef);
  }, [date, isNextPressed]);

  const selectNextMonth = () => {
    setDate((oldDate: Date) => {
      const newDate = addMonths(oldDate, 1);
      onChange(newDate);
      setNextPressed(true);
      return newDate;
    });
  };

  const selectPreviousMonth = () => {
    if (disabledSelectPreviousMonth) {
      return;
    }
    setDate((oldDate: Date) => {
      const newDate = addMonths(oldDate, -1);
      setNextPressed(false);
      onChange(newDate);
      return newDate;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const keyPressed = event.key;
    switch (keyPressed) {
      case 'ArrowLeft':
        selectPreviousMonth();
        break;
      case 'ArrowRight':
        selectNextMonth();
        break;
    }
  };

  return (
    <InputContainer aria-required="true">
      <span>Reach goal by</span>

      <span
        tabIndex={0}
        className="inputWrapper"
        role="presentation"
        onKeyDown={handleKeyDown}
      >
        <ReachGoalButton
          className="previous"
          onClick={selectPreviousMonth}
          disabled={disabledSelectPreviousMonth}
          aria-label="Select previous month"
        />

        <article
          aria-label="Selected month"
          aria-live="assertive"
          ref={dataTimeShowRef}
        >
          <DateTimeShow date={date} />
        </article>

        <ReachGoalButton
          className="next"
          onClick={selectNextMonth}
          aria-label="Select next month"
          invertArrow={true}
        />
      </span>
    </InputContainer>
  );
};

export default ReachGoalByInput;
