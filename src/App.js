import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const dob = new Date(birthDate);
    const ageDiff = today - dob;
    const ageDate = new Date(ageDiff);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(years);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h5>Enter Your Date of Birth</h5>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button className='btn' onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>You are {age} years old.</p>}
    </div>
  );
}

export default App;
