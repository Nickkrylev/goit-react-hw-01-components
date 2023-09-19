import {TableRow, TableHeader} from './TransactionHistoryTableHead.styled';

export const TransactionHistoryTableHead = () => {
    return (
        <thead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </thead>
    )
}