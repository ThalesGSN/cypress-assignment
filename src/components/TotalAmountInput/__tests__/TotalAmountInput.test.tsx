import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TotalAmountInput from '../TotalAmountInput';

describe('TotalAmountInput', () => {
  let totalAmountInput: ShallowWrapper;
  beforeEach(() => {
    totalAmountInput = shallow(
      <TotalAmountInput initialValue={25000} onChange={() => null} />
    );
  });

  it('should have a "Total Amount" Label', () => {
    expect(
      totalAmountInput
        .find('span')
        .first()
        .text()
    ).toBe('Total amount');
  });
  it('should have a dollar sign icon', () => {
    expect(totalAmountInput.find('.iconArea').prop('aria-label')).toBe(
      'Dollar sign'
    );
  });

  it('should have a input with inputMode numeric', () => {
    expect(totalAmountInput.find('.masked-input').prop('inputMode')).toBe(
      'numeric'
    );
  });
});
