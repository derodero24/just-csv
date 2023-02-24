import { atom } from 'jotai';

export const tableDataAtom = atom([
  [
    atom('Product Product'),
    atom('12'),
    atom(''),
    atom('Price'),
    atom('Action'),
  ],
  [
    atom('Product'),
    atom('Color'),
    atom('Category'),
    atom('🐱'),
    atom('Category'),
  ],
]);

export const selectingsAtom = atom<Coordinate>({ row: 0, column: 0 });
export const hoveringAtom = atom<Coordinate | null>(null);

export const currentOperationAtom = atom<Operation>(null);
