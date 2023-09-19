import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
import { TransactionHistoryTableHead } from './TransactionHistoryTableHead/TransactionHistoryTableHead';
import {TransactionHistoryTableBody} from './TransactionHistoryTableBody/TransactionHistoryTableBody'
 
export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TransactionHistoryTableHead />
      
      <TransactionHistoryTableBody transactions={transactions} />
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};