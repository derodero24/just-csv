import Separator from '../components/Separator';

export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-black/40 px-4 py-1 text-xs font-medium">
      <p className="overflow-hidden whitespace-nowrap">
        Total: 16,512 rows, 347 columns, 3,341,218 cells (23 empty)
      </p>

      <div className="shrink-0 overflow-hidden whitespace-nowrap">
        <Separator />
        <span className="cursor-pointer">Comma (,)</span>
        <Separator />
        <span className="cursor-pointer">CRLF</span>
        <Separator />
        <span className="cursor-pointer">UTF-8</span>
      </div>
    </footer>
  );
}
