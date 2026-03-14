import { useState } from "react";
import appointmentTypes from "../data/appointmentTypes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Confetti from "react-confetti";

function BookingForm({ selectedTime, addAppointment, onClose }) {
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ ...form, type, subType, date: selectedDate, time: selectedTime, status: "Booked" });
    setSuccess(true);
  };

  return (
    <>
      <div className="modal-overlay">
        {success ? (
          <>
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={220}
              recycle={false}
              colors={["#c9a84c", "#e8c97a", "#0a1628", "#1d3461", "#f5e9c8"]}
            />
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h2>Appointment Confirmed</h2>
              <p className="subtitle">We'll send a reminder before your visit.</p>

              <div className="success-details">
                <div className="success-detail-row">
                  <span className="detail-label">Patient</span>
                  <span className="detail-value">{form.name}</span>
                </div>
                <div className="success-detail-row">
                  <span className="detail-label">Service</span>
                  <span className="detail-value">{type} – {subType}</span>
                </div>
                <div className="success-detail-row">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">
                    {selectedDate?.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                  </span>
                </div>
                <div className="success-detail-row">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{selectedTime}</span>
                </div>
              </div>

              <button className="btn-done" onClick={onClose}>
                Done
              </button>
            </div>
          </>
        ) : (
          <form className="modal-card" onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4>Book Appointment</h4>
              <button type="button" className="modal-close" onClick={onClose}>✕</button>
            </div>

            <div className="selected-time-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Time Slot: {selectedTime}
            </div>

            {/* Type & SubType */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label-custom">Category</label>
                <select
                  className="form-control-custom"
                  value={type}
                  required
                  onChange={(e) => { setType(e.target.value); setSubType(""); }}
                >
                  <option value="">Select type</option>
                  {Object.keys(appointmentTypes).map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label-custom">Service</label>
                <select
                  className="form-control-custom"
                  value={subType}
                  required
                  disabled={!type}
                  onChange={(e) => setSubType(e.target.value)}
                >
                  <option value="">Select service</option>
                  {type && appointmentTypes[type].map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Info */}
            <div className="form-group">
              <label className="form-label-custom">Full Name</label>
              <input className="form-control-custom" placeholder="" name="name" required onChange={handleChange} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label-custom">Email</label>
                <input className="form-control-custom" type="email" placeholder="" name="email" required onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label-custom">Phone</label>
                <input className="form-control-custom" placeholder="" name="phone" required onChange={handleChange} />
              </div>
            </div>

            {/* Date */}
            <div className="form-group">
              <label className="form-label-custom">Appointment Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Choose a date"
                minDate={new Date()}
                dateFormat="dd MMM yyyy"
                required
              />
            </div>

            {/* Notes */}
            <div className="form-group">
              <label className="form-label-custom">Notes (optional)</label>
              <textarea className="form-control-custom" placeholder="Any special requirements..." name="notes" onChange={handleChange} />
            </div>

            <button className="btn-submit" type="submit">
              <span>Confirm Booking</span>
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default BookingForm;