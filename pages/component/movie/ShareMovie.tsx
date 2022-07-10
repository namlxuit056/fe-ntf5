import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { request } from '../../../utils/request';
import openNotification, { ETypeNotification } from '../Notification';
const Style = styled.div`
  width: 600px;
  border: 1px solid black;
  padding: 20px;
  position: relative;
  .title {
    background-color: white;
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    top: -15px;
    padding: 0 3px;
  }
  .input {
    display: flex;
    margin-top: 20px;
    input {
      padding: 5px;
    }
    span {
      width: 30%;
    }
  }
  button {
    width: 100%;
    margin-top: 20px;
    padding: 5px;
  }
  .button {
    margin-top: 20px;
    font-weight: bold;
  }
  textarea {
  }
`;
const ShareMovie = () => {
  const router = useRouter();
  const [values, setValues] = useState({ url: '' });
  const handleShare = async () => {
    try {
      const data = values;
      data.url = values.url.replace('watch?v=', 'embed/');

      const res: any = await request({
        path: '/movies/share',
        data,
        method: 'POST',
      });
      if (res) {
        openNotification({
          type: ETypeNotification.SUCCESS,
          message: 'Share movie success!',
        });
        router.push('/');
      }
    } catch (error: any) {
      console.log(error.message);
      openNotification({
        type: ETypeNotification.ERROR,
        message: error.message,
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
  return (
    <Style>
      <div className="title">
        <span>Share a Youtube Movie</span>
      </div>
      <div className="form">
        <div className="input">
          <span>Youtube URL:</span>
          <input name="url" onChange={handleChange}></input>
        </div>
        <div className="input">
          <span>Title:</span>
          <input name="title" onChange={handleChange}></input>
        </div>
        <div className="input">
          <span>Description:</span>
          <textarea name="desc" onChange={handleChange}></textarea>
        </div>
        <div className="button">
          <button onClick={handleShare}>
            <span>Share</span>
          </button>
        </div>
      </div>
    </Style>
  );
};
export default ShareMovie;
