import { open } from '@tauri-apps/api/dialog';
import { invoke } from '@tauri-apps/api/tauri';
import { useEffect, useRef, useState } from 'react';

import Footer from '../sections/Footer';
import Header from '../sections/Header';
import TableArea from '../sections/TableArea';
import TextArea from '../sections/TextArea';

function App() {
  const isDialogOpened = useRef(false);
  const [data, setData] = useState<TableData>([['']]);

  useEffect(() => {
    // Prevent duplicate dialogs.
    if (isDialogOpened.current) return;
    isDialogOpened.current = true;

    open({
      filters: [{ name: 'CSV', extensions: ['csv'] }],
      multiple: false,
    })
      .then(filepath =>
        filepath ? invoke<TableData>('read', { filepath }) : [['']],
      )
      .then(records => setData(records))
      .catch(console.error)
      .finally(() => (isDialogOpened.current = false));
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <TableArea data={data} />
      <TextArea />
      <Footer />
    </div>
  );
}

export default App;
