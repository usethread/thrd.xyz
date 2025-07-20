<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <router-link to="/" class="back-link">
          <span class="back-icon">←</span>
          Back to Home
        </router-link>
        <h1>Privacy Policy</h1>
        <p class="last-updated">Last updated: July 2025</p>
      </div>
      
      <div class="legal-content">
        <section>
          <h2>1. Information We Collect</h2>
          <h3>Account Information</h3>
          <p>When you create an account, we collect your username, email address, date of birth (for age verification), and password (which is securely hashed and never stored in plain text).</p>
          
          <h3>Communication Data</h3>
          <p>We store messages, files, and other content you share through our service to provide the communication functionality.</p>
          
          <h3>Session and Security Information</h3>
          <p>We collect encrypted IP addresses for user sessions and logins to maintain security, prevent abuse, and provide account protection. This information helps us detect suspicious activity and secure your account.</p>
          
          <h3>Usage Information</h3>
          <p>We collect information about how you use our service, including login times, feature usage, and technical data for service improvement.</p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our communication services</li>
            <li>To authenticate your identity and secure your account</li>
            <li>To improve our service and develop new features</li>
            <li>To communicate with you about service updates</li>
            <li>To ensure compliance with our Terms of Service</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data:</p>
          <ul>
            <li><strong>Password Security:</strong> All passwords are securely hashed using industry-standard algorithms and never stored in plain text</li>
            <li><strong>IP Address Protection:</strong> IP addresses are encrypted before storage to protect your privacy while maintaining security functionality</li>
            <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
            <li><strong>Access Controls:</strong> Strict access controls limit who can view your data</li>
            <li><strong>Regular Audits:</strong> We regularly audit our security practices</li>
            <li><strong>Secure Infrastructure:</strong> Our servers are hosted in secure, monitored facilities</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing and Disclosure</h2>
          <p><strong>We do not sell your personal data.</strong> We may share information only in these limited circumstances:</p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with valid legal requests (court orders, subpoenas)</li>
            <li>To protect against fraud or security threats</li>
            <li>With service providers who help us operate our platform (under strict confidentiality agreements)</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>We retain your data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time.</p>
        </section>

        <section>
          <h2>6. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we have about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Delete your account and associated data</li>
            <li>Export your data in a portable format</li>
            <li>Opt out of non-essential communications</li>
          </ul>
        </section>

        <section>
          <h2>7. Cookies and Tracking</h2>
          <p>We use essential cookies to maintain your session and provide core functionality. We do not use tracking cookies for advertising purposes.</p>
        </section>

        <section>
          <h2>8. Third-Party Services</h2>
          <p>Our service may integrate with third-party services (such as file hosting). These services have their own privacy policies, and we encourage you to review them.</p>
        </section>

        <section>
          <h2>9. International Data Transfers</h2>
          <p>Your data may be processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers.</p>
        </section>

        <section>
          <h2>10. Age Verification and Children's Privacy</h2>
          <p>We collect date of birth during registration for age verification purposes. Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete such information immediately.</p>
        </section>

        <section>
          <h2>11. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of significant changes through the service or via email.</p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or want to exercise your rights, please contact us through our support channels.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1b26 0%, #24283b 50%, #1a1b26 100%);
  color: #c0caf5;
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.legal-header {
  margin-bottom: 3rem;
  text-align: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #7aa2f7;
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: color 0.2s;
}

.back-link:hover {
  color: #9ece6a;
}

.back-icon {
  font-size: 1.2rem;
}

.legal-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #c0caf5 0%, #9ece6a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.last-updated {
  color: #a9b1d6;
  font-style: italic;
}

.legal-content {
  background: rgba(36, 40, 59, 0.6);
  border: 1px solid rgba(65, 72, 104, 0.5);
  border-radius: 1rem;
  padding: 3rem;
  backdrop-filter: blur(10px);
}

.legal-content section {
  margin-bottom: 2rem;
}

.legal-content section:last-child {
  margin-bottom: 0;
}

.legal-content h2 {
  color: #9ece6a;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.legal-content h3 {
  color: #7aa2f7;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1.5rem 0 0.5rem 0;
}

.legal-content p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #a9b1d6;
}

.legal-content ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.legal-content li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: #a9b1d6;
}

.legal-content strong {
  color: #c0caf5;
  font-weight: 600;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .legal-header h1 {
    font-size: 2.5rem;
  }
  
  .legal-content {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .legal-header h1 {
    font-size: 2rem;
  }
  
  .legal-content {
    padding: 1.5rem;
  }
}
</style>