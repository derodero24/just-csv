// interface Props {
//   rows: number;
//   columns: number;
//   children: ReactNode;
// }

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
  return (
    <section className="relative mb-16 grow overflow-auto">
      <table>
        <thead>
          <tr>
            <th scope="col" className="edge"></th>
            {Array.from({ length: data[0]?.length ?? 1 }).map((_, i) => (
              <th key={i} scope="col" className="scorpe-col">
                {numberToAlphabet(i + 1, '')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <th scope="row" className="scorpe-row">
                {i + 1}
              </th>
              {row.map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ul className="w-10 min-w-fit bg-neutral-700 text-xs">
        <li className="py-0.5 text-center"> </li>
        {Array.from({ length: rows }).map((_, i) => (
          <li key={i} className="relative px-1">
            <span className="justify-cente flex h-12 w-full cursor-pointer items-center text-center hover:bg-neutral-600">
              {i}starstarsatsrtars
            </span>
            <Separator
              type="horizontal"
              className="absolute left-0 bottom-[-0.25rem] z-10 w-full cursor-ns-resize py-1"
            />
          </li>
        ))}
      </ul> */}

      {/* <div className="flex grow flex-col">
        <ul className="flex border-b border-white/50 bg-neutral-700 text-xs">
          {Array.from({ length: columns }).map((_, i) => (
            <li key={i} className="relative">
              <span className="w-16 cursor-pointer py-0.5 text-center hover:bg-neutral-600">
                {i}
              </span>
              <Separator
                type="vertical"
                className="absolute right-[-0.25rem] top-0 z-10 h-full cursor-ew-resize px-1"
              />
            </li>
          ))}
        </ul>
        <div className="grow">{children}</div>
      </div> */}
    </section>
  );
}
