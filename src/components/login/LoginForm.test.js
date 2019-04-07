import React from 'react'
import { shallow } from 'enzyme'

import { LoginForm } from './LoginForm'
describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<LoginForm />);
    });
});