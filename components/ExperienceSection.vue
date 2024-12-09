<template>
  <div class="min-h-screen w-full py-20 bg-gradient"
    style="background: linear-gradient(135deg, #0a0b0f 0%, #141922 100%);">
    <div class="container mx-auto max-w-4xl">
      <h1 class="text-3xl md:text-4xl px-4 mb-12 text-center font-bold gradient-text">
        Experiences
      </h1>
      <div class="px-4 md:px-10">
        <!-- Items -->
        <div v-for="(experience, index) in experiences" :key="index" class="relative pl-8 sm:pl-32 py-6 group"
          :class="{ 'fade-in-top': index === 0 }">
          <!-- Organization label -->
          <div class="font-caveat font-medium text-lg md:text-2xl px-1 gradient-text mb-1 sm:mb-0">
            {{ experience.organization }}
          </div>
          <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
          <div
            class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-[#00D1FF] before:to-[#0084FF] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 before:rotate-180 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-gradient-to-br after:from-[#00D1FF] after:to-[#0084FF] after:border-4 after:box-content after:border-[#00D1FF]/30 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">

            <time
              class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 gradient-text bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded-full hover:border-[#00D1FF]/40 transition-all duration-300">
              {{ experience.startYear }}
            </time>
            <div
              class="text-[18px] md:text-[24px] font-bold text-stone-300 px-1 hover:gradient-text transition-all duration-300">
              {{ experience.position }}
            </div>
          </div>
          <!-- Content -->
          <div class="text-stone-400 px-2 font-light leading-relaxed hover:text-stone-300 transition-all duration-300">
            {{ experience.description }}
          </div>
        </div>
        <!-- Last Node -->
        <div class="relative pl-8 sm:pl-32 py-14 group">
          <div
            class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-gradient-to-br after:from-[#00D1FF] after:to-[#0084FF] after:border-4 after:box-content after:border-[#00D1FF]/40 after:animate-heartbeat after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Experiences",
  setup() {
    const experiences = reactive([
      {
        organization: "SingularityNET",
        position: "Software Engineer",
        startYear: "2024",
        description: "Developing decentralized AI solutions.",
      },
      {
        organization: "iCog Labs",
        position: "Junior Software Engineer",
        startYear: "2023",
        description: "Worked on AI and blockchain integrations.",
      },
      {
        organization: "HelloHome",
        position: "Mobile Application Developer",
        startYear: "2022",
        description: "Built scalable mobile solutions for real estate.",
      },
      {
        organization: "JarsoAI",
        position: "Frontend Developer",
        startYear: "2022",
        description: "Built scalable web solutions for schools.",
      },
    ]);

    return { experiences };
  },
};
</script>

<style>
.gradient-text {
  background: linear-gradient(45deg, #00D1FF, #0084FF);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}

@keyframes heartbeat {

  0%,
  100% {
    transform: scale(1) translate(-50%, 6px);
    opacity: 1;
  }

  50% {
    transform: scale(1.1) translate(-45%, 6px);
    opacity: 0.8;
  }
}

.animate-heartbeat {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-top {
  animation: fadeInTop 0.6s ease-out forwards;
}

/* Hover effects for timeline nodes */
.group:hover .before\:bg-gradient-to-b::before {
  opacity: 0.8;
  box-shadow: 0 0 15px rgba(0, 209, 255, 0.3);
}

/* Glass effect for date badges */
time {
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 10px rgba(0, 209, 255, 0.1);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}
</style>