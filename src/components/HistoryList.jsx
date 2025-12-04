import React from "react";

const HistoryList = ({ history, onSelect }) => {
    if (history.length === 0) return null;

    return (
        <div className="mt-8">
            <h3 className="text-cyan-400 text-lg mb-3 neon">VIEW HISTORY</h3>

            <div className="space-y-3">
                {history.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => onSelect(item)}
                        className="p-3 bg-black border border-cyan-500 rounded-lg cursor-pointer hover:bg-cyan-600 hover:text-black transition neon"
                    >
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryList;
