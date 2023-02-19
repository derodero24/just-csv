interface Props {
  type:
    | 'insert-above'
    | 'insert-below'
    | 'insert-left'
    | 'insert-right'
    | 'delete-row'
    | 'delete-col';
}

export default function ToolbarGridIcon({ type }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 154 154"
      className="w-5 cursor-pointer"
    >
      <g>
        <path
          d="M2 2h50v50h-50z"
          style={{
            fill:
              type === 'insert-above' || type === 'insert-left'
                ? 'blue'
                : 'transparent',
          }}
        />
        <path
          d="M52 2h50v50h-50z"
          style={{
            fill:
              type === 'insert-above'
                ? 'blue'
                : type === 'delete-col'
                ? 'red'
                : 'transparent',
          }}
        />
        <path
          d="M102 2h50v50h-50z"
          style={{
            fill:
              type === 'insert-above' || type === 'insert-right'
                ? 'blue'
                : 'transparent',
          }}
        />

        <path
          d="M2 52h50v50h-50z"
          style={{
            fill:
              type === 'insert-left'
                ? 'blue'
                : type === 'delete-row'
                ? 'red'
                : 'transparent',
          }}
        />
        <path
          d="M52 52h50v50h-50z"
          style={{
            fill:
              type === 'delete-row' || type === 'delete-col'
                ? 'red'
                : 'transparent',
          }}
        />
        <path
          d="M102 52h50v50h-50z"
          style={{
            fill:
              type === 'insert-right'
                ? 'blue'
                : type === 'delete-row'
                ? 'red'
                : 'transparent',
          }}
        />

        <path
          d="M2 102h50v50h-50z"
          style={{
            fill:
              type === 'insert-below' || type === 'insert-left'
                ? 'blue'
                : 'transparent',
          }}
        />
        <path
          d="M52 102h50v50h-50z"
          style={{
            fill:
              type === 'insert-below'
                ? 'blue'
                : type === 'delete-col'
                ? 'red'
                : 'transparent',
          }}
        />
        <path
          d="M102 102h50v50h-50z"
          style={{
            fill:
              type === 'insert-below' || type === 'insert-right'
                ? 'blue'
                : 'transparent',
          }}
        />
      </g>
      <g className="fill-none stroke-black stroke-[4] dark:stroke-white">
        <path d="M2 2h150v150h-150z" />
        <path d="M52 2v150M102 2v150M2 102h150m-150-50h150" />
      </g>
    </svg>
  );
}
