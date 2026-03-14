function SlotCard({ time, onSelect, disabled }) {
  return (
    <div className={`slot-card ${disabled ? "slot-disabled" : ""}`}>
      <div className="slot-time">{time}</div>

      <span className={`slot-badge ${disabled ? "booked" : "available"}`}>
        {disabled ? "Booked" : "Available"}
      </span>

      <button
        className={`slot-btn ${disabled ? "booked-btn" : "book"}`}
        disabled={disabled}
        onClick={() => !disabled && onSelect(time)}
      >
        {disabled ? "Unavailable" : "Select Slot"}
      </button>
    </div>
  );
}

export default SlotCard;