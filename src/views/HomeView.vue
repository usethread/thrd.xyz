<template>
  <main class="landing-page">
    <!-- Floating Turtles Background -->
    <div class="turtle-background">
      <img
        src="https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/512/emoji_u1f422.png"
        alt="Turtle"
        class="turtle turtle-1"
      />
      <img
        src="https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/512/emoji_u1f422.png"
        alt="Turtle"
        class="turtle turtle-2"
      />
      <img
        src="https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/512/emoji_u1f422.png"
        alt="Turtle"
        class="turtle turtle-3"
      />
      <img
        src="https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/512/emoji_u1f422.png"
        alt="Turtle"
        class="turtle turtle-4"
      />
      <img
        src="https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/512/emoji_u1f422.png"
        alt="Turtle"
        class="turtle turtle-5"
      />
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-center">
          <div class="hero-badge">
            <span><font-awesome-icon :icon="['fas', 'flag-usa']" /> FOSS and Free Speech done right.</span>
          </div>
          <h1 class="hero-title">
            Welcome to <span class="brand-highlight">Strafe</span>
          </h1>
          <p class="hero-description">
            Experience seamless communication with advanced features, spaces, and real-time collaboration.
            Built for communities, teams, and everyone in between.
          </p>
          <div class="cta-buttons">
            <a href="https://alpha.strafechat.dev" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'rocket']" />
              Launch Alpha
            </a>
            <a href="https://discord.gg/XPyjQXaXKG" class="btn btn-secondary">
              <font-awesome-icon :icon="['fab', 'discord']" />
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- App Preview Section -->
    <section class="app-preview-section">
      <div class="app-preview">
        <div class="app-window">
          <div class="app-titlebar">
            <div class="titlebar-controls">
              <span class="control close"></span>
              <span class="control minimize"></span>
              <span class="control maximize"></span>
            </div>
            <span class="app-title">STRAFE</span>
          </div>
          <div class="app-content">
            <!-- Spaces Sidebar -->
            <div class="spaces-sidebar">
              <div class="space-item active">
                <div class="space-icon"><font-awesome-icon :icon="['fas', 'home']" /></div>
              </div>
              <div class="space-item">
                <div class="space-icon"><font-awesome-icon :icon="['fas', 'gamepad']" /></div>
              </div>
              <div class="space-item">
                <div class="space-icon"><font-awesome-icon :icon="['fas', 'briefcase']" /></div>
              </div>
              <div class="space-item">
                <div class="space-icon"><font-awesome-icon :icon="['fas', 'palette']" /></div>
              </div>
              <div class="space-add">
                <div class="space-icon"><font-awesome-icon :icon="['fas', 'plus']" /></div>
              </div>
            </div>
            
            <!-- Rooms Sidebar -->
            <div class="rooms-sidebar">
              <div class="server-header">
                <div class="skeleton-text skeleton-server-name"></div>
                <div class="server-dropdown"><font-awesome-icon :icon="['fas', 'chevron-down']" /></div>
              </div>
              <div class="channel-category">
                <div class="category-header">
                  <font-awesome-icon :icon="['fas', 'chevron-down']" class="category-arrow" />
                  <div class="skeleton-text skeleton-category"></div>
                </div>
                <div class="channel-item active">
                  <font-awesome-icon :icon="['fas', 'hashtag']" class="channel-hash" />
                  <div class="skeleton-text skeleton-channel"></div>
                </div>
                <div class="channel-item">
                  <font-awesome-icon :icon="['fas', 'hashtag']" class="channel-hash" />
                  <div class="skeleton-text skeleton-channel"></div>
                </div>
                <div class="channel-item">
                  <font-awesome-icon :icon="['fas', 'hashtag']" class="channel-hash" />
                  <div class="skeleton-text skeleton-channel"></div>
                </div>
              </div>
              <div class="channel-category">
                <div class="category-header">
                  <font-awesome-icon :icon="['fas', 'chevron-down']" class="category-arrow" />
                  <div class="skeleton-text skeleton-category"></div>
                </div>
                <div class="channel-item voice">
                  <font-awesome-icon :icon="['fas', 'volume-up']" class="channel-hash" />
                  <div class="skeleton-text skeleton-channel"></div>
                </div>
                <div class="channel-item voice">
                  <font-awesome-icon :icon="['fas', 'volume-up']" class="channel-hash" />
                  <div class="skeleton-text skeleton-channel"></div>
                </div>
              </div>
            </div>
            
            <!-- Main Chat Area -->
            <div class="chat-main">
              <div class="chat-header">
                <font-awesome-icon :icon="['fas', 'hashtag']" class="channel-hash" />
                <div class="skeleton-text skeleton-channel-title"></div>
                <div class="chat-controls">
                  <font-awesome-icon :icon="['fas', 'thumbtack']" class="control-icon" />
                  <font-awesome-icon :icon="['fas', 'users']" class="control-icon" />
                  <font-awesome-icon :icon="['fas', 'search']" class="control-icon" />
                  <font-awesome-icon :icon="['fas', 'cog']" class="control-icon" />
                </div>
              </div>
              <div class="chat-messages">
                <div class="message-group">
                  <div class="message-avatar skeleton-avatar"></div>
                  <div class="message-content">
                    <div class="message-header">
                      <div class="skeleton-text skeleton-username"></div>
                      <div class="skeleton-text skeleton-timestamp"></div>
                    </div>
                    <div class="skeleton-text skeleton-message"></div>
                  </div>
                </div>
                <div class="message-group">
                  <div class="message-avatar skeleton-avatar"></div>
                  <div class="message-content">
                    <div class="message-header">
                      <div class="skeleton-text skeleton-username"></div>
                      <div class="skeleton-text skeleton-timestamp"></div>
                    </div>
                    <div class="skeleton-text skeleton-message"></div>
                  </div>
                </div>
                <div class="message-group">
                  <div class="message-avatar skeleton-avatar"></div>
                  <div class="message-content">
                    <div class="message-header">
                      <div class="skeleton-text skeleton-username"></div>
                      <div class="skeleton-text skeleton-timestamp"></div>
                    </div>
                    <div class="skeleton-text skeleton-message"></div>
                  </div>
                </div>
              </div>
              <div class="chat-input">
                <div class="input-wrapper">
                  <div class="skeleton-input"></div>
                  <div class="input-actions">
                    <font-awesome-icon :icon="['fas', 'paperclip']" class="input-icon" />
                    <font-awesome-icon :icon="['fas', 'smile']" class="input-icon" />
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Members Sidebar -->
            <div class="members-sidebar">
              <div class="members-header">
                <div class="skeleton-text skeleton-members-title"></div>
              </div>
              <div class="members-list">
                <div class="member-category">
                  <div class="skeleton-text skeleton-category-title"></div>
                  <div class="member-item">
                    <div class="member-avatar skeleton-avatar online"></div>
                    <div class="skeleton-text skeleton-member-name"></div>
                  </div>
                  <div class="member-item">
                    <div class="member-avatar skeleton-avatar online"></div>
                    <div class="skeleton-text skeleton-member-name"></div>
                  </div>
                  <div class="member-item">
                    <div class="member-avatar skeleton-avatar online"></div>
                    <div class="skeleton-text skeleton-member-name"></div>
                  </div>
                  <div class="member-item">
                    <div class="member-avatar skeleton-avatar online"></div>
                    <div class="skeleton-text skeleton-member-name"></div>
                  </div>
                  <div class="member-item">
                    <div class="member-avatar skeleton-avatar online"></div>
                    <div class="skeleton-text skeleton-member-name"></div>
                  </div>
                </div>
                <div class="member-category">
                  <div class="skeleton-text skeleton-category-title"></div>
                  <div class="member-item">
                    <div class="member-avatar skeleton-avatar offline"></div>
                    <div class="skeleton-text skeleton-member-name"></div>
                  </div>
                  <div class="member-item">
                    <div class="member-avatar skeleton-avatar offline"></div>
                    <div class="skeleton-text skeleton-member-name"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features-section" class="features-section">
      <div class="container">
        <div class="section-header">
          <h2>Powerful Features for Modern Communication</h2>
          <p>Discover what makes Strafe the perfect platform for your community</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon :icon="['fas', 'home']" />
            </div>
            <h3>Spaces & Rooms</h3>
            <p>Organize conversations with dedicated spaces and rooms for different topics and teams.</p>
            <div class="feature-mockup">
              <div class="mockup-spaces">
                <div class="mockup-space">🏢 Company</div>
                <div class="mockup-space active">🎮 Gaming</div>
                <div class="mockup-space">📚 Study</div>
              </div>
            </div>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon :icon="['fas', 'comments']" />
            </div>
            <h3>Real-time Messaging</h3>
            <p>Lightning-fast messaging with rich text formatting, emoji reactions, and file sharing.</p>
            <div class="feature-mockup">
              <div class="mockup-chat">
                <div class="mockup-message">Hey team! 👋</div>
                <div class="mockup-message typing">Someone is typing...</div>
              </div>
            </div>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon :icon="['fas', 'lock']" />
            </div>
            <h3>Privacy & Security</h3>
            <p>End-to-end encryption and robust privacy controls to keep your conversations secure.</p>
            <div class="feature-mockup">
              <div class="mockup-security">
                <div class="security-badge">🔒 Encrypted</div>
                <div class="security-badge">✅ Verified</div>
              </div>
            </div>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon :icon="['fas', 'palette']" />
            </div>
            <h3>Customizable Themes</h3>
            <p>Personalize your experience with custom themes and appearance settings.</p>
            <div class="feature-mockup">
              <div class="mockup-themes">
                <div class="theme-option dark"></div>
                <div class="theme-option light"></div>
                <div class="theme-option purple"></div>
              </div>
            </div>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon :icon="['fas', 'mobile-alt']" />
            </div>
            <h3>Cross-Platform</h3>
            <p>Access Strafe from any device - desktop, mobile, or web browser.</p>
            <div class="feature-mockup">
              <div class="mockup-devices">
                <div class="device desktop">💻</div>
                <div class="device mobile">📱</div>
                <div class="device web">🌐</div>
              </div>
            </div>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon :icon="['fas', 'robot']" />
            </div>
            <h3>Bot Integration</h3>
            <p>Enhance your workspace with custom bots and automated workflows.</p>
            <div class="feature-mockup">
              <div class="mockup-bot">
                <div class="bot-message">🤖 Bot: Task completed!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about-section" class="about-section">
      <div class="container">
        <div class="section-header">
          <h2>About Strafe</h2>
          <p>Building the future of communication with open source principles</p>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <h3>Our Mission</h3>
            <p>Strafe is dedicated to creating a modern, secure, and user-friendly communication platform that respects your privacy and supports free expression. We believe in the power of open source software and community-driven development.</p>
            
            <h3>Why Strafe?</h3>
            <ul>
              <li><strong>Open Source:</strong> Our code is transparent and community-driven</li>
              <li><strong>Privacy First:</strong> End-to-end encryption and robust privacy controls</li>
              <li><strong>Free Speech:</strong> Supporting constitutional rights to free expression</li>
              <li><strong>Modern Design:</strong> Beautiful, intuitive interface for all devices</li>
              <li><strong>Community Focused:</strong> Built by the community, for the community</li>
            </ul>
          </div>
          
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">Free to use</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">Open Source</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Legal Section -->
    <section id="legal-section" class="legal-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Commitment to Free Expression</h2>
          <p>We believe in fostering open dialogue while maintaining a safe environment</p>
        </div>
        
        <div class="legal-grid">
          <div class="legal-card">
            <div class="legal-icon">
              <font-awesome-icon :icon="['fas', 'scroll']" />
            </div>
            <h3>Terms of Service</h3>
            <p>Our terms are designed to protect both users and the platform while ensuring fair usage.</p>
            <router-link to="/terms" class="legal-btn">
              Read Terms
            </router-link>
          </div>
          
          <div class="legal-card">
            <div class="legal-icon">
              <font-awesome-icon :icon="['fas', 'lock']" />
            </div>
            <h3>Privacy Policy</h3>
            <p>We respect your privacy and are transparent about how we collect and use your data.</p>
            <router-link to="/privacy" class="legal-btn">
              Read Policy
            </router-link>
          </div>
          
          <div class="legal-card">
            <div class="legal-icon">
              <font-awesome-icon :icon="['fas', 'balance-scale']" />
            </div>
            <h3>Acceptable Use Policy</h3>
            <p>Guidelines for responsible use that support free speech within constitutional limits.</p>
            <router-link to="/aup" class="legal-btn">
              Read Guidelines
            </router-link>
          </div>
        </div>
        
        <div class="free-speech-banner">
          <div class="banner-content">
            <h3><font-awesome-icon :icon="['fas', 'flag-usa']" /> Committed to Free Speech</h3>
            <p>We support the fundamental right to free expression as protected by the United States Constitution. Our platform encourages open dialogue while maintaining community standards that ensure a respectful environment for all users.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Strafe</h3>
            <p>FOSS and Free Speech done right</p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="https://dev.strafe.chat">Try App</a>
              <a href="#">Documentation</a>
            </div>
            <div class="link-group">
              <h4>Community</h4>
              <a href="https://discord.gg/XPyjQXaXKG">Discord</a>
              <a href="https://github.com/StrafeChat" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://x.com/strafechat" target="_blank" rel="noopener noreferrer">X</a>
            </div>
            <div class="link-group">
              <h4>Legal</h4>
              <router-link to="/terms">Terms</router-link>
              <router-link to="/privacy">Privacy</router-link>
              <router-link to="/aup">AUP</router-link>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Strafe Communications. All rights reserved.</p>
        </div>
      </div>
    </footer>


   </main>
 </template>

