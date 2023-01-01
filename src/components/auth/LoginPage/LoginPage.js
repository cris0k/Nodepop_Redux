import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { login } from '../service';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginFailure, authLoginRequest, authLoginSuccess, uiResetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUi);
  const handleResetError = () => dispatch(uiResetError)

  const handleSubmit = async credentials => {
  
    try {
      dispatch(authLoginRequest())
      await login(credentials)
      dispatch(authLoginSuccess())
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      dispatch(authLoginFailure(error))
    }
    
     
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      { isLoading && <p>...login in nodepop </p>}
      {error && (
        <div onClick={handleResetError} style={{ color: 'red' }}>
          {error.message}
        </div> )}
      
    </div>
  );
}

export default LoginPage;
