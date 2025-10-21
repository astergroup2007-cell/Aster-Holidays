import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getArticles, deleteArticle } from '../../services/api';
import type { Article } from '../../types';

const ManageArticles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchArticles = async () => {
        setLoading(true);
        const data = await getArticles();
        setArticles(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleDelete = async (articleId: string) => {
        if (window.confirm('Are you sure you want to delete this article?')) {
            await deleteArticle(articleId);
            fetchArticles(); // Refresh list
        }
    };

    if (loading) return <div className="text-center p-8">Loading articles...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Manage Articles</h1>
                <Link to="/admin/articles/new" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-600">
                    + New Article
                </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Author</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map(article => (
                            <tr key={article.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{article.title}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{article.author}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{new Date(article.createdAt).toLocaleDateString()}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                    <button onClick={() => navigate(`/admin/articles/edit/${article.id}`)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                    <button onClick={() => handleDelete(article.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageArticles;
