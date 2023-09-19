import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const StatisticsSection = styled.section`
display: flex;
align-items: center;
flex-direction: column;
width: 400px;
margin: 50px auto;
background-color: ${theme.colors.white};
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.14),
0px 2px 1px rgba(0, 0, 0, 0.2);`;

export const StatisticsTitle = styled.h2`
padding-top: 40px;
margin-bottom: 40px;
text-transform: uppercase;`;