import React, { useState, useEffect } from 'react';
import { Post, Category } from '../types';

interface Props {
    initial?: Partial<Post>;
    onCancel: () => void;
    onSubmit: (data: Omit<Post, 'id' | 'createdAt'> & Partial<Pick<Post, 'id'>>) => void;
}

const categories: Category[] = ['Công nghệ', 'Du lịch', 'Ẩm thực', 'Đời sống', 'Khác'];

const PostForm: React.FC<Props> = ({ initial = {}, onCancel, onSubmit }) => {
    const [title, setTitle] = useState(initial.title || '');
    const [author, setAuthor] = useState(initial.author || '');
    const [thumbnail, setThumbnail] = useState(initial.thumbnail || '');
    const [content, setContent] = useState(initial.content || '');
    const [category, setCategory] = useState<Category>(initial.category || 'Khác');
    const [errors, setErrors] = useState<Record<string, string>>({});


    useEffect(() => { setErrors({}); }, [title, author, content]);


    const validate = () => {
        const e: Record<string, string> = {};
        if (!title || title.trim().length < 10) e.title = 'Tiêu đề bắt buộc, ít nhất 10 ký tự';
        if (!author || author.trim().length < 3) e.author = 'Tác giả bắt buộc, ít nhất 3 ký tự';
        if (!content || content.trim().length < 50) e.content = 'Nội dung bắt buộc, ít nhất 50 ký tự';
        setErrors(e);
        return Object.keys(e).length === 0;
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        onSubmit({ id: initial.id, title: title.trim(), author: author.trim(), thumbnail: thumbnail.trim() || `https://picsum.photos/seed/${Math.random()}/600/400`, content: content.trim(), category });
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>Tiêu đề</label>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            {errors.title && <div className="err">{errors.title}</div>}


            <label>Tác giả</label>
            <input value={author} onChange={e => setAuthor(e.target.value)} />
            {errors.author && <div className="err">{errors.author}</div>}


            <label>URL ảnh thumbnail</label>
            <input value={thumbnail} onChange={e => setThumbnail(e.target.value)} />


            <label>Thể loại</label>
            <select value={category} onChange={e => setCategory(e.target.value as Category)}>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>


            <label>Nội dung</label>
            <textarea rows={12} value={content} onChange={e => setContent(e.target.value)} />
            {errors.content && <div className="err">{errors.content}</div>}


            <div className="form-actions">
                <button className="btn" type="submit">Đăng / Cập nhật</button>
                <button type="button" className="btn btn-outline" onClick={onCancel}>Hủy</button>
            </div>
        </form>
    );
};


export default PostForm;