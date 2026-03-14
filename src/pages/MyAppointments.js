import AppointmentCard from "../components/AppointmentCard";
import { Link } from "react-router-dom";

function MyAppointments({ appointments, setAppointments }) {
  const cancelAppointment = (appointment) => {
    const updated = appointments.map((a) =>
      a === appointment ? { ...a, status: "Cancelled" } : a
    );
    setAppointments(updated);
  };

  const booked = appointments.filter((a) => a.status === "Booked").length;
  const cancelled = appointments.filter((a) => a.status === "Cancelled").length;

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="overline">Your Records</div>
        <h2>My Appointments</h2>
        <p>
          {booked} active &nbsp;·&nbsp; {cancelled} cancelled &nbsp;·&nbsp; {appointments.length} total
        </p>
      </div>

      {appointments.length === 0 ? (
        <div className="appointments-table-wrap">
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <p>No appointments yet.</p>
            <Link to="/book" style={{ color: "var(--gold)", fontWeight: 600, fontSize: "0.88rem", marginTop: "0.5rem", display: "inline-block" }}>
              Book your first appointment →
            </Link>
          </div>
        </div>
      ) : (
        <div className="appointments-table-wrap">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Type</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <AppointmentCard
                  key={index}
                  appointment={appointment}
                  cancelAppointment={cancelAppointment}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyAppointments;