import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import ButtonsIndex from '../components/ButtonsIndex';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const { user, isAuthenticated, logout, updateProfile } = useAuth();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [autoSaving, setAutoSaving] = useState(false);
  const [manualSaving, setManualSaving] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postal_code: '',
    province: '',
    country: 'Espanya',
    bio: '',
    birth_date: ''
  });

  // Auto-save functionality with debounce
  const autoSave = useCallback(async (data) => {
    setAutoSaving(true);
    try {
      await updateProfile(data);
      setSuccess(t('profile.updateSuccess') || 'Perfil actualitzat automàticament!');
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.message || 'Error al actualitzar el perfil');
      // Clear error message after 5 seconds
      setTimeout(() => setError(''), 5000);
    } finally {
      setAutoSaving(false);
    }
  }, [updateProfile, t]);

  // Manual save functionality
  const handleManualSave = async () => {
    setManualSaving(true);
    setError('');
    setSuccess('');
    
    try {
      await updateProfile(formData);
      setSuccess(t('profile.manualSaveSuccess') || 'Perfil desat correctament!');
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.message || 'Error al desar el perfil');
      // Clear error message after 5 seconds
      setTimeout(() => setError(''), 5000);
    } finally {
      setManualSaving(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
    setSuccess('');
  };

  // Update form data when user data is loaded
  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        city: user.city || '',
        postal_code: user.postal_code || '',
        province: user.province || '',
        country: user.country || 'Espanya',
        bio: user.bio || '',
        birth_date: user.birth_date || ''
      });
    }
  }, [user]);

  // Auto-save when form data changes (debounced)
  useEffect(() => {
    if (!user || manualSaving) return; // Don't auto-save if user data isn't loaded yet or if manual save is happening
    
    const timeoutId = setTimeout(() => {
      // Only auto-save if there are actual changes
      const hasChanges = Object.keys(formData).some(key => {
        if (key === 'birth_date') {
          return formData[key] !== (user[key] || '');
        }
        return formData[key] !== (user[key] || '');
      });
      
      if (hasChanges) {
        autoSave(formData);
      }
    }, 2000); // Wait 2 seconds after last change

    return () => clearTimeout(timeoutId);
  }, [formData, user, autoSave, manualSaving]);

  if (!isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  const buttonData = [
    { text: t("buttons.whoAreWe"), link: "/whoAreWe" },
    { text: t("buttons.whatWeDo"), link: "/whatWeDo" },
    { text: t("buttons.contact"), link: "/contact" },
    { text: t("buttons.ourCollaborators"), link: "/ourCollaborators" },
    { text: t("buttons.projects"), link: "/projects" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await updateProfile(formData);
      setSuccess(t('profile.updateSuccess') || 'Perfil actualitzat correctament!');
    } catch (error) {
      setError(error.message || 'Error al actualitzar el perfil');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('ca-ES');
  };

  return (
    <div className="profile-container">
      <ButtonsIndex buttons={buttonData} />
      
      <div className="profile-content">
        <div className="profile-card">
                     <div className="profile-header">
             <h1>{t('profile.title') || 'Perfil de Usuari'}</h1>
             <div className="profile-avatar-large">
               <span>
                 {user?.first_name?.charAt(0)?.toUpperCase() || 
                  user?.name?.charAt(0)?.toUpperCase() || 'U'}
               </span>
             </div>
           </div>
           
           <div className="profile-info-text">
             <p>{t('profile.autoSaveInfo') || 'Els canvis es desen automàticament cada 2 segons. També pots desar manualment.'}</p>
           </div>

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
           
           {autoSaving && (
             <div className="auto-saving-indicator">
               🔄 {t('profile.autoSaving') || 'Desant automàticament...'}
             </div>
           )}
           
           {manualSaving && (
             <div className="manual-saving-indicator">
               💾 {t('profile.saving') || 'Desant...'}
             </div>
           )}
          
          <form onSubmit={handleSubmit}>
            <div className="profile-sections">
              {/* Personal Information */}
              <div className="profile-section">
                <h3>{t('profile.personalInfo') || 'Informació Personal'}</h3>
                
                                 <div className="form-row">
                   <div className="form-group">
                     <label>{t('profile.firstName') || 'Nom'}</label>
                     <input
                       type="text"
                       name="first_name"
                       value={formData.first_name}
                       onChange={handleInputChange}
                       placeholder={t('profile.firstNamePlaceholder') || 'El teu nom'}
                     />
                   </div>
                   
                   <div className="form-group">
                     <label>{t('profile.lastName') || 'Cognom'}</label>
                     <input
                       type="text"
                       name="last_name"
                       value={formData.last_name}
                       onChange={handleInputChange}
                       placeholder={t('profile.lastNamePlaceholder') || 'El teu cognom'}
                     />
                   </div>
                 </div>

                                 <div className="form-row">
                   <div className="form-group">
                     <label>{t('profile.birthDate') || 'Data de naixement'}</label>
                     <input
                       type="date"
                       name="birth_date"
                       value={formData.birth_date}
                       onChange={handleInputChange}
                     />
                   </div>
                   
                   <div className="form-group">
                     <label>{t('profile.dni') || 'DNI/NIF/Passaport'}</label>
                     <span className="readonly-field">{user?.dni || 'N/A'}</span>
                   </div>
                 </div>

                                 <div className="form-group">
                   <label>{t('profile.email') || 'Correu electrònic'}</label>
                   <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     placeholder={t('profile.emailPlaceholder') || 'el.teu@email.com'}
                     required
                   />
                 </div>

                 <div className="form-group">
                   <label>{t('profile.phone') || 'Telèfon'}</label>
                   <input
                     type="tel"
                     name="phone"
                     value={formData.phone}
                     onChange={handleInputChange}
                     placeholder={t('profile.phonePlaceholder') || '+34 600 000 000'}
                   />
                 </div>
              </div>

                             {/* Address Information */}
               <div className="profile-section">
                 <h3>{t('profile.addressInfo') || 'Informació d\'Adreça'}</h3>
                 
                 <div className="form-group">
                   <label>{t('profile.address') || 'Adreça'}</label>
                   <input
                     type="text"
                     name="address"
                     value={formData.address}
                     onChange={handleInputChange}
                     placeholder={t('profile.addressPlaceholder') || 'Carrer, número'}
                   />
                 </div>

                 <div className="form-row">
                   <div className="form-group">
                     <label>{t('profile.city') || 'Poble/Ciutat'}</label>
                     <input
                       type="text"
                       name="city"
                       value={formData.city}
                       onChange={handleInputChange}
                       placeholder={t('profile.cityPlaceholder') || 'El teu poble'}
                     />
                   </div>
                   
                   <div className="form-group">
                     <label>{t('profile.postalCode') || 'Codi Postal'}</label>
                     <input
                       type="text"
                       name="postal_code"
                       value={formData.postal_code}
                       onChange={handleInputChange}
                       placeholder={t('profile.postalCodePlaceholder') || '08001'}
                     />
                   </div>
                 </div>

                 <div className="form-row">
                   <div className="form-group">
                     <label>{t('profile.province') || 'Província'}</label>
                     <input
                       type="text"
                       name="province"
                       value={formData.province}
                       onChange={handleInputChange}
                       placeholder={t('profile.provincePlaceholder') || 'Barcelona'}
                     />
                   </div>
                   
                   <div className="form-group">
                     <label>{t('profile.country') || 'País'}</label>
                     <input
                       type="text"
                       name="country"
                       value={formData.country}
                       onChange={handleInputChange}
                       placeholder={t('profile.countryPlaceholder') || 'Espanya'}
                     />
                   </div>
                 </div>
               </div>

                             {/* Bio */}
               <div className="profile-section">
                 <h3>{t('profile.bio') || 'Biografia'}</h3>
                 <div className="form-group">
                   <label>{t('profile.bio') || 'Sobre tu'}</label>
                   <textarea
                     name="bio"
                     value={formData.bio}
                     onChange={handleInputChange}
                     placeholder={t('profile.bioPlaceholder') || 'Explica\'ns una mica sobre tu...'}
                     rows="4"
                   />
                 </div>
               </div>
            </div>

                         <div className="profile-actions">
               <div className="action-buttons">
                 <button 
                   onClick={handleManualSave}
                   className="save-button"
                   disabled={manualSaving || autoSaving}
                 >
                   {manualSaving ? (t('profile.saving') || 'Desant...') : (t('profile.save') || 'Desar')}
                 </button>
                 <button 
                   onClick={handleLogout} 
                   className="logout-button"
                 >
                   {t('profile.logout') || 'Tancar Sessió'}
                 </button>
               </div>
             </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
