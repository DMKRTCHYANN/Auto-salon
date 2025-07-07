import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCarStore = defineStore('car', () => {
    const selectedType = ref('sedan')

    const cars = ref([
        {
            name: "Range Rover",
            type: "SUV",
            model: "T-Cross – 2023",
            description: "4.0 D5 PowerPulse Momentum 5dr AWD",
            mileage: "15 Miles",
            engine: "Petrol",
            transmission: "CVT",
            price: "$15,000",
            image: "/images/cars/rover.png",
        },
        {
            name: "Mercedes w222",
            type: "sedan",
            model: "Mercedes S-Class – 2022",
            description: "3.0 V6 Premium Package",
            mileage: "22 Miles",
            engine: "Diesel",
            transmission: "Automatic",
            price: "$25,000",
            image: "/images/cars/mercedes.png",
        },
        {
            name: "Audi",
            type: "sedan",
            model: "Audi S8 – 2022",
            description: "3.0 V6 Premium Package",
            mileage: "22 Miles",
            engine: "Petrol",
            transmission: "Automatic",
            price: "$70,000",
            image: "/images/cars/audi-s8.png",
        },
        {
            name: "Porsche",
            type: "sedan",
            model: "Porsche Panamera turbo s – 2022",
            description: "4.0 V8 Premium Package",
            mileage: "22 Miles",
            engine: "Hybrid",
            transmission: "Automatic",
            price: "$18,000",
            image: "/images/cars/panamera.jpeg",
        },
        {
            name: "BMW",
            type: "sedan",
            model: "BMW CS  – 2022",
            description: "4.4 V8 Premium Package",
            mileage: "22 Miles",
            engine: "Hybrid",
            transmission: "Automatic",
            price: "$200,000",
            image: "/images/cars/bmw-m5-cs.webp",
        },
        {
            name: "Porsche",
            type: "SUV",
            model: "Cayenne turbo s  – 2024",
            description: "4.4 V8 Premium Package",
            mileage: "22 Miles",
            engine: "Petrol",
            transmission: "Automatic",
            price: "$190,000",
            image: "/images/cars/cayenne.jpeg",
        },
        {
            name: "BMW",
            type: "SUV",
            model: "X5M competition  – 2025",
            description: "4.4 V8 Premium Package",
            mileage: "22 Miles",
            engine: "Petrol",
            transmission: "Automatic",
            price: "$130,000",
            image: "/images/cars/x5.jpg",
        },
        {
            name: "Audi",
            type: "SUV",
            model: "RS Q8  – 2024",
            description: "4.4 V8 Premium Package",
            mileage: "22 Miles",
            engine: "Petrol",
            transmission: "Automatic",
            price: "$130,000",
            image: "/images/cars/rsq8.webp",
        },
    ])

    const filteredCars = computed(() =>
        cars.value.filter(car => car.type.toLowerCase() === selectedType.value)
    )

    function setType(type) {
        selectedType.value = type.toLowerCase()
    }

    return {
        selectedType,
        cars,
        filteredCars,
        setType
    }
})
