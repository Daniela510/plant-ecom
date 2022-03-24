import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';


function App() {
  return (
    <>
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element ={<Main/>} />
        <Route path='/login' element ={<Login/>} />
        <Route path='/register' element ={<Register />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;