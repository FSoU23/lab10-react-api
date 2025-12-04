import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news, isLoading, onLoadMore, onSelect }) => {
    return (
        <div className="space-y-6">
            {news.map((item, index) => (
                <NewsItem key={index} news={item} onSelect={onSelect} />
            ))}

            {isLoading && <div className="text-cyan-400 neon text-center">LOADING...</div>}

            {news.length > 0 && !isLoading && (
                <div className="text-center mt-5">
                    <button
                        onClick={onLoadMore}
                        className="bg-black border border-yellow-400 text-yellow-300 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black neon"
                    >
                        MORE_DATA >>
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewsList;
