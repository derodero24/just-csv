import { useAtom, useAtomValue } from 'jotai';

import { hoveringAtom, selectingsAtom } from '../stores/table';

interface Props {
  scope: 'row' | 'col';
  value: number;
}

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

export default function Th({ scope, value }: Props) {
  const [selectings, _] = useAtom(selectingsAtom);
  const hovering = useAtomValue(hoveringAtom);

  // console.log(Date.now(), scope, value);

  const hovered =
    value === (scope === 'row' ? hovering?.row : hovering?.column);
  const selected =
    value === (scope === 'row' ? selectings.row : selectings.column);

  return (
    <th
      scope={scope}
      className={
        (scope === 'row' ? 'scorpe-row' : 'scorpe-col') +
        (hovered ? ' hovered' : '') +
        (selected ? ' selected' : '')
      }
    >
      {scope === 'row' ? value + 1 : numberToAlphabet(value + 1, '')}
    </th>
  );
}
