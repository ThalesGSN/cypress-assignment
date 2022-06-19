import React from 'react';
import { ZeroPad } from '../../../utils/functions';
import { Months } from '../../../utils/constants';
import { DateTimeContainer } from './DateTimeShow.styles';

export interface DateTimeShowProps {
  date: Date;
}

const DateTimeShow = (props: DateTimeShowProps) => {
  const { date } = props;
  const year = date.getFullYear();
  const month = date.getMonth();

  const dateTime = `${year}-${ZeroPad(month + 1, 2)}-01 00:00`;

  return (
    <DateTimeContainer>
      <time dateTime={dateTime}>
        <span>{Months[month]}</span>
        <span>{year}</span>
      </time>
    </DateTimeContainer>
  );
};

export default DateTimeShow;
