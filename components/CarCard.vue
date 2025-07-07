<template>
  <div class="max-w-[400px] w-full bg-white rounded-[14px] shadow-md overflow-hidden">
    <div class="relative">
      <img
          :src="car.image"
          :alt="car.name"
          class="w-full h-auto rounded-t-[14px]"
      />
    </div>
    <div class="px-[25px] py-[15px]">
      <p class="text-[16px] font-medium">{{ car.model }}</p>
      <p class="text-[14px] text-gray-500 pt-[4px]">{{ car.description }}</p>
      <div class="w-full h-[1px] bg-gray-200 my-[10px]"></div>
      <div class="flex justify-between text-[13px] text-gray-700">
        <div class="flex flex-col items-center">
          <img src="/images/mileage.png" alt="Mileage" class="w-[20px] mb-[2px]" />
          <p>{{ car.mileage }}</p>
        </div>
        <div class="flex flex-col items-center">
          <img src="/images/engine.png" alt="Petrol" class="w-[20px] mb-[2px]" />
          <p>{{ car.engine }}</p>
        </div>
        <div class="flex flex-col items-center">
          <img src="/images/transmission.png" alt="Transmission" class="w-[20px] mb-[2px]" />
          <p>{{ car.transmission }}</p>
        </div>
      </div>
      <div class="mt-[15px] flex items-center justify-between">
        <p class="text-[18px] font-semibold">{{ car.price }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  car: Object
})
</script>
