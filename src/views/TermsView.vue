<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <router-link to="/" class="back-link">
          <span class="back-icon">←</span>
          Back to Home
        </router-link>
        <h1>Terms of Service</h1>
        <p class="last-updated">Last updated: Jult 2025</p>
      </div>
      
      <div class="legal-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Strafe, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>Strafe is a communication platform that provides real-time messaging, voice, and video chat services organized into spaces and channels.</p>
        </section>

        <section>
          <h2>3. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
        </section>

        <section>
          <h2>4. Free Speech Commitment</h2>
          <p><strong>Strafe is committed to supporting free speech within the bounds of the United States Constitution.</strong> We believe in open dialogue and the free exchange of ideas. Content moderation will be limited to:</p>
          <ul>
            <li>Content that is illegal under U.S. federal law</li>
            <li>Direct threats of violence against specific individuals</li>
            <li>Doxxing (sharing private personal information without consent)</li>
            <li>Spam or malicious automated content</li>
          </ul>
          <p>We will not moderate content based on political opinions, controversial viewpoints, or unpopular speech that is otherwise legal.</p>
        </section>

        <section>
          <h2>5. User Conduct</h2>
          <p>While we support free expression, users agree not to:</p>
          <ul>
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to other accounts or systems</li>
            <li>Distribute malware or engage in phishing</li>
            <li>Impersonate others in a deceptive manner</li>
          </ul>
        </section>

        <section>
          <h2>6. Privacy and Data</h2>
          <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <p>Users retain ownership of content they create. By posting content, you grant Strafe a license to display and distribute that content within the service.</p>
        </section>

        <section>
          <h2>8. Service Availability</h2>
          <p>We strive to maintain service availability but cannot guarantee uninterrupted access. We reserve the right to modify or discontinue features with notice.</p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>Strafe shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
        </section>

        <section>
          <h2>10. Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
        </section>

        <section>
          <h2>11. Contact Information</h2>
          <p>If you have questions about these Terms of Service, please contact us through our support channels.</p>
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