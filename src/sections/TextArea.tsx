export default function TextArea() {
  return (
    <section className="flex h-12 items-center">
      <p className="ml-12 mr-1 text-sm font-medium">Text:</p>
      <textarea className="h-full grow resize-none bg-black/80 px-1 py-0.5 text-sm leading-[1.1] text-white" />
    </section>
  );
}
