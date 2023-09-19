import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 400px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 40px 0;
  width: 400px;
`;

export const ProfileImage = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
margin-bottom: 30px;
background-color: ${theme.colors.lightGrey};
`;

export const ProfileName = styled.p`
font-size: 24px;
font-weight: 500;
margin-bottom: 10px;
`;

export const ProfileTag = styled.p`
margin-bottom: 10px;
color: ${theme.colors.grey};
`;

export const ProfileLocation = styled.p`
color: ${theme.colors.grey};`

export const ProfileList = styled.ul`
display: flex;
width: 400px;
justify-content: space-around;
background-color: ${theme.colors.lightBlue};
`;  

export const ProfileItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 25px;
width: 33.33%;

border-top: 1px solid ${theme.colors.lightGrey};
border-right: 1px solid ${theme.colors.lightGrey};
:last-child{
border-right: transparent;
}
`;

export const ProfileLabel = styled.span`
color: ${theme.colors.grey};
margin-bottom: 5px;
`

export const ProfileQuantity = styled.span`
font-size: 18px;
font-weight: 500;`;