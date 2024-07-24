import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import { useNavigate } from 'react-router-dom';
import Carousel from'./carousel';
import './homepage.css';

const TermsOfService = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    {token && (
        navigate('/dashboard')
    )}
    return (
        <div className="home-page">
            <main className="hero1">
                <h1>Privacy Policy</h1>
                <p>Privacy Policy for FitSaveAI

Effective Date: [Insert Date]
<br></br>
<strong>1. Introduction</strong>
<br></br>
Welcome to FitSaveAI. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you use our services.
<br></br>
<strong>2. Information We Collect</strong>
<br></br>
Personal Information: We may collect personal information such as your name, email address, and payment information when you sign up for our services.
Usage Data: We collect information about how you use our services, including your workout preferences and activity data.
<br></br>
<strong></strong>3. How We Use Your Information
<br></br>
To provide and improve our services.
To communicate with you about your account and our services.
To personalize your workout plans based on your preferences and activity data.
<br></br>
<strong>4. Sharing Your Information</strong>
<br></br>
We do not share your personal information with third parties except as necessary to provide our services or as required by law.
<br></br>
<strong>5. Your Rights</strong>
<br></br>
You have the right to access, update, and delete your personal information. You can do this by contacting us at info@fitsaveai.org.
<br></br>
<strong>6. Changes to This Privacy Policy</strong>
<br></br>
We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
<br></br>
<strong>7. Contact Us</strong>
<br></br>
If you have any questions about this Privacy Policy, please contact us at info@fitsaveai.org.</p>
            </main>
        </div>
    );
};

export default TermsOfService;
