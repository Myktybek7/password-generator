import React, { useState } from 'react';
import './App.css';

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
