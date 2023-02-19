import type { ReactNode } from 'react';

interface Props {
  rows: number;
  columns: number;
  children: ReactNode;
}

export default function GridArea({ rows, columns, children }: Props) {
  return (
    <section className="relative flex grow" id="grid">
      <ul className="w-10 min-w-fit border-r border-white/50 bg-neutral-700 text-xs">
        <li className="border-b border-white/50 py-0.5 text-center"> </li>
        {Array.from({ length: rows }).map((_, i) => (
          <li
            key={i}
            className="cursor-pointer border-b border-white/50 py-0.5 text-center hover:bg-neutral-600"
          >
            {i}
          </li>
        ))}
      </ul>

      <div className="flex grow flex-col">
        <ul className="flex border-b border-white/50 bg-neutral-700 text-xs">
          {Array.from({ length: columns }).map((_, i) => (
            <li
              key={i}
              className="w-16 cursor-pointer border-r border-white/50 py-0.5 text-center hover:bg-neutral-600"
            >
              {i}
            </li>
          ))}
        </ul>
        <div className="grow">{children}</div>
      </div>
    </section>
  );
}
