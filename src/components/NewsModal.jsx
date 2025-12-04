import React from 'react';

const NewsModal = ({ news, onClose }) => {
    if (!news) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-black border border-cyan-500 rounded-2xl p-7 w-full max-w-3xl shadow-[0_0_20px_#00eaff] relative">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-cyan-400 hover:text-white text-3xl font-bold neon"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-cyan-300 mb-4 neon">
                    {news.title}
                </h2>

                {news.urlToImage && (
                    <img
                        src={news.urlToImage}
                        className="w-full h-72 object-cover border border-cyan-500 rounded-lg mb-4"
                    />
                )}

                <p className="text-cyan-200 leading-relaxed">
                    {news.content || news.description}
                </p>

                {news.url && (
                    <a
                        href={news.url}
                        target="_blank"
                        className="mt-4 inline-block text-yellow-300 hover:text-yellow-100 neon"
                    >
                        OPEN_SOURCE >>
                    </a>
                )}
            </div>
        </div>
    );
};

export default NewsModal;
