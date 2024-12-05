import React, { useState } from 'react';
import './App.css';

const assessPasswordStrength = (password) => {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[@#$%^&+=!,.?]/.test(password)) score += 1;

  if (score === 5) return 'Очень надежный';
  if (score === 4) return 'Надежный';
  if (score === 3) return 'Удовлетворительный';
  return 'Слабый';
};


const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [history, setHistory] = useState([]);

  return (
    <div className="App">
      <h1>Генератор паролей</h1>
    </div>
  );
};

export default PasswordGenerator;
