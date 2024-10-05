import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });
      navigate('/posts');
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    }
  };
  return (
    <>
      <Header />
      <form action="" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="">Email :</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="">Password :</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="">
          <button type="submit">Login</button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}
