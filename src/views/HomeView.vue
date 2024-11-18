<script></script>

<template>
  <div class="container">
    <h1 class="heading">
      Unite with like-minded individuals, <br class="break-on-mobile" />
      embrace global connections.
    </h1>
    <div class="description">
      <p>
        Strafe is a platform that brings people together, fostering meaningful
        connections and vibrant communities worldwide. Join us today and
        experience the power of shared interests and collective growth.
      </p>
      <div class="button-group">
        <router-link to="https://discord.gg/XPyjQXaXKG" class="button">
          <font-awesome-icon icon="fab fa-discord" class="button-icon" /> Join Our Discord
        </router-link>
        <a href="https://www.youtube.com/watch?v=doEqUhFiQS4" class="beta-button">
          <font-awesome-icon icon="fas fa-rocket" class="button-icon" /> Request Beta Access
        </a>
      </div>
    </div>
    <div class="badge">
      <a
        href="https://vecurity.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://www.vecurity.net/assets/images/icons/favicon.png" alt="Vecurity Logo" />
        Secured by Vecurity
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  text-align: center;
  color: var(--color-text);
}

@media (max-width: 767px) {
  .container {
    padding: 40px 20px;
  }
}

.heading {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .heading {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .heading {
    font-size: 4rem;
  }
}

.break-on-mobile {
  display: none;
}

@media (min-width: 768px) {
  .break-on-mobile {
    display: inline;
  }
}

.description {
  margin-top: 2rem;
  max-width: 85%;
  font-size: 1.125rem;
  line-height: 1.5;
  padding: 0 20px;
}

@media (min-width: 768px) {
  .description {
    max-width: 700px;
    padding: 0;
  }
}

@media (max-width: 767px) {
  .description {
    font-size: 1.5rem;
    padding: 0 10px;
  }
}

.button-group {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 20px;
}

.button,
.beta-button {
  transition: background-color 0.3s ease;
  color: var(--vt-c-white);
  font-size: medium;
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-primary);
}

.button:hover,
.beta-button:hover {
  background-color: var(--color-primary-hover);
}

/* Discord button specific styles */
.button {
  background-color: var(--color-discord);
}

.button:hover {
  background-color: var(--color-discord-hover);
}

.beta-button {
  background-color: var(--color-accent);
}

.beta-button:hover {
  background-color: var(--color-accent-hover);
}

.button-icon {
  font-size: 1.2em;
}

@media (max-width: 767px) {
  .button-group {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }

  .button,
  .beta-button {
    width: 100%;
    margin-top: 1rem;
    justify-content: center;
  }
}

.badge {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--vecurity-brand);
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s ease;
}

.badge:hover {
  background-color: var(--vecurity-hover);
}

.badge a {
  text-decoration: none;
  color: var(--vt-c-white);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
}

.badge img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>
