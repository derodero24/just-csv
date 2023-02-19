import Separator from '../components/Separator';
import ToolbarGridIcon from '../components/ToolbarGridIcon';

export default function Toolbar() {
  return (
    <section className="flex justify-center space-x-12 border-b border-black/40 py-1 px-4">
      <div className="flex flex-col items-center space-y-1">
        <div>
          <ToolbarGridIcon type="insert-above" />
          <Separator />
          <ToolbarGridIcon type="insert-below" />
          <Separator />
          <ToolbarGridIcon type="insert-left" />
          <Separator />
          <ToolbarGridIcon type="insert-right" />
        </div>
        <p className="text-2xs">Insert Rows / Columns</p>
      </div>

      <div className="flex flex-col items-center space-y-1">
        <div>
          <ToolbarGridIcon type="delete-row" />
          <Separator />
          <ToolbarGridIcon type="delete-col" />
        </div>
        <p className="text-2xs">Delete Rows / Columns</p>
      </div>
    </section>
  );
}
