import { useState, useEffect } from "react";
import slots from "../data/slots";
import SlotCard from "../components/SlotCard";
import BookingForm from "../components/BookingForm";
import LoadingSpinner from "../components/LoadingSpinner";

function BookAppointment({ appointments, setAppointments }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const addAppointment = (appointment) => {
    const exists = appointments.find(
      (a) =>
        new Date(a.date).toDateString() === new Date(appointment.date).toDateString() &&
        a.time === appointment.time &&
        a.status === "Booked"
    );

    if (exists) {
      alert("This slot is already booked for the selected date.");
      return;
    }

    setAppointments([...appointments, appointment]);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="overline">Step 1 of 2</div>
        <h2>Choose a Time Slot</h2>
        <p>Select an available slot, then fill in your details to confirm.</p>
      </div>

      <div className="slot-grid">
        {slots.map((time, index) => {
          const isBooked = appointments.some(
            (a) => a.time === time && a.status === "Booked"
          );
          return (
            <SlotCard
              key={index}
              time={time}
              onSelect={setSelectedTime}
              disabled={isBooked}
            />
          );
        })}
      </div>

      {selectedTime && (
        <BookingForm
          selectedTime={selectedTime}
          addAppointment={addAppointment}
          onClose={() => setSelectedTime(null)}
        />
      )}
    </div>
  );
}

export default BookAppointment;