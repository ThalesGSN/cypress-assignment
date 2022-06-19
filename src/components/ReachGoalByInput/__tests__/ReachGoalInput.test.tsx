import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ReachGoalByInput from '../ReachGoalByInput';
import { Months } from '../../../utils/constants';
import { addYears } from 'date-fns';

describe('Reach goal input', () => {
  let reachGoalInput: ReactWrapper;

  beforeEach(() => {
    const fourYearsFromNow = addYears(new Date(), 4);
    reachGoalInput = mount(
      <ReachGoalByInput initialDate={fourYearsFromNow} onChange={() => null} />
    );
  });

  it('should have a "Reach goal by" Label', () => {
    expect(
      reachGoalInput
        .find('span')
        .first()
        .text()
    ).toBe('Reach goal by');
  });

  it('should have a previous month button', () => {
    expect(
      reachGoalInput
        .find('.previous')
        .last()
        .prop('aria-label')
    ).toBe('Select previous month');
  });

  it('should have a next month button', () => {
    expect(
      reachGoalInput
        .find('.next')
        .last()
        .prop('aria-label')
    ).toBe('Select next month');
  });
  it('should have a selected month label', () => {
    const thisMonth = Months[new Date().getMonth()];
    expect(
      reachGoalInput
        .find('time span')
        .first()
        .text()
    ).toBe(thisMonth);
  });

  it('should have a selected year label', () => {
    const nextYear = `${new Date().getFullYear() + 4}`;
    expect(
      reachGoalInput
        .find('time span')
        .at(1)
        .text()
    ).toBe(nextYear);
  });

  it('should select next month', () => {
    const thisMonth = new Date().getMonth();
    const expectedMonth = thisMonth !== 11 ? Months[thisMonth + 1] : 'January';

    reachGoalInput.find('button.next').simulate('click');
    expect(
      reachGoalInput
        .find('time span')
        .first()
        .text()
    ).toBe(expectedMonth);
  });
  it('should select previous month', () => {
    const thisMonth = new Date().getMonth();
    const expectedMonth = thisMonth !== 0 ? Months[thisMonth - 1] : 'December';

    reachGoalInput.find('button.previous').simulate('click');
    expect(
      reachGoalInput
        .find('time span')
        .first()
        .text()
    ).toBe(expectedMonth);
  });

  it('should select next year', () => {
    let month = new Date().getMonth();

    const nextButton = reachGoalInput.find('.next').last();
    while (month < 12) {
      nextButton.simulate('click');
      month++;
    }

    const fourYearsFromNow = `${new Date().getFullYear() + 5}`;
    expect(
      reachGoalInput
        .find('time span')
        .last()
        .text()
    ).toBe(fourYearsFromNow);
  });

  it('should select previous year', () => {
    let month = new Date().getMonth();

    const previousButton = reachGoalInput.find('.previous').last();
    while (month > -1) {
      previousButton.simulate('click');
      month--;
    }

    const thisYear = `${new Date().getFullYear() + 3}`;
    expect(
      reachGoalInput
        .find('time span')
        .last()
        .text()
    ).toBe(thisYear);
  });

  it('should block user from select past dates', () => {
    const previousButton = reachGoalInput.find('.previous').last();

    for (let clickedTimes = 0; clickedTimes < 48; clickedTimes++) {
      previousButton.simulate('click');
    }

    const currentPreviousButton = reachGoalInput.find('.previous').last();
    expect(currentPreviousButton.prop('disabled')).toBe(true);
  });
});
