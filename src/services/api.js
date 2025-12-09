const API_BASE_URL = 'http://127.0.0.1:8000/api';


class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };

        // Add authorization header if token exists
        const token = localStorage.getItem('auth_token');
        if (token) {
            defaultOptions.headers['Authorization'] = `Bearer ${token}`;
        }

        const config = {
            ...defaultOptions,
            ...options,
            headers: {
                ...defaultOptions.headers,
                ...options.headers,
            },
        };

        try {
            const response = await fetch(url, config);
            
            // Handle CORS preflight errors
            if (response.status === 0) {
                throw new Error('CORS error: Unable to connect to the server');
            }
            
            const data = await response.json();

            if (!response.ok) {
                // Handle validation errors with more detail
                if (response.status === 422 && data.errors) {
                    const errorMessages = Object.values(data.errors).flat().join(', ');
                    throw new Error(errorMessages);
                }
                throw new Error(data.message || 'Something went wrong');
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Authentication methods
    async login(dni, password) {
        return this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ dni, password }),
        });
    }

    async register(dni, password, password_confirmation, email) {
        return this.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ 
                dni, 
                password, 
                password_confirmation, 
                email 
            }),
        });
    }

    async logout() {
        return this.request('/auth/logout', {
            method: 'POST',
        });
    }

    async getCurrentUser() {
        return this.request('/auth/me');
    }

    async updateProfile(profileData) {
        return this.request('/auth/profile', {
            method: 'PUT',
            body: JSON.stringify(profileData),
        });
    }
}

export default new ApiService();
