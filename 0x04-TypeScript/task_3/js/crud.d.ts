import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): RowID {
  // Implementation goes here
  // ...
  return row.id;
}

export function deleteRow(rowId: RowID): void {
  // Implementation goes here
  // ...
}

export function updateRow(rowId: RowID, row: RowElement): RowID {
  // Implementation goes here
  // ...
  return row.id;
}
