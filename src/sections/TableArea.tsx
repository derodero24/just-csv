import type { ReactNode } from 'react';

interface Props {
  rows: number;
  columns: number;
  children: ReactNode;
}

export default function TableArea({ columns, children }: Props) {
  const config = {
    rowHeaderWidth: '16rem',
    rowHeight: 16,
    colWidth: '16rem',
  };

  return (
    <section className="relative mb-16 flex grow overflow-auto">
      <ul id="row" className="flex">
        {Array.from({ length: columns }).map((_, i) => (
          <li
            key={i}
            className="relative"
            style={{ height: `${config.rowHeight}px` }}
          >
            <span className="cursor-pointer text-center hover:bg-neutral-600">
              {i}
            </span>
            {/* <Separator
                type="vertical"
                className="absolute right-[-0.25rem] top-0 z-10 h-full cursor-ew-resize px-1"
              /> */}
          </li>
        ))}
      </ul>

      <div className="bg-white/10">
        <div id="column"></div>
        {children}sar
      </div>

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
