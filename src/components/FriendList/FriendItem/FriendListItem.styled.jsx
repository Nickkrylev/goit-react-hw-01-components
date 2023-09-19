import styled from '@emotion/styled';
import { theme } from 'constants/theme';
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  background-color: ${theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${isOnline};
`;

function isOnline({ status }) {
  switch (status) {
    case true:
      return `${theme.colors.green}`;
    case false:
      return `${theme.colors.red}`;
    default:
      return `${theme.colors.black}`;
  }
}

export const FriendImage = styled.img`
  margin-left: 10px;
`;

export const FriendName = styled.p`
  font-size: 28px;
  margin-left: 10px;
  font-weight: 500;
`;
