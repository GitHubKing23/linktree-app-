import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2 max-w-sm mx-auto">
      <input className="border p-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2" value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-500 text-white p-2" type="submit">Login</button>
    </form>
  );
}
