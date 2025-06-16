import { useContext, useEffect, useState } from 'react';
import api from '../api/axios.js';
import { AuthContext } from '../context/AuthContext.jsx';
import LinkCard from '../components/LinkCard.jsx';

export default function Dashboard() {
  const { token } = useContext(AuthContext);
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!token) return;
    api.get('/api/links', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setLinks(res.data));
  }, [token]);

  const createLink = async (e) => {
    e.preventDefault();
    const res = await api.post('/api/links', { title, url }, { headers: { Authorization: `Bearer ${token}` } });
    setLinks([...links, res.data]);
    setTitle('');
    setUrl('');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={createLink} className="flex flex-col gap-2 mb-4">
        <input className="border p-2" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <input className="border p-2" value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" />
        <button className="bg-green-500 text-white p-2" type="submit">Add Link</button>
      </form>
      {links.map(link => <LinkCard key={link._id} link={link} />)}
    </div>
  );
}
