import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SavingGoalResults from '../SavingGoalResults';
import { addYears } from 'date-fns';
import { ResultsDetails } from '../SavingGoalResults.styles';

describe('SavingGoalResults', () => {
  let savingGoalResults: ShallowWrapper;

  beforeEach(() => {
    const fourYearsFromNow = addYears(new Date(), 4);
    savingGoalResults = shallow(
      <SavingGoalResults
        finalDate={fourYearsFromNow}
        numberOfMonthsToSave={48}
        result={521.0}
        totalAmount={25000}
      />
    );
  });

  it('should render with A "Monthly" label', () => {
    const monthlyLabel = savingGoalResults.find('span').first();
    expect(monthlyLabel.text()).toBe('Monthly amount');
    expect(monthlyLabel.prop('aria-hidden')).toBe('true');
  });

  it('should render a monetary value to be saved', () => {
    expect(savingGoalResults.find('mark strong').text()).toBe('$521');
    expect(savingGoalResults.find('mark').prop('aria-label')).toBe(
      'Monthly value to be saved'
    );
  });

  it('should render details of the saving plan', () => {
    expect(savingGoalResults.find(ResultsDetails).text()).toBe(
      'You’re planning 48 monthly deposits to reach your $25,000 goal by October 2024.'
    );
  });
});
