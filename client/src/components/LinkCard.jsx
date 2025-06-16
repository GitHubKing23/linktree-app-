export default function LinkCard({ link }) {
  return (
    <div className="p-4 border rounded mb-2">
      <a href={link.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
        {link.title}
      </a>
    </div>
  );
}
