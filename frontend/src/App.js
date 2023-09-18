import logo from './logo.svg';
import Home from './components/MainPage/home'
import Navbar from './components/MainPage/navbar'
import Register from './components/MainPage/register';
import Upload from './components/Government/upload';
import Analytics from './components/Government/analytics'
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Register/> */}
      {/* <Upload/> */}
      <Analytics/>  
    </div>
  );
}

export default App;
