import React from 'react';

function Header() {
  return (
    <header className="header">
      <img src="logo.png" alt="DentalHiFi Logo" className="logo" />
      <h1>DentalHiFi</h1>
      <nav className="nav">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About Us</a>
        <a href="#" className="nav-link">Services</a>
        <a href="#" className="nav-link">Team</a>
        <a href="#" className="nav-link">Testimonials</a>
        <a href="#" className="nav-link">Blog</a>
        <a href="#" className="nav-link">Bookings</a>
        <a href="#" className="nav-link">E-com</a>
        <div className="profile">
          {/* Profile Icon or Login Link */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
