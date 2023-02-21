import Footer from '../sections/Footer';
import Header from '../sections/Header';
import TableArea from '../sections/TableArea';
import TextArea from '../sections/TextArea';

function App() {
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
