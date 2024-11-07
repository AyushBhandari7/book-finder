
import React from 'react';

function BookCard({ book }) {
  const { title, author_name, first_publish_year, cover_i } = book;
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="book-card bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
      <img src={coverUrl} alt={`${title} cover`} className="w-32 h-40 object-cover mb-3 rounded" />
      <h2 className="text-lg font-semibold text-gray-800 text-center">{title}</h2>
      <p className="text-gray-600 text-center">{author_name ? author_name.join(', ') : 'Unknown Author'}</p>
      <p className="text-gray-500 text-sm text-center">{first_publish_year || 'N/A'}</p>
    </div>
  );
}

export default BookCard;
