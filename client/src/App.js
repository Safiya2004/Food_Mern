// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter ,Routes, Route , Link , Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/cart' element={<CartScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/orders' element={<OrderScreen/>}/>
      <Route path='/admin/*' element={<AdminScreen/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
