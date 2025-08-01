import React from 'react';
import { useTable } from 'react-table';

export default function TableView({ data, columns }) {
  const table = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = table;

  return (
    <table {...getTableProps()} className="min-w-full bg-white dark:bg-gray-700 rounded">
      <thead className="bg-procBlue text-white">
        {headerGroups.map(hg => (
          <tr {...hg.getHeaderGroupProps()}>
            {hg.headers.map(col => <th {...col.getHeaderProps()} className="p-2">{col.render('Header')}</th>)}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => { prepareRow(row); return (
          <tr {...row.getRowProps()} className="even:bg-gray-100 dark:even:bg-gray-800">
            {row.cells.map(cell => <td {...cell.getCellProps()} className="p-2 border-b">{cell.render('Cell')}</td>)}
          </tr>
        ); })}
      </tbody>
    </table>
  );
}
