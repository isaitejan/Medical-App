import './App.css';
// import Home from './components/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import EditForm from './components/EditForm';
import AddForm from './components/AddForm';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Medical-App' element={<Main />} />
          <Route path='/AddBill' element={<AddForm />} />
          <Route path='/EditForm' element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
