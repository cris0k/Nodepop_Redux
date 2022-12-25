import { Link } from 'react-router-dom';
import T from 'prop-types';

import { ConfirmationButton } from '../../common';
import { logout } from '../service';
import useMutation from '../../../hooks/useMutation';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged } from '../../../store/selectors';
import { authLogout } from '../../../store/actions';

const AuthButton = () => {
  const isLogged = useSelector(getIsLogged)
  const dispatch = useDispatch()
  const mutation = useMutation(logout);

  const handleLogoutConfirm = async () => {
    await mutation.execute();
    dispatch(authLogout())
  };

  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure?"
      onConfirm={handleLogoutConfirm}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};

AuthButton.propTypes = {
  handleLogout: T.func.isRequired,
  isLogged: T.bool,
};

AuthButton.defaultProps = {
  isLogged: false,
};

const ConnectedAuthButton = props => (
  auth => <AuthButton {...auth} {...props} />
);

export default ConnectedAuthButton;
