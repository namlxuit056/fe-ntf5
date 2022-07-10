import styled from 'styled-components';
import { request } from '../utils/request';
import openNotification, { ETypeNotification } from './Notification';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { removeToken, setToken } from '../lib/auth';
import { currentUserState } from '../recoil/user.recoil';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Style = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 1px solid black;
  .logo {
    width: 50%;
    cursor: pointer;
    span {
      font-size: 20px;
      font-weight: bold;
      margin-left: 20px;
    }
  }
  .auth {
    display: flex;
  }
  input {
    width: 200px;
    margin-left: 20px;
  }
  button {
    margin-left: 20px;
    margin-right: 20px;
    padding: 5px;
    font-weight: bold;
  }
`;
const Header = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [values, setValues] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res: any = await request({
        path: '/auth/login',
        data: values,
        method: 'POST',
      });
      if (!res || !res['access_token']) {
        openNotification({
          type: ETypeNotification.ERROR,
          message: 'Đăng nhập thất bại!',
        });
        return;
      }

      setToken(res['access_token']);

      openNotification({
        type: ETypeNotification.SUCCESS,
        message: 'Đăng nhập thành công!',
      });

      try {
        const res = await request({
          path: '/auth/profile',
          method: 'GET',
        });
        setCurrentUser(res);
      } catch (error) {
        setCurrentUser(null);
      }
      router.reload();
    } catch (error: any) {
      console.log(error);
      openNotification({
        type: ETypeNotification.ERROR,
        message: error,
      });
    }
  };
  const handleChange = (e: any) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onLogout = () => {
    removeToken();
    router.reload();
  };
  return (
    <Style>
      <div className="logo" onClick={() => router.push('/')}>
        <FontAwesomeIcon icon={faHome} size="2x" />
        <span>Funny Movie</span>
      </div>
      {!currentUser && (
        <div className="auth">
          <input
            autoComplete="off"
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <input
            autoComplete="off"
            type="text"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <button onClick={handleLogin}> Login/Register</button>
        </div>
      )}
      {currentUser && (
        <div className="share">
          <span>Welcome {currentUser.email} </span>
          <button onClick={() => router.push('share')}>Share a movie</button>
          <button onClick={onLogout}> Logout</button>
        </div>
      )}
    </Style>
  );
};

export default Header;
