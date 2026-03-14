import React from 'react';
import '../styles/global.css';

const Dashboard = () => {
    return (
        <div style={{minHeight: '100vh', background: '#f8fafc'}}>
            <nav className="navbar">
                <div className="nav-brand">
                    Centennial <span>Infotech</span>
                </div>
                <div>
                    <button onClick={() => {localStorage.removeItem('user'); window.location.href='/login'}} style={{padding: '10px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', fontWeight: 600, cursor: 'pointer'}}>
                        Logout
                    </button>
                </div>
            </nav>
            <div className="dashboard-content">
                <h1>Welcome to Centennial Infotech</h1>
                <p style={{fontSize: '1.2rem', color: '#64748b', marginTop: '20px'}}>You have successfully logged into your career dashboard.</p>
            </div>
        </div>
    );
};

export default Dashboard;
