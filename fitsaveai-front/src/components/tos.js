import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import { useNavigate } from 'react-router-dom';
import Carousel from'./carousel';

const TermsOfService = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    {token && (
        navigate('/dashboard')
    )}
    return (
        <div className="home-page">
            <main className="hero1">
                <h1>Terms of Service</h1>
<p><strong></strong>Terms of Service for FitSaveAIEffective Date: 7/23/2024
<br></br>
<strong>1. Acceptance of Terms</strong>
<br></br>
By using FitSaveAI, you agree to these Terms of Service. If you do not agree, please do not use our services.
<br></br>
<strong>2. Description of Services</strong>
<br></br>
FitSaveAI provides AI-generated workout plans tailored to your preferences and activity data.
<br></br>
<strong>3. User Responsibilities</strong>
<br></br>
You must provide accurate and complete information when signing up for our services.
You are responsible for maintaining the confidentiality of your account information.
<br></br>
<strong>4. Payment and Subscription</strong>
<br></br>
Our services may require a subscription. You agree to pay all fees associated with your subscription.
We reserve the right to change our subscription fees at any time.
<br></br>
<strong>5. Termination</strong>
<br></br>
We may terminate or suspend your account at any time for any reason, including if you violate these Terms of Service.
<br></br>
<strong>6. Limitation of Liability</strong>
<br></br>
FitSaveAI is not liable for any damages arising from your use of our services. Our liability is limited to the maximum extent permitted by law.
<br></br>
<strong>7. Changes to These Terms</strong>
<br></br>
We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms of Service on our website.
<br></br>
<strong>8. Contact Us</strong>
<br></br>
If you have any questions about these Terms of Service, please contact us at info@fitsaveai.org.  </p>
            </main>
        </div>
    );
};

export default TermsOfService;
