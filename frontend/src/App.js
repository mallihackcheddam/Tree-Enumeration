import logo from "./logo.svg";
import Home from "./components/MainPage/Home";
import UserRegister from "./components/MainPage/UserRegister";
import Upload from "./components/UserAgency/Upload";
import AnalyticsMain from "./components/Government/AnalyticsMain";
import GovtHome from "./components/Government/GovtHome";
import UserSessions from "./components/Government/UserSessions";
import NodalHome from "./components/NodalOfficer/NodalHome";
import UserLog from "./components/NodalOfficer/UserLog";
import UserAnalytics from "./components/UserAgency/UserAnalytics";
import UserHome from "./components/UserAgency/UserHome";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react";
export const UserContext = createContext();



function App() {

  const [email, setEmail] = useState('');
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Register/> */}
      {/* <Upload/> */}
      {/* <AnalyticsMain/>   */}
      <BrowserRouter>
      <UserContext.Provider value = {{email, setEmail}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/user/upload" element={<Upload />} />
          <Route path="/government/analytics" element={<AnalyticsMain />} />
          <Route path="/government/home" element={<GovtHome />} />
          <Route path="/government/usersessions" element={<UserSessions />} />
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/nodal/home" element={<NodalHome />} />
          <Route path="/user/analytics" element={<UserAnalytics />} />
          <Route path="/nodal/usercheck" element={<UserLog />} />
        </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
