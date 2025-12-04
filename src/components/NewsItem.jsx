import React from 'react';

const NewsItem = ({ news, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(news)}
            className="bg-black border border-cyan-500 rounded-xl p-5 shadow-[0_0_10px_#00eaff] hover:shadow-[0_0_25px_#00eaff] cursor-pointer transition flex gap-5"
        >
            {news.urlToImage && (
                <img
                    src={news.urlToImage}
                    alt={news.title}
                    className="w-40 h-28 object-cover rounded-lg border border-cyan-500"
                />
            )}

            <div>
                <h2 className="font-bold text-cyan-300 text-xl neon">
                    {news.title}
                </h2>
                <p className="text-pink-500 mt-2">
                    {news.source.name}
                </p>
            </div>
        </div>
    );
};

export default NewsItem;
