import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../services/api';
import type { Article } from '../types';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
    <Link to={`/article/${article.slug || article.id}`} className="block group">
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6 bg-white">
                <p className="text-sm text-gray-500">{new Date(article.createdAt).toLocaleDateString()}</p>
                <h3 className="mt-2 text-xl font-bold font-heading text-secondary group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="mt-2 text-gray-600 line-clamp-3">{article.content.substring(0, 150).replace(/<[^>]*>?/gm, '')}...</p>
            </div>
        </div>
    </Link>
);


const ArticleList: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const data = await getArticles();
                setArticles(data);
                setFilteredArticles(data);
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    useEffect(() => {
        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = articles.filter(article =>
            article.title.toLowerCase().includes(lowercasedQuery) ||
            article.content.toLowerCase().replace(/<[^>]*>?/gm, '').includes(lowercasedQuery)
        );
        setFilteredArticles(filtered);
    }, [searchQuery, articles]);


    if (loading) {
        return <div className="text-center py-20">Loading articles...</div>;
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold font-heading text-secondary mb-4 text-center">Our Blog & Articles</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Travel stories, tips, and insights from our experts.
            </p>

            {/* Search Bar */}
            <div className="mb-12 max-w-lg mx-auto">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search articles by keyword..."
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        aria-label="Search articles"
                    />
                </div>
            </div>

            {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <h3 className="text-xl font-semibold text-secondary">No Articles Found</h3>
                    <p className="text-gray-500 mt-2">Try adjusting your search query to find what you're looking for.</p>
                </div>
            )}
        </div>
    );
};

export default ArticleList;