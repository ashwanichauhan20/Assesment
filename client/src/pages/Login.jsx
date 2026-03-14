import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Eye, CheckCircle2, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api';
import '../styles/global.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login(formData);
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = '/dashboard';
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="container">
            <div className="left-panel">
                <div className="brand-icon">
                    <Star size={16} fill="currentColor" />
                </div>
                <div>
                    <h1 className="hero-title">Welcome Back to<br /><span>Centennial Careers</span></h1>
                    <p className="hero-subtitle">
                        Sign in to access your applications, manage your profile, and connect with global opportunities.
                    </p>
                    <div className="feature-list">
                        <div className="feature-item">
                            <CheckCircle2 className="feature-icon" size={20} />
                            Stay updated on application status
                        </div>
                        <div className="feature-item">
                            <CheckCircle2 className="feature-icon" size={20} />
                            Personalized job recommendations
                        </div>
                        <div className="feature-item">
                            <CheckCircle2 className="feature-icon" size={20} />
                            One-click applying to new roles
                        </div>
                    </div>
                </div>
                <div className="brand-footer">
                    Centennial <span>Infotech</span>
                </div>
            </div>
            <div className="right-panel">
                <div className="form-header">
                    <h2>Candidate Sign In</h2>
                    <p>Access your personal career dashboard</p>
                </div>
                {error && <p style={{color: 'red', marginBottom: '10px'}}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="label-row">
                            <label>Email Address</label>
                        </div>
                        <div className="input-wrapper">
                            <Mail className="input-icon" size={18} />
                            <input 
                                type="email" 
                                placeholder="jane@example.com" 
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                autoComplete="email"
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="label-row">
                            <label>Password</label>
                            <a href="#" className="forgot-link">Forgot Password?</a>
                        </div>
                        <div className="input-wrapper">
                            <Lock className="input-icon" size={18} />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="••••••••" 
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                autoComplete="current-password"
                            />
                            <Eye 
                                className={`eye-icon ${showPassword ? 'active' : ''}`} 
                                size={18} 
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">
                        Sign In Now <ArrowRight size={18} />
                    </button>
                </form>
                <div className="form-footer">
                    New to Centennial? <Link to="/signup">Create Account</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
