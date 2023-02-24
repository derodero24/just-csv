// interface Props {
//   rows: number;
//   columns: number;
//   children: ReactNode;
// }

import { useAtom } from 'jotai';

import Td from '../components/Td';
import Th from '../components/Th';
import { tableDataAtom } from '../stores/table';

// const config = {
//   rowHeaderWidth: '16rem',
//   rowHeight: 16,
//   colWidth: '16rem',
// };

export default function TableArea() {
  const [data] = useAtom(tableDataAtom);

  // const [editing, setEditing] = useState<Coordinate>();
  // console.log(Date.now());

  // const onDoubleClick = (row: number, col: number) => {
  //   setEditing({ row, col });
  // };

  return (
    <section className="relative mb-16 grow overflow-auto pb-8 pr-8">
      <table>
        <thead>
          <tr>
            <th scope="col" className="edge"></th>
            {Array.from({ length: data[0]?.length ?? 1 }).map((_, i) => (
              <Th key={i} scope="col" value={i} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <Th key={i} scope="row" value={i} />
              {row.map((atom, j) => (
                <Td key={j} atom={atom} row={i} column={j} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
