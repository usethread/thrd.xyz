<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <router-link to="/" class="back-link">
          <span class="back-icon">←</span>
          Back to Home
        </router-link>
        <h1>Acceptable Use Policy</h1>
        <p class="last-updated">Last updated: July 2025</p>
      </div>
      
      <div class="legal-content">
        <section>
          <h2>1. Our Commitment to Free Speech</h2>
          <p><strong>Strafe is built on the principle that free expression is fundamental to human communication.</strong> We believe in the marketplace of ideas, where good ideas triumph over bad ones through open debate, not censorship.</p>
          <p>Our content moderation philosophy is guided by the First Amendment to the United States Constitution, and we will only restrict content that falls outside constitutional protection.</p>
        </section>

        <section>
          <h2>2. Prohibited Content</h2>
          <p>The following types of content are prohibited on our platform:</p>
          
          <h3>Illegal Content</h3>
          <ul>
            <li>Content that violates federal, state, or local laws</li>
            <li>Copyright infringement and intellectual property violations</li>
            <li>Distribution of illegal substances or services</li>
            <li>Child exploitation material of any kind</li>
          </ul>

          <h3>Adult Content</h3>
          <ul>
            <li>NSFW (Not Safe For Work) content including explicit sexual imagery</li>
            <li>Pornographic material or sexually explicit content</li>
            <li>Adult content that is not properly age-gated or marked</li>
            <li>Content depicting nudity or sexual acts</li>
          </ul>

          <h3>Direct Threats and Harassment</h3>
          <ul>
            <li>Specific, credible threats of violence against identifiable individuals</li>
            <li>Doxxing (sharing private personal information without consent)</li>
            <li>Coordinated harassment campaigns targeting specific individuals</li>
          </ul>

          <h3>Platform Integrity</h3>
          <ul>
            <li>Spam, including excessive automated or repetitive content</li>
            <li>Malware, viruses, or other malicious code</li>
            <li>Phishing attempts or fraudulent schemes</li>
            <li>Impersonation intended to deceive others</li>
          </ul>
        </section>

        <section>
          <h2>3. What We Do NOT Moderate</h2>
          <p>Unlike many platforms, we explicitly <strong>do not</strong> moderate content based on:</p>
          <ul>
            <li>Political opinions or ideological viewpoints</li>
            <li>Controversial or unpopular speech</li>
            <li>Offensive language or profanity</li>
            <li>Criticism of public figures, organizations, or ideas</li>
            <li>Discussion of sensitive or taboo topics</li>
            <li>Satire, parody, or humor that some may find offensive</li>
            <li>Religious or philosophical beliefs</li>
            <li>Scientific or academic debate</li>
          </ul>
        </section>

        <section>
          <h2>4. Community Self-Moderation</h2>
          <p>We believe communities should have the tools to moderate themselves:</p>
          <ul>
            <li>Space owners can set their own rules and moderate their spaces</li>
            <li>Users can block or mute other users they don't want to interact with</li>
            <li>Content filtering tools allow users to customize their experience</li>
            <li>Community reporting helps identify genuine policy violations</li>
          </ul>
        </section>

        <section>
          <h2>5. Enforcement Actions</h2>
          <p>When content violates this policy, we may take the following actions:</p>
          <ul>
            <li><strong>Content Removal:</strong> Removing specific content that violates our policies</li>
            <li><strong>Account Warnings:</strong> Notifying users of policy violations</li>
            <li><strong>Temporary Restrictions:</strong> Limiting account functionality for repeated violations</li>
            <li><strong>Account Suspension:</strong> Temporarily disabling accounts for serious violations</li>
            <li><strong>Account Termination:</strong> Permanently banning accounts for severe or repeated violations</li>
          </ul>
        </section>

        <section>
          <h2>6. Appeals Process</h2>
          <p>We believe in due process and provide a fair appeals system:</p>
          <ul>
            <li>All enforcement actions can be appealed</li>
            <li>Appeals are reviewed by human moderators, not automated systems</li>
            <li>We provide clear explanations for our decisions</li>
            <li>False positives are corrected promptly</li>
          </ul>
        </section>

        <section>
          <h2>7. Transparency</h2>
          <p>We commit to transparency in our moderation practices:</p>
          <ul>
            <li>Regular transparency reports on enforcement actions</li>
            <li>Clear communication about policy changes</li>
            <li>Open dialogue with the community about moderation decisions</li>
            <li>Public documentation of our moderation guidelines</li>
          </ul>
        </section>

        <section>
          <h2>8. Legal Compliance</h2>
          <p>While we support free speech, we must comply with valid legal requests:</p>
          <ul>
            <li>Court orders and subpoenas will be honored where legally required</li>
            <li>We will notify users of legal requests when legally permitted</li>
            <li>We will challenge overly broad or inappropriate legal requests</li>
            <li>We maintain detailed records of legal compliance actions</li>
          </ul>
        </section>

        <section>
          <h2>9. International Considerations</h2>
          <p>Strafe operates under U.S. law and constitutional principles. Users in other countries should be aware that:</p>
          <ul>
            <li>Content legal in the U.S. may be illegal in other jurisdictions</li>
            <li>We cannot guarantee compliance with all international laws</li>
            <li>Users are responsible for understanding their local laws</li>
          </ul>
        </section>

        <section>
          <h2>10. Reporting Violations</h2>
          <p>To report content that violates this policy:</p>
          <ul>
            <li>Use the in-app reporting tools</li>
            <li>Contact our support team with specific details</li>
            <li>Provide evidence and context for your report</li>
            <li>Be patient as we review reports thoroughly</li>
          </ul>
        </section>

        <section>
          <h2>11. Policy Updates</h2>
          <p>This policy may be updated to reflect legal changes or community needs. We will:</p>
          <ul>
            <li>Provide advance notice of significant changes</li>
            <li>Explain the reasoning behind policy updates</li>
            <li>Maintain our commitment to free speech principles</li>
            <li>Seek community input on major policy changes</li>
          </ul>
        </section>

        <section>
          <h2>12. Contact Information</h2>
          <p>For questions about this Acceptable Use Policy or to report violations, please contact us through our support channels.</p>
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