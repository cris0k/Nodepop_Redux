import {fireEvent, render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { authLogin } from '../../../store/actions';
import { defaultState } from '../../../store/reducers';
import LoginPage from './LoginPage';

jest.mock('../../../store/actions');

describe('LoginPage', () => {
    const store = {
      getState: () => defaultState,
      dispatch: () => {},
      subscribe: () => {},
    };
  
    const renderComponent = () =>
      render(
        <Provider store={store}>
            <Router>
                <LoginPage />
            </Router>
        </Provider>,
      );
  
    test('snapshot', () => {
      const { container } = renderComponent();
      expect(container).toMatchSnapshot();
    });
  
    test('should dispatch authLogin action', () => {
      const credentials = {
        email:'cris', 
        password:'1234',
        remember: false
    }
      renderComponent();
  
      const emailInput = screen.getByPlaceholderText(/email/)
      const passwordInput = screen.getByPlaceholderText(/password/)
      const rememberInput = screen.getByRole('checkbox')
      const submitButton = screen.getByRole('button');

      fireEvent.change(emailInput, {target :{value: credentials.email} });
      fireEvent.change(passwordInput, {target :{value: credentials.password} });
      fireEvent.change(rememberInput,{target : { value :credentials.remember}})
  
      fireEvent.click(submitButton);
      expect(authLogin).toHaveBeenCalledWith(credentials);
    });
  });
