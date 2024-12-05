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

const generatePassword = (length = 12) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&+=!,.?';
  let newPassword = '';
  for (let i = 0; i < length; i++) {
    newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const passwordStrength = assessPasswordStrength(newPassword);
  setPassword(newPassword);
  setStrength(passwordStrength);
};

const addToHistory = (newPassword, strength) => {
  const newHistory = [...history, { password: newPassword, strength }];
  setHistory(newHistory);
  localStorage.setItem('passwordHistory', JSON.stringify(newHistory));
};

return (
  <div className="App">
    <h1>Генератор паролей</h1>
    <button onClick={() => generatePassword(16)}>Сгенерировать пароль</button>
    <div>
      <p><strong>Пароль:</strong> {password}</p>
      <p><strong>Надежность:</strong> {strength}</p>
    </div>

    <h2>История паролей</h2>
    <ul>
      {history.map((entry, index) => (
        <li key={index}>
          <strong>{entry.strength}:</strong> {entry.password}
        </li>
      ))}
    </ul>
  </div>
);



export default PasswordGenerator;
