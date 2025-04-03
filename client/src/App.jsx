import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inbox from './pages/Inbox';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inbox />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
