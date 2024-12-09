<template>
    <section class="hero-section">
        <div class="particle-container">
            <div v-for="n in 50" :key="n" class="particle"></div>
        </div>

        <div class="intro_text">
            <svg viewBox="0 0 1320 300" class="animate-svg">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#00D1FF;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#0084FF;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <text x="50%" y="50%" text-anchor="middle">BASLAEL</text>
            </svg>
        </div>

        <div class="content-wrapper">
            <h1 class="main-heading" data-text="I'm Baslael Workineh">I'm Baslael Workineh</h1>
            <p class="description">I'm a Full-Stack Developer dedicated to crafting seamless and efficient web
                applications.</p>

            <!-- Tech Stack Section -->
            <div class="tech-stack">
                <div class="tech-icons">
                    <div class="tech-icon">
                        <svg class="nuxt-icon" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M55.7498 27.1551C52.5277 21.615 44.4723 21.615 41.2502 27.1551L6.13404 87.5347C2.91195 93.0748 6.93963 100 13.3838 100H83.6162C90.0604 100 94.0881 93.0748 90.866 87.5347L55.7498 27.1551Z"
                                fill="#00DC82" />
                        </svg>
                    </div>
                    <div class="tech-icon">
                        <svg class="tailwind-icon" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.463 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
                                fill="#38BDF8" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="cta-buttons">
    <button class="primary-btn" @click="scrollToProjects">View Projects</button>
    <button class="secondary-btn" @click="contactMe">Contact Me</button>
</div>



            <!-- Social Media Links -->
            <div class="social-links">
                <a href="https://github.com/BaslaelWorkineh" class="social-icon" title="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/baslael-workineh-ayele-131b11248/" class="social-icon"
                    title="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://x.com/BaslaelWorkneh" class="social-icon" title="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/basketo_w/" class="social-icon" title="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://t.me/MrBasketo" class="social-icon" title="Telegram">
                    <i class="fab fa-telegram"></i>
                </a>
            </div>
        </div>

        <div class="scroll-indicator">
            <div class="mouse">
                <div class="wheel"></div>
            </div>
            <div class="arrow"></div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syncopate:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

/* Core Styles */
.hero-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #0a0b0f 0%, #141922 100%);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Space Grotesk', sans-serif;
    color: #ffffff;
}

/* Content Styling */
.content-wrapper {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 2rem;
}

.main-heading {
    font-family: 'Syncopate', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    background: linear-gradient(45deg, #00D1FF, #0084FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
}

.description {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 600px;
    margin: 1.5rem auto;
    color: #a0a0a0;
    line-height: 1.6;
}

/* Tech Stack Styling */
.tech-stack {
    margin: 2rem 0;
}

.tech-stack-title {
    font-family: 'Syncopate', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    color: #00D1FF;
    margin-bottom: 1rem;
}

.tech-icons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
}

.tech-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.3s ease;
}

.tech-icon:hover {
    transform: translateY(-5px);
}

.tech-icon svg {
    width: 40px;
    height: 40px;
}

.tech-icon span {
    font-size: 0.9rem;
    color: #a0a0a0;
}

/* Social Media Icons */
.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
}

.social-icon {
    color: #a0a0a0;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
}

.social-icon:hover {
    color: #00D1FF;
    transform: translateY(-3px);
}

.social-icon::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #00D1FF;
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.social-icon:hover::after {
    transform: scaleX(1);
}

/* Button Styling */
.cta-buttons {
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
}

.primary-btn,
.secondary-btn {
    padding: 1rem 2.5rem;
    border-radius: 30px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
}

.primary-btn {
    background: linear-gradient(45deg, #00D1FF, #0084FF);
    border: none;
    color: white;
    box-shadow: 0 4px 15px rgba(0, 209, 255, 0.3);
}

.secondary-btn {
    background: transparent;
    border: 2px solid #00D1FF;
    color: #00D1FF;
}

.primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 209, 255, 0.4);
}

.secondary-btn:hover {
    background: rgba(0, 209, 255, 0.1);
    transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-heading {
        font-size: 2rem;
    }

    .description {
        font-size: 1rem;
        padding: 0 1rem;
    }

    .tech-icons {
        gap: 1rem;
        flex-wrap: wrap;
    }

    .cta-buttons {
        flex-direction: column;
        padding: 0 2rem;
    }

    .primary-btn,
    .secondary-btn {
        width: 100%;
    }

    .social-links {
        gap: 1rem;
    }
}

.contact-link {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    height: 100%;
}
</style>

<script>
export default {
  methods: {
    scrollToProjects() {
      const projectsSection = document.getElementById('projects-section');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    contactMe() {
      window.location.href = "mailto:baslaworku@gmail.com";
    }
  }
};
</script>
