import { atom } from 'jotai';

export const tableDataAtom = atom<TableData>([
  ['Product Product', '12', '', 'Price', 'Action'],
  ['Product', 'Color', 'Category', '🐱', 'Category'],
  ['name', 'Color', '🐼', 'Price', 'Product name'],
  ['Product ', 'Product name', 'Category', 'Price', 'Action'],
  [' name', 'Color', 'Price', 'Price', '🐶 name'],
  [' 🐰 ', 'Product', 'Category', 'Product', 'Action'],
  ['Product name', 'Color', 'Category', 'Price', 'Category'],
  ['Product name', 'Color', 'Action', 'Price', 'Action'],
  ['Product', 'Color', 'Category', 'Color', 'Category'],
  ['name', 'Color', '🐭', 'Price', 'Product name'],
  ['Product ', 'Product name', 'Category', 'Price', 'Action'],
  [' 🐦', 'Color', 'Price', 'Price', '🐮 name'],
  [' Price ', 'Product', 'Category', 'Product', 'Action'],
  ['Product name', 'Color', 'Category', 'Price', 'Category'],
  ['Product name', 'Color', 'Action', 'Price', 'Action'],
  ['Product', 'Color', 'Category', 'Color', 'Category'],
  ['name', 'Color', 'Category', 'Price', 'Product name'],
  ['Product ', 'Product name', 'Category', 'Price', 'Action'],
  [' name', 'Color', 'Price', 'Price', 'Product name'],
  [' Price ', 'Category', 'Category', 'Product', 'Action'],
  ['Product name', 'Color', '🦁', 'Price', 'Category'],
  ['Product name', 'Color', 'Action', 'Price', 'Action'],
  ['Product', 'Color', 'Category', 'Color', 'Category'],
  ['name', 'Color', 'Category', 'Price', 'Product name'],
  ['Product ', 'Product name', 'Category', '🐶', '🐻'],
  [' name', 'Color', 'Price', 'Price', 'Product name'],
  [' Price ', 'Product', 'Category', 'Product', 'Action'],
  ['Product name', '🐨', 'Category', 'Price', 'Category'],
  ['Product name', 'Color', 'Action', 'Price', 'Action'],
  ['Product', 'Color', 'Category', 'Color', 'Category'],
  ['name', 'Color', 'Category', 'Price', 'Product name'],
  ['Product ', 'Product name', 'name', 'Price', 'Action'],
  [' name', 'Color', 'Price', 'Price', 'Product name'],
  [' Price ', 'Product', 'Category', 'Product', 'Action'],
  ['Product name', 'Color', '🦊', 'Price', '🐻‍❄️'],
]);

export const selectingsAtom = atom<CoordinateRange>({
  from: { row: 0, col: 0 },
  to: { row: 0, col: 0 },
});
export const hoveringAtom = atom<Coordinate | null>(null);

export const currentOperationAtom = atom<Operation>(null);
