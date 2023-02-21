import { RxDividerVertical } from 'react-icons/rx';

export default function Footer() {
  return (
    <footer className="bg-bg absolute bottom-0 flex w-full items-center justify-between border-t border-zinc-300 px-4 py-1 text-xs font-medium dark:border-zinc-600">
      <p className="overflow-hidden whitespace-nowrap">
        Total: 16,512 rows, 347 columns, 3,341,218 cells (23 empty)
      </p>

      <div className="shrink-0 overflow-hidden whitespace-nowrap">
        <RxDividerVertical className="-my-1 -mx-0.5 text-xl opacity-50" />
        <span className="cursor-pointer">Comma (,)</span>
        <RxDividerVertical className="-my-1 -mx-0.5 text-xl opacity-50" />
        <span className="cursor-pointer">CRLF</span>
        <RxDividerVertical className="-my-1 -mx-0.5 text-xl opacity-50" />
        <span className="cursor-pointer">UTF-8</span>
      </div>
    </footer>
  );
}
