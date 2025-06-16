import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

export default function Signup() {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2 max-w-sm mx-auto">
      <input className="border p-2" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input className="border p-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-500 text-white p-2" type="submit">Signup</button>
    </form>
  );
}
