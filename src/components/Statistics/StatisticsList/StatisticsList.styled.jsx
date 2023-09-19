import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const StatisticsList = styled.ul`
display: flex;
width: 400px;`;

export const StatisticsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 20%;
padding: 20px;
border: 1px solid ${theme.colors.grey}`;

export const StatisticsLabel = styled.span`
margin-bottom: 10px;`;

export const StatisticsPercentage = styled.span`
font-weight: 500;
font-size: 18px;`;