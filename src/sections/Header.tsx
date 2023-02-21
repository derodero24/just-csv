import {
  AiOutlineDeleteColumn,
  AiOutlineDeleteRow,
  AiOutlineInsertRowAbove,
  AiOutlineInsertRowBelow,
  AiOutlineInsertRowLeft,
  AiOutlineInsertRowRight,
} from 'react-icons/ai';
import { RxDividerVertical } from 'react-icons/rx';

import ThemeButton from '../components/ThemeButton';

export default function Header() {
  return (
    <section className="bg-bg z-10 flex h-12 w-full items-center justify-center space-x-12 border-b border-base-border px-4">
      <div className="flex flex-col items-center">
        <div>
          <AiOutlineInsertRowAbove className="cursor-pointer text-xl text-blue-600/90 dark:text-blue-400" />
          <RxDividerVertical className="-mx-1 text-xl opacity-50" />
          <AiOutlineInsertRowBelow className="cursor-pointer text-xl text-blue-600/90 dark:text-blue-400" />
          <RxDividerVertical className="-mx-1 text-xl opacity-50" />
          <AiOutlineInsertRowLeft className="cursor-pointer text-xl text-blue-600/90 dark:text-blue-400" />
          <RxDividerVertical className="-mx-1 text-xl opacity-50" />
          <AiOutlineInsertRowRight className="cursor-pointer text-xl text-blue-600/90 dark:text-blue-400" />
        </div>
        <p className="text-2xs font-medium">Insert Row / Column</p>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <AiOutlineDeleteRow className="cursor-pointer text-xl text-red-600/90 dark:text-red-400" />
          <RxDividerVertical className="-mx-0.5 text-xl opacity-50" />
          <AiOutlineDeleteColumn className="cursor-pointer text-xl text-red-600/90 dark:text-red-400" />
        </div>
        <p className="text-2xs font-medium">Delete Row / Column</p>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <ThemeButton className="cursor-pointer text-lg" />
        </div>
        <p className="text-2xs font-medium">Theme</p>
      </div>
    </section>
  );
}
