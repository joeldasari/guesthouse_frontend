import "./App.css";
import { Navbar } from "./components/Navbar";
import { HodRegister } from "./pages/HodRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { HodLogin } from "./pages/HodLogin";
import { Booked } from "./components/Booked";
import { SubmitForm } from "./components/SubmitForm";
import { AdminPanel } from "./components/AdminPanel";
import { LandingPage } from "./components/LandingPage";
import { HodUpdates } from "./components/HodUpdates";
import { HodHome } from "./components/HodHome";
import { AcceptedList } from "./components/AcceptedList";
import { RejectedList } from "./components/RejectedList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hodHome" element={<HodHome />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/hodRegister" element={<HodRegister />} />
          <Route path="/hodLogin" element={<HodLogin />} />
          <Route path="/booked" element={<Booked />} />
          <Route path="/submitForm" element={<SubmitForm />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
          <Route path="/updatesPanel" element={<HodUpdates />} />
          <Route path="/acceptedList" element={<AcceptedList />} />
          <Route path="/rejectedList" element={<RejectedList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
