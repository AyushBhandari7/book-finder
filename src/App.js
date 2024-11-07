
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
      setBooks(response.data.docs || []);
      if (response.data.docs.length === 0) {
        setError('No books found for your search query.');
      }
    } catch (error) {
      setError('Could not fetch books. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App container mx-auto p-4 min-h-screen flex flex-col items-center bg-black-100">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Book Finder</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchBooks} />
      {error && <ErrorMessage message={error} />}
      <BookList books={books} loading={loading} />
    </div>
  );
}

export default App;
