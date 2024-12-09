<template>
    <section class="experience-section">
      <div class="section-header">
        <h2 class="section-title">Professional Experience</h2>
      </div>
      <div class="timeline">
        <div v-for="(job, index) in jobs" 
             :key="index" 
             class="timeline-item"
             v-motion
             :initial="{ opacity: 0, y: 50 }"
             :visibleOnce="{ opacity: 1, y: 0 }"
             :delay="index * 200">
          <div class="timeline-content">
            <div class="timeline-point" :class="{ 'active': isHovered === index }" />
            <div class="job-info" 
                 @mouseenter="isHovered = index"
                 @mouseleave="isHovered = null">
              <div class="job-details">
                <h3 class="job-title">{{ job.title }}</h3>
                <p class="company-name">{{ job.company }}</p>
                <p class="job-duration">{{ job.duration }}</p>
                <p class="job-location">
                  <i class="fas fa-map-marker-alt"></i>
                  {{ job.location }}
                </p>
              </div>
            </div>
          </div>
          <div v-if="index !== jobs.length - 1" 
               class="line"
               :class="{ 'active': isHovered === index }" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isHovered = ref(null);
  
  const jobs = [
    {
      logo: '/assets/singularity-logo.png',
      title: 'Software Engineer',
      company: 'SingularityNET',
      duration: 'Aug 2024 - Present · 5 mos',
      location: 'Remote',
    },
    {
      logo: '/assets/icog-logo.png',
      title: 'Junior Software Engineer',
      company: 'iCog Labs',
      duration: 'Jul 2024 - Present · 6 mos',
      location: 'Ethiopia',
    },
    {
      logo: '/assets/hello-home-logo.png',
      title: 'Mobile Application Developer',
      company: 'HelloHome',
      duration: 'May 2024 - Jul 2024 · 3 mos',
      location: 'Ethiopia · Remote',
    },
    {
      logo: '/assets/jarsoai-logo.png',
      title: 'Data Analyst',
      company: 'JarsoAI',
      duration: 'Nov 2021 - Aug 2022 · 10 mos',
      location: 'Ethiopia',
    },
  ];
  </script>
  
  <style scoped>
  .experience-section {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #0a0b0f 0%, #141922 100%);
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #00d1ff;
    text-shadow: 0 0 10px rgba(0, 209, 255, 0.3);
    position: relative;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #00d1ff;
    border-radius: 2px;
  }
  
  .timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    width: 100%;
  }
  
  .timeline-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
  }
  
  .timeline-content {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  }
  
  .timeline-point {
    width: 15px;
    height: 15px;
    background-color: #00d1ff;
    border-radius: 50%;
    position: absolute;
    left: -25px;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 209, 255, 0.5);
  }
  
  .timeline-point.active {
    transform: scale(1.5);
    box-shadow: 0 0 20px rgba(0, 209, 255, 0.8);
  }
  
  .job-info {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 10px;
    width: 100%;
    transition: all 0.3s ease;
  }
  
  .job-info:hover {
    transform: translateX(10px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .job-logo {
    flex-shrink: 0;
  }
  
  .job-logo img {
    width: 60px;
    height: 60px;
    margin-right: 1.5rem;
    border-radius: 8px;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  
  .job-info:hover .job-logo img {
    transform: scale(1.1);
  }
  
  .job-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .job-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #00d1ff;
    margin: 0;
  }
  
  .company-name {
    font-size: 1.1rem;
    color: #ffffff;
    margin: 0;
  }
  
  .job-duration,
  .job-location {
    font-size: 0.9rem;
    color: #a0a0a0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .line {
    width: 2px;
    height: 80px;
    background-color: #00d1ff;
    margin-top: 1rem;
    transition: all 0.3s ease;
    opacity: 0.5;
  }
  
  .line.active {
    opacity: 1;
    box-shadow: 0 0 10px rgba(0, 209, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    .experience-section {
      padding: 3rem 1rem;
    }
  
    .section-title {
      font-size: 2rem;
    }
  
    .timeline-content {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .job-info {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
    }
  
    .job-logo {
      margin-bottom: 1rem;
    }
  
    .job-logo img {
      width: 50px;
      height: 50px;
    }
  
    .timeline-point {
      left: 50%;
      transform: translateX(-50%);
      top: -25px;
    }
  
    .timeline-point.active {
      transform: translateX(-50%) scale(1.5);
    }
  
    .line {
      width: 100%;
      height: 2px;
    }
  
    .job-info:hover {
      transform: translateY(-5px);
    }
  }
  </style>