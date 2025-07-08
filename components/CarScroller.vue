<template>
  <div class="flicking-wrapper">
    <Flicking
        :options="{
    circular: true,
    align: 'center',
    duration: 600,
    moveType: 'snap',
    autoResize: true
  }"
        :plugins="plugins"
        ref="flicking"
    >

      <div
          class="plugins-panel"
          v-for="(image, index) in images"
          :key="index"
          :style="{ backgroundImage: `url(${image.src})` }"
      >
        <div class="panel-overlay"></div>
        <div class="content">
          <div class="short text-center animate-text">
            {{ image.short_description }}
          </div>
          <div class="long  text-center animate-text">
            {{image.long_description}}
          </div>
        </div>
      </div>
      <template #viewport>
        <span class="flicking-arrow-prev is-thin"></span>
        <span class="flicking-arrow-next is-thin"></span>
      </template>
    </Flicking>
  </div>
</template>

<script setup>
import Flicking from '@egjs/vue3-flicking';
import {Arrow, AutoPlay} from '@egjs/flicking-plugins';
import '@egjs/vue3-flicking/dist/flicking.css';
import '@/assets/css/arrow.css';

const images = [
  {
    src: '/images/flicking/audi-rs.jpg',
    short_description: "The World's Largest Used Car Dealership",
    long_description: 'Top deals on premium used cars.',
  },
  {
    src: '/images/flicking/taycan.jpg',
    short_description: 'Premium Cars, Unmatched Service',
    long_description: 'Luxury and performance in one place.',
  },
  {
    src: '/images/flicking/turing.png',
    short_description: 'Drive the Future of Luxury',
    long_description: 'Find your dream car today.',
  },
];


const flicking = ref(null);
const plugins = [
  new AutoPlay({duration: 4000, direction: 'NEXT', stopOnHover: false}),
  new Arrow(),
];
</script>
<style scoped>
.flicking-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.plugins-panel {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1400px;
  height: 700px;
  flex-shrink: 0;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.plugins-panel:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.panel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
  z-index: 1;
}

.content {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding-left: 60px;
  position: relative;
  z-index: 2;
}

.short {
  color: #fff;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
}

.long{
  color: #fff;
  font-size: 35px;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
}

.animate-text {
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.flicking-arrow-prev,
.flicking-arrow-next {
  z-index: 10;
  cursor: pointer;
}
</style>