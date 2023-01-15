import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userLoginData } from '../../store/actions';
import { whoIsLogged } from '../../store/selectors';
import { AuthButton } from '../auth';

import './Header.css';

const isSelected = ({ isActive }) => (isActive ? 'selected' : '');

function Header() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(userLoginData())
  },[dispatch])
  
  const data = useSelector((state)=>whoIsLogged(state))

  return (
    <header>
      <h1>
      Nodepop React
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/adverts" className={isSelected} end>
              Nodepop
            </NavLink>
          </li>
          <li>
            <NavLink to="/adverts/new" className={isSelected}>
              New advert
            </NavLink>
          </li>
        </ul>
      </nav>
      <span>{`Welcome ${data.username}`}</span>
      <AuthButton />
    </header>
  );
}

export default Header;
