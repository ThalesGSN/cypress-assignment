import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import HouseSavingGoalCard from '../HouseSavingGoalCard';

describe('HouseSavingGoalCard', () => {
  let savingGoalContainer: ShallowWrapper;

  beforeEach(() => {
    savingGoalContainer = shallow(<HouseSavingGoalCard />);
  });

  it('should have a icon aria-hidden', () => {
    expect(savingGoalContainer.find('img').prop('aria-hidden')).toBe('true');
  });

  it('should have a "buy a house" title', () => {
    expect(savingGoalContainer.find('h3').text()).toBe('Buy a house');
  });

  it('should have a "Saving goal" subtitle', () => {
    expect(savingGoalContainer.find('span').text()).toBe('Saving goal');
  });

  it('should have a TotalAmountInput component', () => {
    expect(savingGoalContainer.find('TotalAmountInput').exists()).toBe(true);
  });

  it('should have a ReachGoalInput component', () => {
    expect(savingGoalContainer.find('ReachGoalByInput').exists()).toBe(true);
  });

  it('should have a SavingGoalResults component', () => {
    expect(savingGoalContainer.find('SavingGoalResults').exists()).toBe(true);
  });

  it('should have a ConfirmButton component', () => {
    expect(savingGoalContainer.find('ConfirmButton').text()).toBe('Confirm');
  });
});
