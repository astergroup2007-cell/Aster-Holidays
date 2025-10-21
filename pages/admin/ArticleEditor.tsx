import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById, saveArticle, uploadImage } from '../../services/api';
import type { Article } from '../../types';

// A simple rich text editor might be too complex, so we'll use a textarea
// For a real app, a library like react-quill or TipTap would be used.

const ArticleEditor: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Omit<Article, 'id'>>({
        title: '',
        author: 'Admin',
        content: '',
        imageUrl: '',
        createdAt: new Date().toISOString(),
        tags: [],
        slug: '',
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (id) {
            setLoading(true);
            getArticleById(id).then(data => {
                if (data) {
                    setArticle(data);
                }
                setLoading(false);
            });
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setArticle(prev => ({ ...prev, [name]: value }));

        if (name === 'title') {
             const slug = value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
             setArticle(prev => ({ ...prev, slug }));
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            let imageUrl = article.imageUrl;
            if (imageFile) {
                imageUrl = await uploadImage(imageFile);
            }
            
            const articleToSave = {
                ...article,
                imageUrl,
                createdAt: id ? article.createdAt : new Date().toISOString()
            };

            await saveArticle({ ...articleToSave, id });
            alert('Article saved successfully!');
            navigate('/admin/articles');

        } catch (error) {
            console.error("Failed to save article:", error);
            alert('Error saving article.');
        } finally {
            setSaving(false);
        }
    };
    
    if (loading) return <div className="p-8">Loading article...</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">{id ? 'Edit Article' : 'Create New Article'}</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input type="text" name="title" value={article.title} onChange={handleChange} required className="w-full border p-2 rounded" />
                </div>
                 <div>
                    <label className="block text-sm font-medium">URL Slug</label>
                    <input type="text" name="slug" value={article.slug} onChange={handleChange} required className="w-full border p-2 rounded bg-gray-100" />
                </div>
                 <div>
                    <label className="block text-sm font-medium">Author</label>
                    <input type="text" name="author" value={article.author} onChange={handleChange} required className="w-full border p-2 rounded" />
                </div>
                 <div>
                    <label className="block text-sm font-medium">Content (HTML allowed)</label>
                    <textarea name="content" value={article.content} onChange={handleChange} required rows={15} className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Featured Image</label>
                    <input type="file" onChange={handleImageChange} className="w-full text-sm"/>
                    {(article.imageUrl || imageFile) && (
                        <img src={imageFile ? URL.createObjectURL(imageFile) : article.imageUrl} alt="Preview" className="mt-4 h-40 object-cover rounded"/>
                    )}
                </div>
                <div className="flex justify-end gap-4">
                    <button type="button" onClick={() => navigate('/admin/articles')} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
                    <button type="submit" disabled={saving} className="bg-primary text-white px-4 py-2 rounded disabled:bg-gray-400">
                        {saving ? 'Saving...' : 'Save Article'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ArticleEditor;
