import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home';
import Adminreg from './components/admin/wp-admin';
import Dashboard from './components/admin/dashboard';
import Protect from './components/protect';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/dashboard" element={
          <Protect>
            <Dashboard/>
          </Protect>
          }/>
          <Route path='wp-admin' element={<Adminreg/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
