import ToolbarGridIcon from '../components/ToolbarGridIcon';
import ToolbarSeparator from '../components/ToolbarSeparator';

export default function Toolbar() {
  return (
    <section className="flex justify-center space-x-12 py-1 px-4">
      <div className="flex flex-col items-center space-y-1">
        <div>
          <ToolbarGridIcon type="insert-above" />
          <ToolbarSeparator />
          <ToolbarGridIcon type="insert-below" />
          <ToolbarSeparator />
          <ToolbarGridIcon type="insert-left" />
          <ToolbarSeparator />
          <ToolbarGridIcon type="insert-right" />
        </div>
        <p className="text-2xs">Insert Rows/Cols</p>
      </div>

      <div className="flex flex-col items-center space-y-1">
        <div>
          <ToolbarGridIcon type="delete-row" />
          <ToolbarSeparator />
          <ToolbarGridIcon type="delete-col" />
        </div>
        <p className="text-2xs">Delete Rows/Cols</p>
      </div>
    </section>
  );
}
