import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import { Post } from './types';
import { initialPosts } from './data';


const App: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const navigate = useNavigate();
    const handleDelete = (id: string) => setPosts(prev => prev.filter(p => p.id !== id));
    const handleCreate = (data: Omit<Post, 'id' | 'createdAt'> & Partial<Pick<Post, 'id'>>) => {
        const id = String(Date.now());
        const newPost: Post = { id, ...data as Omit<Post, 'id' | 'createdAt'>, createdAt: new Date().toISOString() } as Post;
        setPosts(prev => [newPost, ...prev]);
        alert('Đăng bài thành công!');
        navigate('/');
    };
    const handleUpdate = (data: Omit<Post, 'id' | 'createdAt'> & Partial<Pick<Post, 'id'>>) => {
        if (!data.id) return;
        setPosts(prev => prev.map(p => p.id === data.id ? { ...p, ...data } as Post : p));
        alert('Cập nhật thành công!');
        navigate(`/posts/${data.id}`);
    };
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<PostList posts={posts} onDelete={handleDelete} />} />
                <Route path="/posts" element={<PostList posts={posts} onDelete={handleDelete} />} />
                <Route path="/posts/create" element={<PostForm onCancel={() => navigate('/')} onSubmit={handleCreate} />} />
                <Route path="/create" element={<Navigate to="/posts/create" replace />} />
                <Route path="/posts/:id" element={<PostDetail posts={posts} onDelete={handleDelete} />} />
                <Route path="/posts/edit/:id" element={<EditWrapper posts={posts} onUpdate={handleUpdate} />} />
                <Route path="*" element={<div className="container page"><h2>404 - Không tìm thấy</h2></div>} />
            </Routes>
        </div>
    );
};
const EditWrapper: React.FC<{ posts: Post[]; onUpdate: (data: any) => void }> = ({ posts, onUpdate }) => {
    const { pathname } = window.location;
    const id = pathname.split('/').pop() || '';
    const post = posts.find(p => p.id === id);
    const navigate = useNavigate();
    if (!post) return <div className="container page"><h2>Không tìm thấy bài viết</h2><button className="btn" onClick={() => navigate('/')}>Quay lại</button></div>;
    return <div className="container page"><h2>Chỉnh sửa bài viết</h2><PostForm initial={post} onCancel={() => navigate(`/posts/${post.id}`)} onSubmit={(d) => onUpdate({ ...d, id: post.id })} /></div>;
};

export default App;