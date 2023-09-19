import { FriendItem, FriendStatus, FriendImage, FriendName } from './FriendListItem.styled.jsx';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (<FriendItem>
    <FriendStatus status={isOnline}></FriendStatus>
    <FriendImage src={avatar} alt={`${name} avatar`} width="48" />
    <FriendName>{name}</FriendName>
  </FriendItem>)
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}