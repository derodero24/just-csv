// interface Props {
//   rows: number;
//   columns: number;
//   children: ReactNode;
// }

import { useState } from 'react';

const data = [
  ['Product Product', 'Color', 'Action', 'Price', 'Action'],
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
];

// const config = {
//   rowHeaderWidth: '16rem',
//   rowHeight: 16,
//   colWidth: '16rem',
// };

const numberToAlphabet = (num: number, progress: string): string => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let charIndex = num % alphabet.length;
  let quotient = num / alphabet.length;
  if (charIndex - 1 == -1) {
    charIndex = alphabet.length;
    quotient--;
  }
  const newProgress = alphabet.charAt(charIndex - 1) + progress;
  return quotient >= 1 ? numberToAlphabet(quotient, newProgress) : newProgress;
};

export default function TableArea() {
  const [hovered, setHovered] = useState<Coordinate>();

  const onMouseOver = (row: number, col: number) => {
    setHovered({ row, col });
  };

  const onMouseLeave = () => {
    setHovered(undefined);
  };

  return (
    <section className="relative mb-16 grow overflow-auto">
      <table>
        <thead>
          <tr>
            <th scope="col" className="edge"></th>
            {Array.from({ length: data[0]?.length ?? 1 }).map((_, i) => (
              <th
                key={i}
                scope="col"
                className={
                  'scorpe-col ' + (i === hovered?.col ? 'hovered' : '')
                }
              >
                {numberToAlphabet(i + 1, '')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <th
                scope="row"
                className={
                  'scorpe-row ' + (i === hovered?.row ? 'hovered' : '')
                }
              >
                {i + 1}
              </th>
              {row.map((val, j) => (
                <td
                  key={j}
                  onMouseOver={() => onMouseOver(i, j)}
                  onMouseLeave={onMouseLeave}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
