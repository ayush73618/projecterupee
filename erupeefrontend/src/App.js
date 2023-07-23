import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [user, setuser] = useState({
    name: '',
    email: '',
    password: '',
    balance: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser((prevuser) => ({
      ...prevuser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the Express backend to register the user
      await axios.post('/api/register', user).then((data)=>{
        setuser({
          name:'',
          email:'',
          password:'',
          balance:0
        })
        alert("Registration Successfull!!!!!!!");
      });
      console.log('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='form'>
      
    <form onSubmit={handleSubmit}>
    <h1>Register</h1>
      <table>
        <tr>
          <td> <label htmlFor="name">Name</label></td>
          <td><input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        /></td>
        </tr>
        <tr>
          <td>  <label htmlFor="email">Email</label></td>
          <td><input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        /></td>
        </tr>
        <tr>
          <td><label htmlFor="password">Password</label></td>
          <td> <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        /></td>
        </tr>
        <tr>
          <td><label htmlFor="balance">e₹ Balance</label></td>
          <td><input
          type="number"
          id="balance"
          name="balance"
          value={user.balance}
          onChange={handleChange}
        /></td>
        </tr>
        <tr>
          <td><button type="submit">Register</button></td>
          
        </tr>
      </table>
    </form>
    </div>
  );
};

export default App;
