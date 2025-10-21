import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleBySlug, getArticleById } from '../services/api';
import type { Article } from '../types';

const ArticleDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!slug) return;
            setLoading(true);
            try {
                // Try fetching by slug first, then fall back to ID for old links
                let data = await getArticleBySlug(slug);
                if (!data) {
                    data = await getArticleById(slug);
                }
                setArticle(data);
            } catch (error) {
                console.error("Failed to fetch article:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticle();
    }, [slug]);

    if (loading) {
        return <div className="text-center py-20">Loading article...</div>;
    }

    if (!article) {
        return <div className="text-center py-20">Article not found.</div>;
    }

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            <img src={article.imageUrl} alt={article.title} className="w-full h-96 object-cover rounded-lg shadow-lg mb-8" />
            <h1 className="text-4xl font-extrabold font-heading text-secondary mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-500 mb-8">
                <span>By {article.author}</span>
                <span className="mx-2">•</span>
                <span>{new Date(article.createdAt).toLocaleDateString()}</span>
            </div>
            <div 
                className="prose lg:prose-xl max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }} 
            />
        </div>
    );
};

export default ArticleDetail;
