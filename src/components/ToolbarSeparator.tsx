export default function ToolbarSeparator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1 10"
      className="aspect-square w-4"
    >
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="10"
        className="stroke-black stroke-[0.5] dark:stroke-white/80"
      />
    </svg>
  );
}
