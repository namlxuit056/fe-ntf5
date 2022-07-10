import { notification } from 'antd';

export enum ETypeNotification {
  SUCCESS,
  ERROR,
  INFO,
}

interface INotification {
  type?: ETypeNotification;
  message?: string;
}
const openNotification = ({
  type = ETypeNotification.INFO,
  message,
}: INotification) => {
  switch (type) {
    case ETypeNotification.SUCCESS:
      return notification.success({
        message,
      });
    case ETypeNotification.ERROR:
      return notification.error({
        message,
      });
    default:
      return notification.info({
        message,
      });
  }
};

export default openNotification;
