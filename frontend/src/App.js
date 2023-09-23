import logo from './logo.svg';
import Home from './components/MainPage/Home'
import Navbar from './components/MainPage/Navbar'
import Register from './components/MainPage/Register';
import Upload from './components/Government/Upload';
import Analytics from './components/Government/Analytics'
import AnalyticsMain from './components/Government/AnalyticsMain'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Register/> */}
      {/* <Upload/> */}
      {/* <AnalyticsMain/>   */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/government/upload" element={<Upload/>} />
          <Route path="/government/analytics" element={<AnalyticsMain/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
