import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from '../types';


interface Props {
    posts: Post[];
    onDelete: (id: string) => void;
}


const PostDetail: React.FC<Props> = ({ posts, onDelete }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find(p => p.id === id);


    if (!post) return (
        <div className="container page"><h2>Không tìm thấy bài viết</h2><button className="btn" onClick={() => navigate('/')}>Quay lại</button></div>
    );


    return (
        <div className="container page detail">
            <img className="detail-thumb" src={post.thumbnail} alt={post.title} />
            <h1>{post.title}</h1>
            <p className="meta">{post.author} • {new Date(post.createdAt).toLocaleString()}</p>
            <p className="category">Thể loại: {post.category}</p>
            <div className="content">{post.content}</div>


            <div className="detail-actions">
                <button className="btn" onClick={() => navigate('/')}>Quay lại</button>
                <button className="btn" onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
                <button className="btn btn-outline" onClick={() => { if (confirm('Bạn có chắc muốn xóa bài viết này?')) { onDelete(post.id); navigate('/'); } }}>Xóa bài viết</button>
            </div>
        </div>
    );
};

export default PostDetail;