type CellValue = string | number | boolean | null;

// interface TableConfig {
//   rowHeight: number;
//   frozenRows: number; // Defines amount of frozen rows
//   frozenCols: number; // Defines amount of frozen cols
// }

// interface Row {
//   index: number;
// }

// interface Column {
//   index: number;
//   width: number;
// }

// interface Cell {
//   value: string;
//   row: number;
//   column: number;
//   hovering: boolean;
//   selecting: boolean;
// }

type TableData = string[][];

interface Coordinate {
  row: number;
  column: number;
}

type Operation =
  | null
  | 'edit'
  | 'select-cell'
  | 'select-row'
  | 'select-col'
  | 'move-cell'
  | 'move-row'
  | 'move-col'
  | 'resize-row'
  | 'resize-col'
  | 'autofill';
