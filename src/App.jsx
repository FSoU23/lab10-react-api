import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SortSelect from './components/SortSelect';
import NewsFilter from './components/NewsFilter';
import NewsList from './components/NewsList';
import NewsModal from './components/NewsModal';
import HistoryList from './components/HistoryList';

const API_KEY = '998d6a0a2f114b24a9d9270491591510';
const PAGE_SIZE = 10;

function App() {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState('general');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('newest');

    const [selectedNews, setSelectedNews] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem('newsHistory');
        return saved ? JSON.parse(saved) : [];
    });

    const fetchNews = async (category, page = 1) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${PAGE_SIZE}&page=${page}&country=us&apiKey=${API_KEY}`
            );
            const data = await response.json();

            if (data.status !== 'ok') {
                throw new Error(data.message || 'Ошибка API');
            }

            const articles = Array.isArray(data.articles) ? data.articles : [];

            setNews(prev =>
                page === 1 ? articles : [...prev, ...articles]
            );

        } catch (err) {
            setError(err.message || 'Ошибка загрузки новостей');
            setNews([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setPage(1);
        fetchNews(category, 1);
    }, [category]);

    const openModal = newsItem => {
        setSelectedNews(newsItem);
        setIsModalOpen(true);

        setHistory(prev => {
            const newHistory = [newsItem, ...prev.filter(n => n.url !== newsItem.url)].slice(0, 20);
            localStorage.setItem('newsHistory', JSON.stringify(newHistory));
            return newHistory;
        });
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <Header onRefresh={() => fetchNews(category, 1)} />

            <main className="max-w-5xl mx-auto p-6">
                <SearchBar onSearch={setSearchQuery} />
                <SortSelect sortOrder={sortOrder} setSortOrder={setSortOrder} />
                <NewsFilter category={category} setCategory={setCategory} />

                {error && <div className="text-red-500 neon">{error}</div>}

                <NewsList
                    news={news
                        .filter(n =>
                            n.title?.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .sort((a, b) =>
                            sortOrder === 'newest'
                                ? new Date(b.publishedAt) - new Date(a.publishedAt)
                                : new Date(a.publishedAt) - new Date(b.publishedAt)
                        )}
                    isLoading={isLoading}
                    onLoadMore={() => {
                        const nextPage = page + 1;
                        setPage(nextPage);
                        fetchNews(category, nextPage);
                    }}
                    onSelect={openModal}
                />

                <HistoryList history={history} onSelect={openModal} />

                {isModalOpen && (
                    <NewsModal news={selectedNews} onClose={() => setIsModalOpen(false)} />
                )}
            </main>
        </div>
    );
}

export default App;
