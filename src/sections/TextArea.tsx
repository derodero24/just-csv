import type { ChangeEvent } from 'react';

export default function TextArea() {
  const onChage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  return (
    <section className="bg-bg absolute bottom-6 flex h-10 w-full items-center border-t border-base-border">
      <p className="ml-12 mr-2 text-sm font-medium">Text</p>
      <textarea
        // value={String(data[selectings.row]?.[selectings.col] ?? '')}
        className="h-full grow resize-none border-l border-base-border bg-zinc-100 px-1 py-0.5 text-sm leading-[1.1] outline-none dark:bg-zinc-800"
        onChange={onChage}
      />
    </section>
  );
}
