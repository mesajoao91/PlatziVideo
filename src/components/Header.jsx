import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';

import '../assets/styles/components/Header.scss';
import { logoutRequest } from '../actions';
import logo from '../assets/static/logo-platzi.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0; // Validación para saber si user tiene elementos, para poder comprar que un objeto tiene n elementos se pasa por medio de Object.keys(user).length

  const HeaderClass = classNames('header', {
    isLogin,
    isRegister,
  });

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className={HeaderClass}>
      <Link to='/'>
        <img
          className='header__img'
          src={logo}
          alt='Platzi_Video'
        />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='User Icon' />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to='/register'>
                {user.name}
              </Link>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <Link
                to='#logout'
                onClick={handleLogout}
              >
                Cerrar Sesión
              </Link>
            </li>
          ) : <li><Link to='/login'>Iniciar Sesión</Link></li>}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object,
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
  logoutRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
