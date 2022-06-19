import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../App';

describe('App', () => {
  let app: ShallowWrapper;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('should have a Header', () => {
    expect(app.find('Header').exists()).toEqual(true);
  });

  it('should have a SavingGoalContainer', () => {
    expect(app.find('SavingGoalContainer').exists()).toEqual(true);
  });
});
