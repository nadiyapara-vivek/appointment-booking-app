import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";

function App() {

  const [appointments, setAppointments] = useState([]);

  // Load data from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("appointments");

    if (saved) {
      setAppointments(JSON.parse(saved));
    }
  }, []);

  // Save data to LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );
  }, [appointments]);

  return (

    <Router>

      <Navbar />

      <div className="container mt-4">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/book"
            element={
              <BookAppointment
                appointments={appointments}
                setAppointments={setAppointments}
              />
            }
          />

          <Route
            path="/appointments"
            element={
              <MyAppointments
                appointments={appointments}
                setAppointments={setAppointments}
              />
            }
          />

        </Routes>

      </div>

    </Router>
  );
}

export default App;