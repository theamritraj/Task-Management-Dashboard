import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Home from './pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>

      <Navbar />
      <Sidebar/>
      <Home/>
    </DndProvider>
  );
}

export default App;
