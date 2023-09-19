import { theme } from "constants/theme";
import styled from '@emotion/styled';

export const TableRow = styled.tr`
height: 40px;
background-color: ${theme.colors.white};
:nth-of-type(even){
    background-color: ${theme.colors.lightBlue};
}`;