// interface Props {
//   rows: number;
//   cols: number;
//   children: ReactNode;
// }

import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

import Td from '../components/Td';
import ThCol from '../components/ThCol';
import ThRow from '../components/ThRow';

interface Props {
  data: TableData;
}

export default function TableArea({ data }: Props) {
  const ref = useRef(null);
  const rows = data.length;
  const cols = data[0]?.length ?? 1;

  const rowVirtualizer = useVirtualizer({
    count: rows,
    getScrollElement: () => ref.current,
    estimateSize: () => 20,
    overscan: 5,
  });

  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: cols,
    getScrollElement: () => ref.current,
    estimateSize: () => 20,
    overscan: 5,
  });

  return (
    <section className="relative mb-16 grow overflow-auto pb-8 pr-8">
      <table ref={ref}>
        <thead>
          <tr>
            <th scope="col" className="edge"></th>
            {Array.from({ length: data[0]?.length ?? 1 }).map((_, i) => (
              <ThCol key={i} value={i} />
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {data.map((row, i) => (
            <tr key={i}>
              <ThRow key={i} value={i} />
              {row.map((value, j) => (
                <Td key={j} row={i} col={j} initialValue={value} />
              ))}
            </tr>
          ))} */}
          {rowVirtualizer.getVirtualItems().map(virtualRow => (
            <tr key={virtualRow.index}>
              <ThRow key={virtualRow.index} value={virtualRow.index} />
              {columnVirtualizer.getVirtualItems().map(virtualColumn => (
                <Td
                  key={virtualColumn.index}
                  row={virtualRow.index}
                  col={virtualColumn.index}
                  initialValue={data[virtualRow.index]![virtualColumn.index]!}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
