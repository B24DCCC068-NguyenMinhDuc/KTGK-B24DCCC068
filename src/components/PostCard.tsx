import React from 'react';
import { Post } from '../types';
import { useNavigate } from 'react-router-dom';


interface Props {
    post: Post;
    onDelete: (id: string) => void;
}


const PostCard: React.FC<Props> = ({ post, onDelete }) => {
    const navigate = useNavigate();
    const short = post.content.slice(0, 100) + (post.content.length > 100 ? '...' : '');
    return (
        <article className="card">
            <img src={post.thumbnail} alt={post.title} />
            <div className="card-body">
                <h3>{post.title}</h3>
                <p className="meta">{post.author} • {new Date(post.createdAt).toLocaleDateString()}</p>
                <p className="excerpt">{short}</p>
                <div className="card-actions">
                    <button className="btn" onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
                    <button className="btn btn-outline" onClick={() => { if (confirm('Bạn có chắc muốn xóa bài viết này?')) onDelete(post.id); }}>Xóa</button>
                </div>
            </div>
        </article>
    );
};


export default PostCard;