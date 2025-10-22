import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleBySlug, getArticleById } from '../services/api';
import type { Article } from '../types';

// --- INLINE SVG ICONS FOR SHARING ---
const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.523 3.379 4.75 3.419a9.89 9.89 0 01-6.117 2.107c-.397 0-.79-.023-1.175-.068a13.963 13.963 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
);

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.1c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.39 0-4.54 3.69-8.23 8.23-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.69 8.23-8.23 8.23zm4.52-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.18-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.09-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.7.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z" />
    </svg>
);


// --- Share Buttons Component ---
const ShareButtons: React.FC<{ title: string; url: string }> = ({ title, url }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    };

    return (
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-lg font-semibold text-secondary mb-4">Share this article</h3>
            <div className="flex justify-center items-center gap-4">
                <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FacebookIcon className="w-8 h-8" />
                </a>
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="text-gray-500 hover:text-blue-400 transition-colors">
                    <TwitterIcon className="w-8 h-8" />
                </a>
                <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" className="text-gray-500 hover:text-green-500 transition-colors">
                    <WhatsAppIcon className="w-8 h-8" />
                </a>
            </div>
        </div>
    );
};


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
    
    const shareUrl = window.location.href;

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
            <ShareButtons title={article.title} url={shareUrl} />
        </div>
    );
};

export default ArticleDetail;
