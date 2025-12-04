import React from 'react';

const categories = [
    'general', 'business', 'entertainment',
    'health', 'science', 'sports', 'technology'
];

const NewsFilter = ({ category, setCategory }) => {
    return (
        <div className="flex flex-wrap gap-3 my-6">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-lg border tracking-widest
                        ${category === cat
                            ? 'bg-cyan-500 text-black border-cyan-400 neon'
                            : 'bg-black text-cyan-400 border-cyan-700 hover:bg-cyan-400 hover:text-black'}
                        transition`}
                >
                    {cat.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default NewsFilter;
