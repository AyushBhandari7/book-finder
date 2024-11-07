
import React from 'react';

function SearchBar({ query, setQuery, onSearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center w-full max-w-xl mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-pink-300 rounded-l p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for a book by title..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-r px-6 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