<script setup lang="ts">
// No script functionality needed for static landing page
</script>
 
<style scoped>
/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(124, 58, 237, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.logo {
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.5px;
}

.logo i {
  color: #7c3aed;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #c9d1d9;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #7c3aed, #a855f7);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #ffffff;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-login {
  background: transparent;
  border: 1.5px solid rgba(124, 58, 237, 0.6);
  color: #7c3aed;
  padding: 0.6rem 1.25rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.btn-login:hover {
  background: rgba(124, 58, 237, 0.1);
  border-color: #7c3aed;
  color: #a855f7;
  transform: translateY(-1px);
}

.btn-signup {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  border: none;
  color: #ffffff;
  padding: 0.6rem 1.25rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.btn-signup:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
}

/* Global Styles */
.landing-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1b26 0%, #24283b 50%, #1a1b26 100%);
  color: #c0caf5;
  overflow-x: hidden;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Floating Turtles Background */
.turtle-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.3;
}

.turtle {
  position: absolute;
  filter: drop-shadow(0 0 10px rgba(158, 206, 106, 0.3));
}

.turtle-1 {
  width: 6rem;
  height: 6rem;
  top: 20%;
  left: 10%;
  animation: swim-1 20s infinite ease-in-out;
}

.turtle-2 {
  width: 4rem;
  height: 4rem;
  top: 60%;
  right: 15%;
  animation: swim-2 25s infinite ease-in-out;
}

.turtle-3 {
  width: 5rem;
  height: 5rem;
  bottom: 15%;
  left: 30%;
  animation: swim-3 22s infinite ease-in-out;
}

.turtle-4 {
  width: 4rem;
  height: 4rem;
  top: 40%;
  right: 30%;
  animation: swim-1 18s infinite ease-in-out reverse;
}

.turtle-5 {
  width: 6rem;
  height: 6rem;
  bottom: 30%;
  right: 40%;
  animation: swim-2 23s infinite ease-in-out reverse;
}

@keyframes swim-1 {
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30vw, 10vh) rotate(20deg); }
  66% { transform: translate(-20vw, -15vh) rotate(-15deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes swim-2 {
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-25vw, -10vh) rotate(-25deg); }
  66% { transform: translate(15vw, 20vh) rotate(15deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes swim-3 {
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(20vw, -15vh) rotate(15deg); }
  66% { transform: translate(-30vw, 10vh) rotate(-20deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

/* Hero Section */
.hero-section {
  position: relative;
  z-index: 1;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  gap: 2.5rem;
  padding: 1.5rem;
}

.hero-center {
  text-align: center;
  width: 100%;
}

.hero-badge {
  display: inline-block;
  background: rgba(158, 206, 106, 0.1);
  border: 1px solid rgba(158, 206, 106, 0.3);
  border-radius: 2rem;
  padding: 0.4rem 0.8rem;
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.hero-badge i {
  margin-right: 0.5rem;
}



.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.2rem;
  background: linear-gradient(135deg, #c0caf5 0%, #9ece6a 50%, #7aa2f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-highlight {
  background: linear-gradient(135deg, #9ece6a 0%, #7aa2f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.5;
  color: #a9b1d6;
  margin-bottom: 1.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #9ece6a 0%, #7aa2f7 100%);
  color: #1a1b26;
  box-shadow: 0 4px 15px rgba(158, 206, 106, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(158, 206, 106, 0.4);
}

.btn-secondary {
  background: rgba(122, 162, 247, 0.1);
  color: #7aa2f7;
  border-color: #7aa2f7;
}

.btn-secondary:hover {
  background: #7aa2f7;
  color: #1a1b26;
  transform: translateY(-2px);
}

/* App Preview Section */
.app-preview-section {
  padding: 6rem 0;
  background: rgba(26, 27, 38, 0.3);
  border-top: 1px solid rgba(65, 72, 104, 0.3);
}

.app-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.app-window {
  width: 100%;
  max-width: 1000px;
  background: #24283b;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid #414868;
}

.app-titlebar {
  background: #1a1b26;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #414868;
}

.titlebar-controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.close { background: #f7768e; }
.control.minimize { background: #e0af68; }
.control.maximize { background: #9ece6a; }

.app-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #c0caf5;
}

.app-content {
  display: flex;
  height: 400px;
}

/* Spaces Sidebar */
.spaces-sidebar {
  width: 72px;
  background: #1a1b26;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  gap: 8px;
  border-right: 1px solid #414868;
}

.space-item, .space-add {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #414868;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.space-item:hover, .space-add:hover {
  border-radius: 16px;
  background: #7aa2f7;
}

.space-item.active {
  border-radius: 16px;
  background: #9ece6a;
}

.space-item.active::before {
  content: '';
  position: absolute;
  left: -12px;
  width: 4px;
  height: 20px;
  background: #c0caf5;
  border-radius: 0 4px 4px 0;
}

.space-icon {
  font-size: 20px;
  color: #c0caf5;
}

.space-icon i {
  font-size: 18px;
}

/* Rooms Sidebar */
.rooms-sidebar {
  width: 240px;
  background: #24283b;
  border-right: 1px solid #414868;
  display: flex;
  flex-direction: column;
}

.server-header {
  padding: 16px;
  border-bottom: 1px solid #414868;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.server-header h3 {
  color: #c0caf5;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.server-dropdown {
  color: #565f89;
  cursor: pointer;
}

.channel-category {
  padding: 16px 8px 0 16px;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  cursor: pointer;
}

.category-arrow {
  color: #565f89;
  font-size: 10px;
}

.category-arrow.fas {
  font-size: 8px;
}

.category-name {
  color: #565f89;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.channel-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  margin: 2px 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.channel-item:hover {
  background: rgba(122, 162, 247, 0.1);
}

.channel-item.active {
  background: rgba(158, 206, 106, 0.2);
  color: #c0caf5;
}

.channel-hash {
  color: #565f89;
  font-size: 16px;
}

.channel-hash.fas {
  font-size: 14px;
}

.channel-item.active .channel-hash {
  color: #9ece6a;
}

.channel-name {
  color: #a9b1d6;
  font-size: 14px;
}

.channel-item.active .channel-name {
  color: #c0caf5;
}

/* Main Chat Area */
.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #24283b;
}

.chat-header {
  height: 48px;
  background: #24283b;
  border-bottom: 1px solid #414868;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
}

.channel-hash {
  color: #565f89;
  font-size: 20px;
}

.channel-title {
  color: #c0caf5;
  font-weight: 600;
  font-size: 16px;
}

.chat-controls {
  margin-left: auto;
  display: flex;
  gap: 16px;
}

.control-icon {
  color: #565f89;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-size: 14px;
}

.control-icon:hover {
  color: #c0caf5;
  background: rgba(122, 162, 247, 0.1);
}

.chat-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message-group {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #7aa2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.message-content {
  flex: 1;
}

.message-header {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
}

.username {
  color: #c0caf5;
  font-weight: 600;
  font-size: 16px;
}

.timestamp {
  color: #565f89;
  font-size: 12px;
}

.message-text {
  color: #a9b1d6;
  line-height: 1.4;
  font-size: 14px;
}

.chat-input {
  padding: 16px;
  background: #24283b;
}

.input-wrapper {
  background: #414868;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.message-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 12px 0;
  color: #c0caf5;
  font-size: 14px;
  outline: none;
}

.message-input::placeholder {
  color: #565f89;
}

.input-actions {
  display: flex;
  gap: 8px;
}

.input-icon {
  color: #565f89;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-size: 14px;
}

.input-icon:hover {
  color: #c0caf5;
  background: rgba(122, 162, 247, 0.1);
}

/* Skeleton Loading Styles */
.skeleton-text {
  background: linear-gradient(90deg, #414868 25%, #565f89 50%, #414868 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
  height: 12px;
}

.skeleton-server-name {
  width: 120px;
  height: 16px;
}

.skeleton-category {
  width: 100px;
  height: 10px;
}

.skeleton-channel {
  width: 80px;
  height: 12px;
}

.skeleton-channel-title {
  width: 60px;
  height: 16px;
}

.skeleton-username {
  width: 60px;
  height: 14px;
}

.skeleton-timestamp {
  width: 80px;
  height: 10px;
}

.skeleton-message {
  width: 200px;
  height: 12px;
  margin-top: 4px;
}

.skeleton-members-title {
  width: 80px;
  height: 12px;
}

.skeleton-category-title {
  width: 70px;
  height: 10px;
}

.skeleton-member-name {
  width: 60px;
  height: 12px;
}

.skeleton-input {
  flex: 1;
  height: 20px;
  background: linear-gradient(90deg, #414868 25%, #565f89 50%, #414868 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
  margin: 8px 0;
}

.skeleton-avatar {
  background: linear-gradient(90deg, #414868 25%, #565f89 50%, #414868 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Members Sidebar */
.members-sidebar {
  width: 240px;
  background: #24283b;
  border-left: 1px solid #414868;
  display: flex;
  flex-direction: column;
}

.members-header {
  padding: 16px;
  border-bottom: 1px solid #414868;
}

.members-header h4 {
  color: #c0caf5;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.members-list {
  padding: 16px;
  overflow-y: auto;
}

.member-category {
  margin-bottom: 24px;
}

.category-title {
  color: #565f89;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.member-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  margin: 2px 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.member-item:hover {
  background: rgba(122, 162, 247, 0.1);
}

.member-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #7aa2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  position: relative;
}

.member-avatar.online::after {
  content: '';
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: #9ece6a;
  border: 2px solid #24283b;
  border-radius: 50%;
}

.member-avatar.offline {
  opacity: 0.5;
}

.member-name {
  color: #a9b1d6;
  font-size: 14px;
}

.member-name.offline-name {
  opacity: 0.5;
}

/* Features Section */
.features-section {
  position: relative;
  z-index: 1;
  padding: 6rem 0;
  background: rgba(26, 27, 38, 0.8);
  backdrop-filter: blur(10px);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #c0caf5 0%, #9ece6a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header p {
  font-size: 1.125rem;
  color: #a9b1d6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(36, 40, 59, 0.6);
  border: 1px solid rgba(65, 72, 104, 0.5);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(158, 206, 106, 0.5);
  box-shadow: 0 10px 30px rgba(158, 206, 106, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #c0caf5;
}

.feature-card p {
  color: #a9b1d6;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-mockup {
  background: rgba(26, 27, 38, 0.8);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid rgba(65, 72, 104, 0.3);
}

.mockup-spaces {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mockup-space {
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  background: rgba(65, 72, 104, 0.3);
}

.mockup-space.active {
  background: rgba(158, 206, 106, 0.2);
  color: #9ece6a;
}

.mockup-chat {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mockup-message {
  background: rgba(65, 72, 104, 0.3);
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.mockup-message.typing {
  color: #9ece6a;
  font-style: italic;
}

.mockup-security {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.security-badge {
  background: rgba(158, 206, 106, 0.2);
  color: #9ece6a;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.mockup-themes {
  display: flex;
  gap: 0.5rem;
}

.theme-option {
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  border: 2px solid rgba(65, 72, 104, 0.5);
}

.theme-option.dark { background: #1a1b26; }
.theme-option.light { background: #f7f7f7; }
.theme-option.purple { background: #bb9af7; }

.mockup-devices {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.device {
  font-size: 1.5rem;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.device:hover {
  opacity: 1;
}

.mockup-bot {
  text-align: center;
}

.bot-message {
  background: rgba(122, 162, 247, 0.2);
  color: #7aa2f7;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

/* About Section */
.about-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #1a1b26 0%, #24283b 100%);
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-top: 3rem;
}

.about-text h3 {
  color: #9ece6a;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.about-text h3:first-child {
  margin-top: 0;
}

.about-text p {
  color: #a9b1d6;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.about-text ul {
  list-style: none;
  padding: 0;
}

.about-text li {
  color: #a9b1d6;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
}

.about-text li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #9ece6a;
  font-weight: bold;
}

.about-text strong {
  color: #c0caf5;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: rgba(26, 27, 38, 0.6);
  border: 1px solid rgba(65, 72, 104, 0.3);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #7aa2f7;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #a9b1d6;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-text {
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  .about-text h3 {
    font-size: 1.25rem;
    line-height: 1.4;
  }
  
  .about-text p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .about-text li {
    font-size: 0.9rem;
    line-height: 1.4;
    word-wrap: break-word;
  }
  
  .about-stats {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .stat-item {
    padding: 1.5rem 1rem;
    min-width: 0;
    flex: 1;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.8rem;
    word-wrap: break-word;
  }
}

/* Legal Section */
.legal-section {
  position: relative;
  z-index: 1;
  padding: 6rem 0;
  background: rgba(36, 40, 59, 0.8);
  backdrop-filter: blur(10px);
}

.legal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.legal-card {
  background: rgba(26, 27, 38, 0.6);
  border: 1px solid rgba(65, 72, 104, 0.5);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.legal-card:hover {
  transform: translateY(-3px);
  border-color: rgba(122, 162, 247, 0.5);
}

.legal-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.legal-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #c0caf5;
}

.legal-card p {
  color: #a9b1d6;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.legal-btn {
  display: inline-block;
  background: rgba(122, 162, 247, 0.1);
  color: #7aa2f7;
  border: 1px solid #7aa2f7;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
}

.legal-btn:hover {
  background: #7aa2f7;
  color: #1a1b26;
}

.free-speech-banner {
  background: linear-gradient(135deg, rgba(158, 206, 106, 0.1) 0%, rgba(122, 162, 247, 0.1) 100%);
  border: 1px solid rgba(158, 206, 106, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}

.banner-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #9ece6a;
}

.banner-content p {
  color: #a9b1d6;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Footer */
.footer {
  position: relative;
  z-index: 1;
  background: rgba(26, 27, 38, 0.9);
  padding: 3rem 0 1rem;
  border-top: 1px solid rgba(65, 72, 104, 0.3);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #9ece6a 0%, #7aa2f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-brand p {
  color: #a9b1d6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.link-group h4 {
  font-weight: 600;
  margin-bottom: 1rem;
  color: #c0caf5;
}

.link-group a {
  display: block;
  color: #a9b1d6;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.2s;
}

.link-group a:hover {
  color: #7aa2f7;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(65, 72, 104, 0.3);
  color: #565f89;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: #24283b;
  border: 1px solid #414868;
  border-radius: 1rem;
  max-width: 800px;
  max-height: 80vh;
  width: 90%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.modal-header {
  background: #1a1b26;
  padding: 1.5rem;
  border-bottom: 1px solid #414868;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #c0caf5;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #a9b1d6;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s;
}

.modal-close:hover {
  background: rgba(247, 118, 142, 0.1);
  color: #f7768e;
}

.modal-body {
  padding: 2rem;
  overflow-y: auto;
  max-height: 60vh;
  color: #a9b1d6;
  line-height: 1.6;
}

.modal-body h3 {
  color: #c0caf5;
  font-weight: 600;
  margin: 1.5rem 0 1rem 0;
}

.modal-body h3:first-child {
  margin-top: 0;
}

.modal-body h4 {
  color: #9ece6a;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
}

.modal-body ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.modal-body li {
  margin-bottom: 0.5rem;
}

.modal-body strong {
  color: #c0caf5;
  font-weight: 600;
}

.modal-body em {
  color: #565f89;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1.125rem;
  }
  
  .cta-buttons {
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  
  /* Hide app preview section on mobile for better UX */
  .app-preview-section {
    display: none;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .legal-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .modal-content {
    width: 95%;
    margin: 1rem;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
  }
  
  .turtle-1, .turtle-5 {
    width: 4rem;
    height: 4rem;
  }
  
  .turtle-2, .turtle-4 {
    width: 3rem;
    height: 3rem;
  }
  
  .turtle-3 {
    width: 3.5rem;
    height: 3.5rem;
  }
}
</style>
