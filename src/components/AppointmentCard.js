function AppointmentCard({ appointment, cancelAppointment }) {
  const statusClass = appointment.status === "Booked" ? "booked" : "cancelled";

  return (
    <tr>
      <td className="td-name">{appointment.name}</td>
      <td>{appointment.type}</td>
      <td>{appointment.subType}</td>
      <td>
        {appointment.date
          ? new Date(appointment.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "—"}
      </td>
      <td>{appointment.time}</td>
      <td>
        <span className={`status-badge ${statusClass}`}>
          {appointment.status}
        </span>
      </td>
      <td>
        {appointment.status === "Booked" && (
          <button
            className="btn-cancel"
            onClick={() => cancelAppointment(appointment)}
          >
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
}

export default AppointmentCard;