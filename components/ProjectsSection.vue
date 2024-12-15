<template>
  <section id="projects-section" class="projects-section">
    <div class="section-header">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">Some of my recent work</p>
    </div>

    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        @click="openModal(project)"
      >
        <img :src="project.image" alt="Project Image" class="project-image" />
        <div class="project-content">
          <div class="project-tech-stack">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="tech-tag"
              >{{ tech }}</span
            >
          </div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.shortDescription }}</p>
          <div class="project-links">
            <button class="view-details-btn">View Details</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>

        <div class="modal-header">
          <img
            :src="selectedProject.image"
            alt="Project Image"
            class="modal-image"
          />
          <h3 class="modal-title">{{ selectedProject.title }}</h3>
          <div class="modal-tech-stack">
            <span
              v-for="tech in selectedProject.technologies"
              :key="tech"
              class="tech-tag"
              >{{ tech }}</span
            >
          </div>
        </div>

        <div class="modal-body">
          <p class="modal-description">{{ selectedProject.fullDescription }}</p>

          <div class="project-features">
            <h4>Key Features</h4>
            <ul>
              <li v-for="feature in selectedProject.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="project-challenges">
            <h4>Technical Challenges</h4>
            <p>{{ selectedProject.challenges }}</p>
          </div>
        </div>

        <div class="modal-footer">
          <a :href="selectedProject.liveDemo" target="_blank" class="demo-btn">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a :href="selectedProject.github" target="_blank" class="github-btn">
            <i class="fab fa-github"></i> View Code
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selectedProject = ref(null);
const projects = [
  {
    id: 1,
    title: "ML No-Code",
    shortDescription: "A platform for no-coders to train models",
    fullDescription:
      "A project that allows users to input their data and train machine learning models with predictive power and visualization.",
    technologies: ["Nuxt 3", "Tailwind", "Django", "Scikit-learn"],
    features: [
      "No-code interface for training models",
      "Visualization of model performance",
      "Predictive power from trained models",
    ],
    challenges:
      "Ensuring the platform is intuitive for no-coders while maintaining performance for large datasets.",
    liveDemo: "https://ml-nocode.vercel.app",
    github: "https://github.com/BaslaelWorkineh/ML-with-GUI",
    image: "/projectimages/mlnocode.png",
  },
  {
    id: 2,
    title: "HelloHome",
    shortDescription: "Connecting employers with employees",
    fullDescription:
      "A mobile app that streamlines the hiring process by connecting job seekers with employers, making it efficient and effective for both parties.",
    technologies: ["React Native", "Expo", "MongoDB", "TailwindCSS"],
    features: [
      "User-friendly interface for job seekers",
      "Employers can browse and hire suitable candidates",
      "Streamlined hiring process",
    ],
    challenges:
      "Ensuring seamless real-time updates and scalability across multiple users.",
    liveDemo:
      "https://play.google.com/store/apps/details?id=com.jarsoai.hellohome",
    image: "/projectimages/hellohome.png",
  },
  {
    id: 3,
    title: "Simply Chat",
    shortDescription:
      "A real-time messaging, video and drawing app with socket.io.",
    fullDescription:
      "Simply Chat is a feature-rich real-time messaging application that provides users with an intuitive and seamless communication experience. It includes support for chat rooms, messaging, video chat and drawing canvas.",
    technologies: ["Nuxt 3", "Tailwind CSS", "Socket.io", "Node.js"],
    features: [
      "Real-time chat functionality with socket.io",
      "Create and join chat rooms",
      "Video Chating",
      "Canvas Drawing",
    ],
    challenges:
      "Optimizing real-time performance and ensuring data consistency across multiple users in various chat rooms.",
    liveDemo: "https://simply-chat.vercel.app/",
    github: "https://github.com/BaslaelWorkineh/Simply-chat",
    image: "/projectimages/simplychat.png",
  },
  {
    id: 4,
    title: "Space Planets",
    shortDescription: "Interactive 3D planets with hover effects and NASA API.",
    fullDescription:
      "Space Planets is a visually engaging project featuring 3D planets rendered with Three.js. It allows users to explore an interactive space environment with hoverable planet text and integrates the NASA API to display daily space-related information.",
    technologies: ["Nuxt 3", "Three.js", "Tailwind CSS", "NASA API"],
    features: [
      "3D planets rendered using Three.js",
      "Hover text displaying planet details",
      "NASA API integration for daily space info",
      "Smooth transitions and interactive visuals",
    ],
    challenges:
      "Managing performance of real-time 3D rendering while fetching and displaying dynamic NASA API data.",
    liveDemo: "https://space-nuxt-threejs.vercel.app",
    github: "https://github.com/BaslaelWorkineh/Space-nuxt-threejs",
    image: "/projectimages/spacethree.png",
  },
  {
    id: 5,
    title: "HabeanTech",
    shortDescription: "Website for showcasing a startup idea",
    fullDescription:
      "A website that showcases a startup's idea and includes an article page with Sanity as the CMS.",
    technologies: ["Next.js", "Sanity", "TailwindCSS"],
    features: [
      "Article page managed through Sanity CMS",
      "Startup idea showcase",
      "Responsive design",
    ],
    challenges: "Integrating a flexible CMS for content management.",
    liveDemo: "https://habean-tech-sandy.vercel.app/",
    image: "/projectimages/habeantech.png",
  },
  {
    id: 6,
    title: "VS-Code Extension for MeTTa Language",
    shortDescription: "The most downloaded extension for the MeTTa language",
    fullDescription:
      "A VS-Code extension for the MeTTa language, offering features like code snippets, formatting, highlighting, and more for AGI research.",
    technologies: ["JavaScript", "VS Code API"],
    features: [
      "Code snippets for MeTTa language",
      "Automatic code formatting and highlighting",
      "Hover details and folding support",
      "Refactor support",
    ],
    challenges:
      "Developing comprehensive functionality to support various coding tasks for the MeTTa language.",
    liveDemo:
      "https://marketplace.visualstudio.com/items?itemName=BaslaelWorkinehAyele.metta-formatter-highlighter",
    github: "https://github.com/BaslaelWorkineh/MeTTa_vscode_extension",
    image: "/projectimages/mettalang.png",
  },
  {
    id: 7,
    title: "Mobile Multiplayer TPS Starter Asset",
    shortDescription: "Essential mechanics for multiplayer TPS games",
    fullDescription:
      "A Unity starter asset providing essential mechanics like shooting, running, jumping, and procedural recoil, suitable for multiplayer games.",
    technologies: ["Unity", "C#", "Photon"],
    features: [
      "Shooting, running, jumping mechanics",
      "Procedural recoil",
      "Weapon reloading and bot enemies",
      "Kill leaderboard",
    ],
    challenges:
      "Ensuring synchronization of multiplayer mechanics across various devices and network conditions.",
    liveDemo:
      "https://www.youtube.com/watch?v=ZVfKeEiKNo0&t=12s&ab_channel=MrBasketo3DGame",
    github:
      "https://github.com/BaslaelWorkineh/3rd-Person-Multiplayer-Starter-Unity-Asset-",
    image: "/projectimages/unityasset.png",
  },
  {
    id: 8,
    title: "Wild Life Simulation",
    shortDescription: "A simulation showcasing the beauty of wildlife",
    fullDescription:
      "A simulation where foxes and sheep engage in a lifelike routine driven by their basic instincts, including eating, drinking, sleeping, and survival interactions.",
    technologies: ["Unity 3D", "C#", "Blender"],
    features: [
      "Lifelike animal behaviors",
      "Foxes and sheep interactions",
      "Daily routines and survival dynamics",
    ],
    challenges:
      "Creating realistic AI behaviors for wildlife and optimizing performance.",
    liveDemo: "https://www.youtube.com/watch?v=lFQmcj_tWio&t=71s",
    image: "/projectimages/wildsimulation.png",
  },
  {
    id: 9,
    title: "Motor Bike Physics Using C#",
    shortDescription: "A sophisticated motorbike controller for Unity",
    fullDescription:
      "A motorbike controller crafted with C# and Blender to enhance the riding experience for motorcycle enthusiasts.",
    technologies: ["C#", "Blender", "Unity"],
    features: ["Realistic motorbike physics", "Smooth riding experience"],
    challenges:
      "Designing a realistic motorbike controller that simulates real-world physics.",
    liveDemo: "https://www.youtube.com/watch?v=sYftUpn_LZY",
    github: "https://github.com/BaslaelWorkineh/Unity-3d-Motorbike-Controller",
    image: "/projectimages/motorpysics.png",
  },
  {
    id: 10,
    title: "Slash Dash",
    shortDescription: "A 2D game developed in 2 days",
    fullDescription:
      "A game developed in just two days as part of a challenge, using Unity and C# to create a captivating 2D game.",
    technologies: ["Unity", "C#"],
    features: ["Fast-paced 2D gameplay", "Challenging mechanics"],
    challenges:
      "Completing the game within a strict 2-day timeframe while maintaining gameplay quality.",
    liveDemo:
      "https://github.com/BaslaelWorkineh/Slash-Dash_source-code-MyGame",
    github: "https://github.com/BaslaelWorkineh/Slash-Dash_source-code-MyGame",
    image: "/projectimages/slashdash.png",
  },
];

