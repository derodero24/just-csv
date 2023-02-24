import { PrimitiveAtom, useAtom, useSetAtom } from 'jotai';

import { hoveringAtom, selectingsAtom } from '../stores/table';

interface Props {
  atom: PrimitiveAtom<string>;
  row: number;
  column: number;
}

export default function Td({ atom, row, column }: Props) {
  const [value, _] = useAtom(atom);
  const [selectings, setSelectings] = useAtom(selectingsAtom);
  const setHovering = useSetAtom(hoveringAtom);

  // console.log(Date.now(), row, column);

  const onMouseOver = () => {
    setHovering({ row, column });
  };

  const onMouseLeave = () => {
    setHovering(null);
  };

  const onMouseDown = () => {
    setSelectings({ row, column });
  };

  return (
    <td
      className={
        row === selectings.row && column === selectings.column ? 'selected' : ''
      }
      // contentEditable={i === editing?.row && j === editing.col}
      // suppressContentEditableWarning={true}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      // onDoubleClick={() => onDoubleClick(i, j)}
    >
      {value}
      <span className="selection-border selection-border-t" />
      <span className="selection-border selection-border-b" />
      <span className="selection-border selection-border-l" />
      <span className="selection-border selection-border-r" />
      <span className="selection-chip" />
    </td>
  );
}
