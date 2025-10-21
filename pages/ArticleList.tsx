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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const data = await getArticles();
                setArticles(data);
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    if (loading) {
        return <div className="text-center py-20">Loading articles...</div>;
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold font-heading text-secondary mb-8 text-center">Our Blog & Articles</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Travel stories, tips, and insights from our experts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
};

export default ArticleList;
