// type CellValue = string | number | boolean | null;

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
//   x: number;
//   y: number;
//   value: CellValue;
// }

interface Coordinate {
  row: number;
  col: number;
}