const openModal = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedProject.value = null;
  document.body.style.overflow = "auto";
};
</script>

<style scoped>
.projects-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0a0b0f 0%, #141922 100%);
  min-height: 100vh;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: "Syncopate", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #00d1ff, #0084ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-family: "Inter", sans-serif;
  color: #a0a0a0;
  font-size: 1.1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: rgba(0, 209, 255, 0.1);
  color: #00d1ff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-family: "Inter", sans-serif;
}

.project-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
}

.project-description {
  color: #a0a0a0;
  font-family: "Inter", sans-serif;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.view-details-btn {
  background: linear-gradient(45deg, #00d1ff, #0084ff);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.view-details-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 209, 255, 0.3);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #141922;
  border-radius: 20px;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #a0a0a0;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: #00d1ff;
}

.modal-header {
  margin-bottom: 2rem;
}

.modal-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1rem;
}

.modal-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.modal-body {
  margin-bottom: 2rem;
}

.modal-description {
  color: #a0a0a0;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.project-features,
.project-challenges {
  margin-bottom: 2rem;
  color: #a0a0a0;
}

.project-features h4,
.project-challenges h4 {
  color: #00d1ff;
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.project-features ul {
  list-style-type: none;
  padding-left: 0;
}

.project-features li {
  color: #a0a0a0;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.project-features li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #00d1ff;
}

.modal-footer {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.demo-btn,
.github-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.demo-btn {
  background: linear-gradient(45deg, #00d1ff, #0084ff);
  color: white;
}

.github-btn {
  background: transparent;
  border: 2px solid #00d1ff;
  color: #00d1ff;
}

.demo-btn:hover,
.github-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 209, 255, 0.2);
}

.project-image {
  height: 150px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 20px;
}

.modal-image {
  height:260px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .modal-content {
    padding: 1.5rem;
    margin: 1rem;
  }

  .modal-footer {
    flex-direction: column;
  }

  .demo-btn,
  .github-btn {
    width: 100%;
    justify-content: center;
  }
  .modal-image {
  height:150px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 20px;
}
}
</style>
