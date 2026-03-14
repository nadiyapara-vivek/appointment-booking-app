import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-hero">
      <div className="hero-grid-pattern" />

      <div className="hero-content">
        <div className="hero-pill">
          <span className="hero-pill-dot" />
          Trusted Healthcare Booking
        </div>

        <h1>
          Book Your <span className="accent">Medical</span> Appointment
          <br />with Ease
        </h1>

        <p>
          Schedule consultations, checkups, and therapy sessions in just a few clicks.
          Professional care, on your schedule.
        </p>

        <Link className="hero-cta" to="/book">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Book an Appointment
        </Link>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Patients Served</div>
          </div>
          <div className="hero-stat">
            <div className="stat-number">3</div>
            <div className="stat-label">Specialties</div>
          </div>
          <div className="hero-stat">
            <div className="stat-number">5</div>
            <div className="stat-label">Daily Slots</div>
          </div>
          <div className="hero-stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Online</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;