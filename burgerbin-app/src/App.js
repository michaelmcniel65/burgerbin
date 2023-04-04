import './App.css';
import Home from "./components/Home"
import { BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from './components/ProfilePage';
import AuthContext from './context/AuthContext';

function App() {
  return (
      <div className='App'>
        <AuthContext>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </AuthContext>
      </div>
  );
}

export default App;