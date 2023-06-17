import React, { useState } from 'react';
import './App.css';

function App() {
  const [studentData, setStudentData] = useState({
    name: '',
    age: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(studentData);
    // Add code to submit the data to the server or perform any necessary actions
  };

  return (
    <div className="App">
      <h1>Admission Form</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={studentData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={studentData.age}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={studentData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={studentData.address}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
