import React, { useMemo, useState } from 'react';
import { Post } from '../types';
import PostCard from './PostCard';


interface Props {
    posts: Post[];
    onDelete: (id: string) => void;
}


const PostList: React.FC<Props> = ({ posts, onDelete }) => {
    const [q, setQ] = useState('');
    const filtered = useMemo(() => posts.filter(p => p.title.toLowerCase().includes(q.toLowerCase())), [posts, q]);


    return (
        <div className="container page">
            <div className="top-row">
                <h1>Danh sách bài viết ({filtered.length})</h1>
                <div>
                    <input placeholder="Tìm theo tiêu đề..." value={q} onChange={e => setQ(e.target.value)} />
                </div>
            </div>

            <div className="grid">
                {filtered.map(p => (
                    <PostCard key={p.id} post={p} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};


export default PostList;