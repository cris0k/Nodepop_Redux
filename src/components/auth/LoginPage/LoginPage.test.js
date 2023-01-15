import {render} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { defaultState } from '../../../store/reducers';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
    test('snapshot', () => {
      const store = {
        getState: () => defaultState,
        dispatch: () => {},
        subscribe: () => {}
      };
      const {container}=render(
        <Provider store={store}>
            <Router>
                <LoginPage />
            </Router   >
        </Provider>,
      );
        expect(container).toMatchSnapshot();
    });
  });
