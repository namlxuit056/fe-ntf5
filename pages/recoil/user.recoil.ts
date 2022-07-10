import { request } from './../utils/request';
import { IPost } from 'interface/post.interface';
import { atom, selector } from 'recoil';

const initialValue: IPost = undefined;

const mySelector = selector({
  key: 'mySelector',
  get: async () => {
    const res = await request({
      path: '/auth/profile',
      method: 'GET',
    });
    if (!res) return null;
    return { currentUser: res };
  },
});

export const currentUserState = atom({
  key: 'currentUserState',
  default: initialValue,
});
