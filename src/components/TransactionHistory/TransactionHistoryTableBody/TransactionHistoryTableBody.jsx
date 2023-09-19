import { TableRow } from './TransactionHistoryTableBody.styled';
import PropTypes from 'prop-types';

export const TransactionHistoryTableBody = ({transactions}) => {
  return (
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (<TableRow key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableRow>))}
      </tbody>
  )
}

TransactionHistoryTableBody.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};