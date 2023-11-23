interface Props {
  value: number;
}

export default function ThRow({ value }: Props) {
  return (
    <th scope="row" id={`th-row-${value}`} className="scorpe-row">
      {value + 1}
    </th>
  );
}
