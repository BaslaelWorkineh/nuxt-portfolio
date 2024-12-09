<template>
  <section class="tech-stack">
    <div class="container">
      <div class="title-wrapper">
        <span class="background-text">FAVORITE</span>
        <h2>My Favorite Tools</h2>
      </div>
      <div class="stack-line">
        <div class="stack-item" v-for="(tech, index) in techStack" :key="index">
          <div class="icon-wrapper">
            <img :src="tech.icon" :alt="tech.name" class="svg-icon" />
          </div>
          <span class="tech-name">{{ tech.name }}</span>
        </div>
      </div>
      <div class="quote-container">
      <p class="quote-text">
        For ML, I have other Fav. tools. <br /> Check out my resume.
      </p>
    </div>
    </div>
  </section>
</template>

<script setup>
const techStack = [
{
    name: 'NextJS',
    icon: '/icons/nextjs-s.svg', // Path to Tailwind CSS SVG icon
  },
  {
    name: 'React',
    icon: '/icons/react.svg', // Path to Nuxt.js SVG icon
  },
  {
    name: 'Nuxt 3',
    icon: '/icons/nuxt-icon.svg', // Path to Nuxt.js SVG icon
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript-o.svg', // Path to TypeScript SVG icon
  },
  {
    name: 'Tailwind',
    icon: '/icons/tailwind-s.svg', // Path to Tailwind CSS SVG icon
  },
  {
    name: 'GraphQL',
    icon: '/icons/graphql.svg', // Path to Tailwind CSS SVG icon
  },
  {
    name: 'PostgreSQL',
    icon: '/icons/postgresql.svg',
  },
  {
    name: 'Linux',
    icon: '/icons/linux.svg',
  },
  {
    name: 'Django',
    icon: '/icons/django.svg',
  },
];
</script>

<style scoped>
.tech-stack {
  background: linear-gradient(135deg, #0a0b0f 0%, #141922 100%);
  padding: 6rem 0;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.title-wrapper {
  position: relative;
  text-align: center;
  margin-bottom: 4rem;
}

.background-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px rgba(0, 209, 255, 0.1);
  letter-spacing: 0.5rem;
  white-space: nowrap;
  z-index: 0;
}

h2 {
  position: relative;
  text-align: center;
  font-size: 2.5rem;
  color: #00D1FF;
  z-index: 1;
}

.stack-line {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  position: relative;
}

.stack-line::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 1px;
  background: rgba(0, 209, 255, 0.2);
}

.stack-item {
  text-align: center;
  transition: transform 0.3s ease;
  z-index: 1;
}

.stack-item:hover {
  transform: translateY(-10px);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: transparent;
  border: 2px solid #00D1FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.stack-item:hover .icon-wrapper {
  background: #00D1FF;
}

.svg-icon {
  width: 36px;
  height: 36px;
}

.stack-item:hover .svg-icon {
  fill: #141922;
}

.tech-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #00D1FF;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .background-text {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
  }

  .stack-line {
    flex-wrap: wrap;
    gap: 2rem;
  }

  .stack-line::before {
    display: none;
  }

  .icon-wrapper {
    width: 50px;
    height: 50px;
  }

  .svg-icon {
    width: 28px;
    height: 28px;
  }

  .tech-name {
    font-size: 0.8rem;
  }
}

.ml-text  {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size:18px;
  color: #00D1FF;
  text-align: center;
  margin-top: 3rem;
  opacity: 1;
  text-shadow: 0 0 10px rgba(0, 209, 255, 0.3);
  position: relative;
}

.quote-container {
  margin-top: 3rem;
  position: relative;
  background: rgba(0, 209, 255, 0.1); /* Transparent background */
  border-left: 6px solid #00D1FF; /* Left border color */
  padding: 1.5rem 2rem;
  border-radius: 6px;
  font-family: 'Caveat', cursive;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.quote-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: #00D1FF;
  font-weight: 500;
  line-height: 1.6;
}

.quote-container:hover {
  background: rgba(0, 209, 255, 0.15); /* Slightly increase opacity on hover */
  border-left-color: #0084FF; /* Change border color on hover */
  transform: scale(1.02); /* Add subtle scaling */
  transition: all 0.3s ease-in-out;
}


</style>
