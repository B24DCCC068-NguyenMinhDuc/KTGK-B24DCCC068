import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="container nav-inner">
                <div className="logo" onClick={() => navigate('/')}>📰 BlogMgmt</div>
                <div className="nav-links">
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Trang chủ</NavLink>
                    <NavLink to="/posts/create" className={({ isActive }) => isActive ? 'active' : ''}>Viết bài</NavLink>
                </div>
                <button className="btn" onClick={() => navigate('/posts/create')}>+ Viết bài</button>
            </div>
        </nav>
    );
};


export default Navbar;