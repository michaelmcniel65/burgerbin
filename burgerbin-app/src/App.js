import './App.css';
import Home from "./components/Home"
import { BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
      <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
      </div>
  );
}

export default App;