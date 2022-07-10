import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '../recoil/user.recoil';
import { request } from '../utils/request';

const Page = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const setCurrentUser = useSetRecoilState(currentUserState);
  useEffect(() => {
    if (loading) {
      const fetchUser = async () => {
        try {
          setLoading(true);
          const res: any = await request({
            path: '/auth/profile',
            method: 'GET',
          });
          console.log(res);
          setCurrentUser(res);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setCurrentUser(null);
          setLoading(false);
        }
      };
      fetchUser();
    }
  });

  return <>{children}</>;
};

export default Page;
