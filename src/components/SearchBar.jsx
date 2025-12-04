import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-6">
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="SEARCH_PROTOCOL..."
                className="flex-1 p-3 bg-black text-cyan-400 border border-cyan-700 rounded-l-lg focus:outline-none focus:border-cyan-500"
            />

            <button
                type="submit"
                className="px-6 bg-cyan-500 text-black font-bold hover:bg-cyan-600 transition rounded-r-lg neon"
            >
                RUN
            </button>
        </form>
    );
};

export default SearchBar;
