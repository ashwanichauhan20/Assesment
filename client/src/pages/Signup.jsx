import React, { useState } from 'react';
import { Mail, Lock, User, Phone, CheckCircle2, Star, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api';
import '../styles/global.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await register(formData);
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = '/dashboard';
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="container">
            <div className="left-panel">
                <div className="brand-icon">
                    <Star size={16} fill="currentColor" />
                </div>
                <div>
                    <h1 className="hero-title">Launch your<br />career to new<br />heights</h1>
                    <p className="hero-subtitle">
                        Join Centennial Talent Solutions' elite network of tech professionals and get hired by global innovators.
                    </p>
                    <div className="feature-list">
                        <div className="feature-item">
                            <CheckCircle2 className="feature-icon" size={20} />
                            Tailored career opportunities
                        </div>
                        <div className="feature-item">
                            <CheckCircle2 className="feature-icon" size={20} />
                            Direct outreach from top firms
                        </div>
                        <div className="feature-item">
                            <CheckCircle2 className="feature-icon" size={20} />
                            Real-time application tracking
                        </div>
                    </div>
                </div>
                <div className="brand-footer">
                    <p style={{fontSize: '0.7rem', opacity: 0.8, textTransform: 'uppercase', marginBottom: '4px'}}>Powered By</p>
                    Centennial <span>Infotech</span>
                </div>
            </div>
            <div className="right-panel">
                <div className="form-header">
                    <h2>Create Account</h2>
                    <p>Enter your details to get started</p>
                </div>
                {error && <p style={{color: 'red', marginBottom: '10px'}}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="grid-2">
                        <div className="input-group">
                            <label>First Name</label>
                            <div className="input-wrapper">
                                <User className="input-icon" size={18} />
                                <input 
                                    type="text" 
                                    placeholder="Jane" 
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Last Name</label>
                            <div className="input-wrapper">
                                <input 
                                    type="text" 
                                    placeholder="Doe" 
                                    required
                                    style={{paddingLeft: '20px'}} 
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Email Address</label>
                        <div className="input-wrapper">
                            <Mail className="input-icon" size={18} />
                            <input 
                                type="email" 
                                placeholder="jane@example.com" 
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="grid-2">
                        <div className="input-group">
                            <label>Phone Number</label>
                            <div className="input-wrapper">
                                <Phone className="input-icon" size={18} />
                                <input 
                                    type="tel" 
                                    placeholder="+91..." 
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <div className="input-wrapper">
                                <Lock className="input-icon" size={18} />
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="••••••••" 
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                />
                                <Eye 
                                    className={`eye-icon ${showPassword ? 'active' : ''}`} 
                                    size={18} 
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="submit-btn" style={{marginTop: '20px'}}>
                        Start My Journey
                    </button>
                </form>
                <div className="form-footer">
                    Already have an account? <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
