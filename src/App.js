import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';

function App() {
  return (
 <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<LoginPage/>}/>
  <Route path='/homepage' element={<HomePage/>}/>
</Routes>
</BrowserRouter>
 </>
  );
}

export default App;
