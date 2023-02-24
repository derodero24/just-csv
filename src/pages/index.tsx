import { open } from '@tauri-apps/api/dialog';
import { readBinaryFile } from '@tauri-apps/api/fs';
import { parse } from 'csv-parse/sync';
import Encoding from 'encoding-japanese';
import { atom, useSetAtom } from 'jotai';
import { useEffect, useRef } from 'react';

import Footer from '../sections/Footer';
import Header from '../sections/Header';
import TableArea from '../sections/TableArea';
import TextArea from '../sections/TextArea';
import { tableDataAtom } from '../stores/table';

const initialData = [
  ['Product Product', '12', '', 'Price', 'Action'],
  ['Product', 'Color', 'Category', '🐱', 'Category'],
  ['name', 'Color', '🐼', 'Price', 'Product name'],
  ['Product ', 'Product name', 'Category', 'Price', 'Action'],
  [' name', 'Color', 'Price', 'Price', '🐶 name'],
  [' 🐰 ', 'Product', 'Category', 'Product', 'Action'],
  ['Product name', 'Color', 'Category', 'Price', 'Category'],
  ['Product name', 'Color', 'Action', 'Price', 'Action'],
  ['Product', 'Color', 'Category', 'Color', 'Category'],
  ['name', 'Color', '🐭', 'Price', 'Product name'],
  ['Product ', 'Product name', 'Category', 'Price', 'Action'],
  [' 🐦', 'Color', 'Price', 'Price', '🐮 name'],
  [' Price ', 'Product', 'Category', 'Product', 'Action'],
  ['Product name', 'Color', 'Category', 'Price', 'Category'],
  ['Product name', 'Color', 'Action', 'Price', 'Action'],
  ['Product', 'Color', 'Category', 'Color', 'Category'],
  ['name', 'Color', 'Category', 'Price', 'Product name'],
  ['Product ', 'Product name', 'Category', 'Price', 'Action'],
  [' name', 'Color', 'Price', 'Price', 'Product name'],
  [' Price ', 'Category', 'Category', 'Product', 'Action'],
  ['Product name', 'Color', '🦁', 'Price', 'Category'],
  ['Product name', 'Color', 'Action', 'Price', 'Action'],
  ['Product', 'Color', 'Category', 'Color', 'Category'],
  ['name', 'Color', 'Category', 'Price', 'Product name'],
  ['Product ', 'Product name', 'Category', '🐶', '🐻'],
  [' name', 'Color', 'Price', 'Price', 'Product name'],
  [' Price ', 'Product', 'Category', 'Product', 'Action'],
  ['Product name', '🐨', 'Category', 'Price', 'Category'],
  ['Product name', 'Color', 'Action', 'Price', 'Action'],
  ['Product', 'Color', 'Category', 'Color', 'Category'],
  ['name', 'Color', 'Category', 'Price', 'Product name'],
  ['Product ', 'Product name', 'name', 'Price', 'Action'],
  [' name', 'Color', 'Price', 'Price', 'Product name'],
  [' Price ', 'Product', 'Category', 'Product', 'Action'],
  ['Product name', 'Color', '🦊', 'Price', '🐻‍❄️'],
];

function App() {
  const setData = useSetAtom(tableDataAtom);
  const isDialogOpened = useRef(false);

  useEffect(() => {
    setData(initialData.map(row => row.map(value => atom(value))));
  }, [setData]);

  useEffect(() => {
    if (isDialogOpened.current) return;
    isDialogOpened.current = true;

    open({
      filters: [{ name: 'CSV', extensions: ['csv'] }],
      multiple: false,
    })
      .then(filepath => {
        console.log(filepath);

        if (Array.isArray(filepath)) {
          // user selected multiple files
        } else if (filepath === null) {
          // user cancelled the selection
        } else {
          // user selected a single file
          // const a = readFileSync(filepath);
          // const b = a.toString();
          // console.log(b);
        }

        // return invoke('load_csv', { filepath });
        return readBinaryFile(filepath as string);
      })
      .then(data => {
        console.log(data);
        const detectedEncoding = Encoding.detect(data);
        if (detectedEncoding) {
          const a = Encoding.convert(data, {
            from: detectedEncoding,
            to: 'UNICODE',
          });
          console.log(a);

          const str = Encoding.codeToString(a);
          console.log(str);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return parse(str) as string[][];
        }

        // console.log('Character encoding is', detectedEncoding);
        return [[]];
      })
      .then(res => {
        // console.log(Date.now() - start);
        setData(res.map(row => row.map(value => atom(value))));
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => (isDialogOpened.current = false));
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <TableArea />
      <TextArea />
      <Footer />
    </div>
  );
}

export default App;
