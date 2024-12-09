<template>
    <section class="skills-section">
      <div class="section-header">
        <h2 class="section-title">Technical Skills</h2>
      </div>
  
      <div class="skills-container">
        <div v-for="(skillGroup, category) in skillGroups" 
             :key="category" 
             class="skill-category">
          <h3 class="category-title">{{ category }}</h3>
          <div class="skills-grid">
            <div v-for="skill in skillGroup" 
                 :key="skill.name" 
                 class="skill-card">
              <i :class="skill.icon" class="skill-icon"></i>
              <h4 class="skill-name">{{ skill.name }}</h4>
              <div class="skill-level">
                <div class="level-bar" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const skillGroups = reactive({
  'Frontend Development': [
    { name: 'Vue.js', level: 90, icon: 'fab fa-vuejs' },
    { name: 'Nuxt.js', level: 85, icon: 'fab fa-n' },
    { name: 'Next.js', level: 90, icon: 'fab fa-next' },
    { name: 'React', level: 95, icon: 'fab fa-react' },
    { name: 'React Native', level: 90, icon: 'fab fa-react' },
    { name: 'TailwindCSS', level: 85, icon: 'fas fa-wind' },
  ],
  'Backend Development': [
    { name: 'Django', level: 80, icon: 'fab fa-python' },
    { name: 'Node.js', level: 85, icon: 'fab fa-node-js' },
    { name: 'Express.js', level: 80, icon: 'fas fa-server' },
    { name: 'MongoDB', level: 80, icon: 'fas fa-database' },
    { name: 'PostgreSQL', level: 80, icon: 'fas fa-database' },
    { name: 'RESTful APIs', level: 85, icon: 'fas fa-plug' },
  ],
  'Development Tools': [
    { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
    { name: 'Docker', level: 70, icon: 'fab fa-docker' },
    { name: 'Postman', level: 80, icon: 'fas fa-bullhorn' },
    { name: 'VS Code', level: 90, icon: 'fas fa-code' },
    { name: 'Terminal', level: 85, icon: 'fas fa-terminal' },
    { name: 'NPM', level: 85, icon: 'fab fa-npm' },
    { name: 'Expo', level: 80, icon: 'fab fa-react' },
    { name: 'Jupyter Notebook', level: 75, icon: 'fas fa-code-branch' },
  ],
  'Additional Skills': [
    { name: 'Clean Code', level: 100, icon: 'fas fa-code' },
    { name: 'TDD', level: 85, icon: 'fas fa-vial' },
    { name: 'Communication', level: 100, icon: 'fas fa-comments' },
    { name: 'Responsive Design', level: 100, icon: 'fas fa-mobile-alt' },
  ],
});

  </script>
  
  <style scoped>
  .skills-section {
    padding: 3rem 1.5rem;
    background: linear-gradient(135deg, #0a0b0f 0%, #141922 100%);
    min-height: auto;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
    color: #00D1FF;
    margin-bottom: 1rem;
  }
  
  .skills-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .skill-category {
    margin-bottom: 2rem;
  }
  
  .category-title {
    font-size: 1.2rem;
    color: #00D1FF;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
    border-left: 2px solid #00D1FF;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .skill-card {
    background: #252525;
    padding: 1rem;
    border-radius: 8px;
  }
  
  .skill-icon {
    font-size: 1.2rem;
    color: #00D1FF;
    margin-bottom: 0.5rem;
  }
  
  .skill-name {
    font-size: 0.9rem;
    color: #ffffff;
    margin: 0.5rem 0;
  }
  
  .skill-level {
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
  
  .level-bar {
    height: 100%;
    background: #00D1FF;
    border-radius: 2px;
    transition: width 0.5s ease;
  }
  
  @media (max-width: 768px) {
    .skills-section {
      padding: 2rem 1rem;
    }
  
    .section-title {
      font-size: 1.5rem;
    }
  
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  
    .skill-card {
      padding: 0.8rem;
    }
  }
  </style>