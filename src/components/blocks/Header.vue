<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = async (event: Event) => {
  event.preventDefault();
  await router.push('/');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
  <header class="header">
    <nav class="nav">
      <a href="#" class="logo" @click="goToHome">
        <img src="/favicon.ico" alt="Strafe Logo" class="logo-icon" />
        STRAFE
      </a>
      
      <ul class="nav-links">
        <li><a href="#features-section">Features</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#legal-section">Legal</a></li>
      </ul>
      
      <div class="nav-actions">
        <a href="https://web.strafe.chat" class="btn-signup" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fas', 'rocket']" />
          Launch App
        </a>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
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
  transition: all 0.3s ease;
}

.logo:hover {
  color: #7c3aed;
}

.logo-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.logo:hover .logo-icon {
  transform: scale(1.1);
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-signup:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
}

@media (max-width: 768px) {
  .nav {
    padding: 1rem;
  }

  .nav-links {
    display: none;
  }

  .logo {
    font-size: 1.5rem;
  }

  .btn-signup {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
</style>
