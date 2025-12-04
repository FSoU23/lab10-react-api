import React from 'react';

const SortSelect = ({ sortOrder, setSortOrder }) => {
    return (
        <div className="mb-5">
            <label className="text-cyan-300 mr-3 neon">SORT_MODE:</label>
            <select
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
                className="p-2 bg-black text-cyan-400 border border-cyan-700 rounded-lg"
            >
                <option value="newest">NEW → OLD</option>
                <option value="oldest">OLD → NEW</option>
            </select>
        </div>
    );
};

export default SortSelect;
