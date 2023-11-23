interface Props {
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

export default function ThCol({ value }: Props) {
  return (
    <th scope="col" id={`th-col-${value}`} className="scorpe-col">
      {numberToAlphabet(value + 1, '')}
    </th>
  );
}
