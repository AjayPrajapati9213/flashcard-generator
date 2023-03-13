

import MyFlashcard from './components/Flashcards/myFlashcard';
import CreateFlashcard from './components/Main/createFlash';
import DetailFlashcard from './components/Flashcards/detailFlashcard';
import Navbar from './components/NavBar';
import { Route,Routes,} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector((state) => state.displayAllCards)
  return (
    
    <div className="bg-gray-100 min-h-screen" id='app'>
    <Navbar />
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <Routes>
        <Route path="/" element={<CreateFlashcard />} />
        <Route path="my-flashcards" element={<MyFlashcard />} />
        <Route path={`/flashcard-${state}`} element={<DetailFlashcard />} />
      </Routes>
    </div>
  </div>

  
     
    
  );
}

export default App;
