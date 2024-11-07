
import React from 'react';
import BookCard from './BookCard';

function BookList({ books, loading }) {
  if (loading) {
    return <p className="text-center text-blue-500 font-semibold">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList;
