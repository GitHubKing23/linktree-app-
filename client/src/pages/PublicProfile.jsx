import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios.js';
import LinkCard from '../components/LinkCard.jsx';

export default function PublicProfile() {
  const { username } = useParams();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    api.get(`/api/links/user/${username}`)
      .then(res => setLinks(res.data));
  }, [username]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">{username}'s Links</h2>
      {links.map(link => <LinkCard key={link._id} link={link} />)}
    </div>
  );
}
