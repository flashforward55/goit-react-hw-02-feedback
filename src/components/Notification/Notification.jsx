//import PropTypes from 'prop-types';

import {
  NotificationContainer,
  NotificationMessage,
} from './Notification.styled';

const Notification = ({ message }) => (
  <NotificationContainer>
    <NotificationMessage>{message}</NotificationMessage>
  </NotificationContainer>
);
export default Notification;
