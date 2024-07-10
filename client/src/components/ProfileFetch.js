import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileFetch = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('/api/user', {
                    headers: {
                        'x-auth-token': `${token}`
                    }
                });
                console.log(res.data); // Check if 'data' exists
                if (res.data) {
                    setProfile(res.data);
                } else {
                    setError('Unexpected response from the server.');
                }
            } catch (err) {
                console.error(err.response?.data || err.message);
                setError(err.response?.data?.message || 'An error occurred while fetching the profile.');
            }
        };

        fetchProfile();
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {profile ? (
                <div>
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default ProfileFetch;
