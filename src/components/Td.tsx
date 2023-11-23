import { useSetAtom } from 'jotai';

import { selectingsAtom } from '../stores/table';

interface Props {
  row: number;
  col: number;
  initialValue: string;
}

export default function Td({ row, col, initialValue }: Props) {
  const setSelectings = useSetAtom(selectingsAtom);
  // const setHovering = useSetAtom(hoveringAtom);

  // console.log(Date.now(), row, col);

  const onMouseOver = () => {
    // document.getElementById(`th-row-${row}`)?.classList.add('hovered');
    // document.getElementById(`th-col-${col}`)?.classList.add('hovered');
  };

  const onMouseLeave = () => {
    // document.getElementById(`th-row-${row}`)?.classList.remove('hovered');
    // document.getElementById(`th-col-${col}`)?.classList.remove('hovered');
  };

  const onMouseDown = () => {
    // setSelectings(prev => {
    //   // Reset previous
    //   document
    //     .getElementById(`td-${prev.from.row}-${prev.from.col}`)
    //     ?.classList.remove('selected');
    //   document
    //     .getElementById(`th-row-${prev.from.row}`)
    //     ?.classList.remove('selected');
    //   document
    //     .getElementById(`th-col-${prev.from.col}`)
    //     ?.classList.remove('selected');
    //   // Setup new
    //   document.getElementById(`td-${row}-${col}`)?.classList.add('selected');
    //   document.getElementById(`th-row-${row}`)?.classList.add('selected');
    //   document.getElementById(`th-col-${col}`)?.classList.add('selected');
    //   return {
    //     from: { row, col },
    //     to: { row, col },
    //   };
    // });
    // setSelectings({ row, col });
    // document.getElementById('')
  };

  return (
    <td
      id={`td-${row}-${col}`}
      className={`row-${row} col-${col}`}
      // className={
      //   row === selectings.row && col === selectings.col ? 'selected' : ''
      // }
      // contentEditable={i === editing?.row && j === editing.col}
      // suppressContentEditableWarning={true}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      // onDoubleClick={() => onDoubleClick(i, j)}
      // contentEditable
    >
      {initialValue}
      <span className="selection-border selection-border-t" />
      <span className="selection-border selection-border-b" />
      <span className="selection-border selection-border-l" />
      <span className="selection-border selection-border-r" />
      <span className="selection-chip" />
    </td>
  );
}
