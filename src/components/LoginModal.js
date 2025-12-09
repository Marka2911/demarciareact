import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

const LoginModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    dni: '',
    password: '',
    password_confirmation: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (isLogin) {
        // Login
        await login(formData.dni, formData.password);
        setSuccess(t('login.loginSuccess') || 'Login successful!');
        setTimeout(() => {
          onClose();
        }, 1500);
        
      } else {
        // Register
        await register(formData.dni, formData.password, formData.password_confirmation, formData.email);
        setSuccess(t('login.registerSuccess') || 'Registration successful!');
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ dni: '', password: '', password_confirmation: '', email: '' });
    setError('');
    setSuccess('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content login-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{isLogin ? t('login.title') : t('login.registerTitle')}</h3>
          <button onClick={onClose} className="close-button">×</button>
        </div>
        
        <div className="modal-body">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          {success && (
            <div className="success-message">
              {success}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="dni">{t('login.dni')}</label>
              <input
                type="text"
                id="dni"
                name="dni"
                value={formData.dni}
                onChange={handleInputChange}
                placeholder={t('login.dniPlaceholder')}
                required
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">{t('login.password')}</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder={t('login.passwordPlaceholder')}
                required
                disabled={loading}
              />
            </div>
            
            {!isLogin && (
              <>
                <div className="form-group">
                  <label htmlFor="password_confirmation">{t('login.passwordConfirm')}</label>
                  <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleInputChange}
                    placeholder={t('login.passwordConfirmPlaceholder')}
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('login.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('login.emailPlaceholder')}
                    required
                    disabled={loading}
                  />
                </div>
              </>
            )}
            
            <div className="form-actions">
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? (t('login.loading') || 'Loading...') : 
                 (isLogin ? t('login.loginButton') : t('login.registerButton'))}
              </button>
            </div>
          </form>
          
          <div className="toggle-mode">
            <p>
              {isLogin ? t('login.noAccount') : t('login.haveAccount')}
              <button type="button" onClick={toggleMode} className="toggle-button" disabled={loading}>
                {isLogin ? t('login.createAccount') : t('login.login')}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
