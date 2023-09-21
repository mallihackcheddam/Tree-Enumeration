import logo from './logo.svg';
import Home from './components/MainPage/home'
import Navbar from './components/MainPage/navbar'
import Register from './components/MainPage/register';
import Upload from './components/Government/upload';
import Analytics from './components/Government/analytics'
import AnalyticsMain from './components/Government/analyticsMain'
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
