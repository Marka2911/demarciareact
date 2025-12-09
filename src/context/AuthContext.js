import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (token) {
        const response = await apiService.getCurrentUser();
        setUser(response.data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (dni, password) => {
    try {
      const response = await apiService.login(dni, password);
      const { user: userData, token } = response.data;
      
      localStorage.setItem('auth_token', token);
      
      // Fetch complete user profile data
      const profileResponse = await apiService.getCurrentUser();
      const completeUserData = profileResponse.data.user;
      
      localStorage.setItem('user_data', JSON.stringify(completeUserData));
      setUser(completeUserData);
      setIsAuthenticated(true);
      
      return { success: true, data: response.data };
    } catch (error) {
      throw error;
    }
  };

  const register = async (dni, password, password_confirmation, email) => {
    try {
      const response = await apiService.register(dni, password, password_confirmation, email);
      const { user: userData, token } = response.data;
      
      localStorage.setItem('auth_token', token);
      
      // Fetch complete user profile data
      const profileResponse = await apiService.getCurrentUser();
      const completeUserData = profileResponse.data.user;
      
      localStorage.setItem('user_data', JSON.stringify(completeUserData));
      setUser(completeUserData);
      setIsAuthenticated(true);
      
      return { success: true, data: response.data };
    } catch (error) {
      throw error;
    }
  };

          const logout = async () => {
            try {
                if (isAuthenticated) {
                    await apiService.logout();
                }
            } catch (error) {
                console.error('Logout error:', error);
            } finally {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('user_data');
                setUser(null);
                setIsAuthenticated(false);
            }
        };

        const updateProfile = async (profileData) => {
            try {
                const response = await apiService.updateProfile(profileData);
                const updatedUser = response.data.user;
                
                setUser(updatedUser);
                localStorage.setItem('user_data', JSON.stringify(updatedUser));
                
                return { success: true, data: response.data };
            } catch (error) {
                throw error;
            }
        };

        const value = {
            user,
            loading,
            isAuthenticated,
            login,
            register,
            logout,
            updateProfile,
            checkAuthStatus
        };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
