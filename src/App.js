import React from 'react';
import DoctorCard from './DoctorCard'; // Import the DoctorCard component

function App() {
  const doctors = [
    {
      name: "Roronoa Zoro",
      specialty: "Gum Specialist",
      experience: 11,
      consultationFee: 600
    },
    {
      name: "Tony Tony Chopper",
      specialty: "Pediatrics",
      experience: 5,
      consultationFee: 400
    },
    // Add more doctor objects here
  ];

  return (
    <div className="App">
      <h1>Our Doctors</h1>
      {doctors.map(doctor => (
        <DoctorCard key={doctor.name} {...doctor} /> // Pass doctor data as props
      ))}
    </div>
  );
}

export default App;
