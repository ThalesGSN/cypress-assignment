import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  it('should render with Origin Financial Logo', () => {
    const header = shallow(<Header />);

    expect(header.find('img').prop('alt')).toBe('Origin Financial Logo');
  });
});
