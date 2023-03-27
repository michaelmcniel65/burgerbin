import './App.css';
import Login from './components/common/Login';
import Home from "./components/Home"
import StartPage from './components/StartPage';
import Signup from './components/common/Signup';
import { BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { app } from './firebase/firebase-config';
import { getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from './components/ProfilePage';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if(authToken) {
      navigate('/home')
    }
  }, [])

  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/profile')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        }).catch((error) => {
          if(error.code === 'auth/email-already-in-use') {
            toast.error('Email already in use.')
          }
        })
    }
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      }).catch((error) => {
        if(error.code === 'auth/wrong-password') {
          toast.error('Invalid password.');
        }
        if(error.code === 'auth/user-not-found') {
          toast.error("User does not exist.");
        }
      })
    }
  }

  return (
      <div className='App'>
        <>
          <ToastContainer />
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/login' element={<Login title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)} />} />
            <Route path='/register' element={<Signup title="Sign Up" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </>
      </div>
  );
}

export default App;