import Footer from '../sections/Footer';
import GridArea from '../sections/GridArea';
import TextArea from '../sections/TextArea';
import Toolbar from '../sections/Toolbar';

const data = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'R'],
];

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Toolbar />
      <GridArea rows={data.length} columns={data[0]?.length ?? 1}>
        aq
      </GridArea>
      <TextArea />
      <Footer />
    </div>
  );
}

export default App;
