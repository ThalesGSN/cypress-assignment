import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SavingGoalContainer from '../SavingGoalContainer';

describe('SavingGoalContainer', () => {
  let savingGoalContainer: ShallowWrapper;
  beforeEach(() => {
    savingGoalContainer = shallow(<SavingGoalContainer />);
  });

  it('should have "Let\'s plan your saving goal." label', () => {
    expect(savingGoalContainer.find('p').text()).toBe(
      "Let's plan your saving goal."
    );
  });

  it('should have the HouseSavingGoalCard', () => {
    expect(savingGoalContainer.find('HouseSavingGoalCard').exists()).toBe(true);
  });
});
