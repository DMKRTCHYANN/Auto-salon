<template>
  <div class="mx-auto">
    <div class="px-[90px] py-[40px]">
      <div class="flex justify-between items-center">
        <div class="flex">
          <div class="mr-[30px]">
            <img src="/images/logo.svg.png" alt="Logo Image">
          </div>
          <div class="flex gap-[30px]">
            <div class="flex items-center gap-[6px]">
              <a href="/#home" class="font-bold">Home</a>
              <img src="/images/dropdown.png" alt="Drop-down img">
            </div>
            <div class="flex items-center gap-[6px]">
              <a href="/#listing" class="font-bold">Listing</a>
              <img src="/images/dropdown.png" alt="Drop-down img">
            </div>
            <div class="flex items-center gap-[6px]">
              <a href="/#blog" class="font-bold">Blog</a>
              <img src="/images/dropdown.png" alt="Drop-down img">
            </div>
            <div class="flex items-center gap-[6px]">
              <a href="/#pages" class="font-bold">Pages</a>
              <img src="/images/dropdown.png" alt="Drop-down img">
            </div>
            <div class="flex items-center gap-[6px]">
              <a href="/#about" class="font-bold">About</a>
              <img src="/images/dropdown.png" alt="Drop-down img">
            </div>
            <div class="flex items-center gap-[6px]">
              <a href="/#contact" class="font-bold">Contact</a>
              <img src="/images/dropdown.png" alt="Drop-down img">
            </div>
            <div class="flex items-center gap-[6px]">
              <img src="/images/phone.png" alt="Phone img">
              <p class="font-bold">+75 123 456 789</p>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-[20px]">
          <div class="flex items-center gap-[6px]">
            <img src="/images/user.png" alt="User logo">
            <p class="font-bold">Sign in</p>
          </div>
          <div class="flex items-center gap-[6px]">
            <button
                type="submit"
                class="px-[19px] py-[10px] bg-white border border-black rounded-[15px] font-bold"
            >
              Submit Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <client-only>
    <CarScroller/>
  </client-only>
  <div class="max-w-[1580px] w-full mx-auto   my-[115px]">
    <div class="text-center font-bold text-[20px] mb-[40px]">
      <h1>Select a Body Style</h1>
    </div>
    <div class="flex justify-center items-center text-center gap-[100px]">
      <div class="flex-col ">
        <img src="/images/cars/sedan.jpg.png" alt="Sedan car img">
        <p class="font-bold">Sedan</p>
      </div>
      <div class="flex-col">
        <img src="/images/cars/coupe.jpg.png" alt="Coupe car img">
        <p class="font-bold">Coupe</p>
      </div>
      <div class="flex-col">
        <img src="/images/cars/suv.jpg.png" alt="SUV car img">
        <p class="font-bold">SUV</p>
      </div>
      <div class="flex-col">
        <img src="/images/cars/truck.jpg.png" alt="Truck car img">
        <p class="font-bold">Truck</p>
      </div>
      <div class="flex-col">
        <img src="/images/cars/hat.jpg.png" alt="Hatchback car img">
        <p class="font-bold">Hatchback</p>
      </div>
      <div class="flex-col">
        <img src="/images/cars/mini.jpg.png" alt="Convertible car img">
        <p class="font-bold">Convertible</p>
      </div>
    </div>
  </div>
  <div class="bg-[#F9FBFC] py-[115px] px-[100px]">
    <div class="max-w-[1580px] w-full mx-auto flex flex-wrap lg:flex-nowrap gap-[40px]">
      <div class="w-[50%]">
        <p class="text-[40px] font-bold text-[#0B0E1C] leading-[1.2]">
          We're BIG On What <br> Matters To You
        </p>
      </div>
      <div class="w-[50%] grid grid-cols-2 ">
        <div class="max-w-[330px] w-full flex-col items-start gap-[16px] mb-[40px]">
          <img src="/images/matter-1.png" alt="Icon" class="mb-[20px]">
          <div>
            <h3 class="font-semibold text-[18px] text-[#0B0E1C]">Special Financing Offers</h3>
            <p class="text-[14px] text-[#5C5F6E] mt-[8px] leading-[1.5]">
              Our stress-free finance department that can find financial solutions to save you money.
            </p>
          </div>
        </div>
        <div class="max-w-[330px] w-full flex-col items-start gap-[16px] mb-[40px]">
          <img src="/images/matter-2.png" alt="Icon" class="mb-[20px]">
          <div>
            <h3 class="font-semibold text-[18px] text-[#0B0E1C]">Trusted Car Dealership</h3>
            <p class="text-[14px] text-[#5C5F6E] mt-[8px] leading-[1.5]">
              Our stress-free finance department that can find financial solutions to save you money.
            </p>
          </div>
        </div>
        <div class="max-w-[330px] w-full flex-col items-start gap-[16px]">
          <img src="/images/matter-3.png" alt="Icon" class="mb-[20px]">
          <div>
            <h3 class="font-semibold text-[18px] text-[#0B0E1C]">Transparent Pricing</h3>
            <p class="text-[14px] text-[#5C5F6E] mt-[8px] leading-[1.5]">
              Our stress-free finance department that can find financial solutions to save you money.
            </p>
          </div>
        </div>
        <div class="max-w-[330px] w-full flex-col items-start gap-[16px]">
          <img src="/images/matter-4.png" alt="Icon" class="mb-[20px]">
          <div>
            <h3 class="font-semibold text-[18px] text-[#0B0E1C]">Expert Car Service</h3>
            <p class="text-[14px] text-[#5C5F6E] mt-[8px] leading-[1.5]">
              Our stress-free finance department that can find financial solutions to save you money.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white py-[110px]">
    <h1 class="text-[40px] font-bold text-center">
      The Most Searched Cars
    </h1>

    <div class="flex justify-center gap-[10px] my-[20px]">
      <button
          v-for="type in types"
          :key="type"
          @click="carStore.setType(type)"
          :class="[
          'py-[10px] bg-white',
          carStore.selectedType === type.toLowerCase()
            ? 'border-b-[4px] border-b-blue-500 font-semibold'
            : 'border-b-[2px] border-b-gray-200'
        ]"
      >
        {{ type }}
      </button>
    </div>

    <div class="px-[300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
      <CarCard
          v-for="(car, index) in carStore.filteredCars"
          :key="index"
          :car="car"
      />
    </div>
  </div>
  <div class="max-w-[1500px] w-full mx-auto py-12 px-4 sm:px-6">
    <div class="text-start mb-16">
      <h1 class="text-[30px]  font-bold text-gray-900 mb-4">
        Explore Our Premium Brands
      </h1>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <div class="brand-card bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center">
        <img src="/images/logos/audi.png" alt="Audi logo">
        <h3 class="text-lg font-semibold text-gray-900">Audi</h3>
      </div>
      <div class="brand-card bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center">
        <img src="/images/logos/bmw.png" alt="Bmw logo">
        <h3 class="text-lg font-semibold text-gray-900">BMW</h3>
      </div>
      <div class="brand-card bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center">
        <img src="/images/logos/ford.png" alt="Ford logo">
        <h3 class="text-lg font-semibold text-gray-900">Ford</h3>
      </div>
      <div class="brand-card bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center">
        <img src="/images/logos/mercedes.png" alt="Mercedes logo">
        <h3 class="text-lg font-semibold text-gray-900">Mercedes-Benz</h3>
      </div>
      <div class="brand-card bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center">
        <img src="/images/logos/pegoute.png" alt="Peugeot logo">
        <h3 class="text-lg font-semibold text-gray-900">Peugeot</h3>
      </div>
      <div class="brand-card bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center">
        <img src="/images/logos/vw.png" alt="Volkswagen logo">
        <h3 class="text-lg font-semibold text-gray-900">Volkswagen</h3>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between p-6 bg-white min-h-screen">
    <div class=" flex mr-[54px]">
      <div class=" grid mr-[50px]">
        <img src="/images/cars/e-class.png" alt="Mercedes E class" class="w-[285px] rounded-lg ml-[240px] mb-[55px]">
        <img src="/images/cars/rs7.png" alt="Audi rs7" class="rounded-lg ml-[307px]">
      </div>
      <div class="flex items-end">
        <img src="/images/cars/volvo.png" alt="Volvo" class="rounded-lg w-[327px] h-[425px]">
      </div>
    </div>
    <div class="text-center w-[50%] md:text-left md:ml-10 mt-6 md:mt-0">
      <h1 class="text-4xl font-bold text-gray-900">Get A Fair Price For Your <br> Car Sell To Us Today</h1>
      <p class="mt-4 text-gray-600">We are committed to providing our customers with exceptional service, br
        competitive pricing, and a wide range of.</p>
      <div class="mt-4 text-gray-600 list-disc list-inside">
        <div class="flex mb-[10px]">
          <img
              src="/images/done.png"
              alt="Done image"
              class="mr-[10px]"
          >
          <p class="text-gray-900">We are the UK’s largest providers with more patrols in more places</p>
        </div>
        <div class="flex mb-[10px]">
          <img
              src="/images/done.png"
              alt="Done image"
              class="mr-[10px]"
          >
          <p class="text-gray-900">You get 24/7 roadside assistance</p>
        </div>
        <div class="flex mb-[20px]">
          <img
              src="/images/done.png"
              alt="Done image"
              class="mr-[10px]"
          >
          <p class="text-gray-900">We fix 4 out of 5 cars at the roadside</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useCarStore} from '@/stores/useCarStore'
import CarCard from '@/components/CarCard.vue'

const carStore = useCarStore()

const types = ['Sedan', 'SUV', 'Convertible', 'Hatchback']

const cars = ref([
  {
    name: "Range Rover",
    type: "SUV",
  },
  {
    name: "Mercedes w222",
    type: "sedan",
  }
])

const selectedType = ref('sedan')

const filteredCars = computed(() => {
  return cars.value.filter(car => car.type === selectedType.value)
})

</script>