import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Home from './components/home';
import Admin from './components/admin/admin';
import Product from './components/products';
import Adminreg from './components/admin/admin-registartion';
import Protect from './components/protect';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Link to="home">Home</Link>
        <Link to="admin">Admin</Link>
        <Link to="product">Product</Link>
        <Link to="admin-reg">admin</Link>
        <Routes>
          <Route path='/home' element={
            <Protect><Home/></Protect>
          }/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='admin-reg' element={<Adminreg/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
