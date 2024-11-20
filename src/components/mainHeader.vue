<template>
    <div class="bg-center bg-cover text-white transition-colors duration-200 main-bg">

        <div class="flex justify-end p-4">
            <router-link
            v-if="!userName"
            to="/login" 
            class=" absolute right-8 border px-2 py-1 rounded-xl border-white">
            <button class="flex gap-4 items-center">
                <h3>login</h3>
                <img src="../assets/icons/login-svgrepo-com.svg" width="30"  alt=""> 
            </button>
            </router-link>

            <div v-else>
                <button @click="openUserSettings = true">{{ userName }}</button>
                <div class="absolute flex flex-col bg-[rgba(0,0,0,0.4)] h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    :class="openUserSettings ? 'h-24' : ''">
                    <button class="hover:underline" @click="user.logout()">выйти с профиля</button>
                    <router-link class="hover:underline text-center" to="/contentManage">управление контентом</router-link>
                    <img @click="openUserSettings = false" class="m-auto cursor-pointer" src="../assets/icons/arrow-up.svg" width="20" alt="">
                </div>
            </div>
        </div>

       <div class="flex justify-evenly items-center py-12 px-8">
            <nav class="flex justify-center gap-6 bg-black bg-opacity-70 border-gray-700 border px-4 py-1 rounded-lg text-lg min-w-[300px]">
                <a href="#" class="hover:text-orange-400">Кухня</a>
                <a href="#" class="hover:text-orange-400">Спальная</a>
                <a href="#" class="hover:text-orange-400">Зал</a>
            </nav>
            <h3 class="text-3xl font-bold text-center">Danis Shop</h3>
            <nav class="flex gap-4 bg-black bg-opacity-70 border-gray-700 border px-4 py-1 rounded-lg text-lg min-w-[300px]">
                <a href="#" class="hover:text-orange-400">мягкая </a>
                <a href="#" class="hover:text-orange-400">корпусная </a>
                <a href="#" class="hover:text-orange-400">комнатная </a>
            </nav>
       </div>
       <div class="text-center p-36">   
            <h1 class="text-[44px] ">Мебель из Европы</h1>
            <p class="pb-8">качественная мебель из европы</p>
            <a href="#catalogue" class="border px-2 rounded-lg text-xl hover:bg-[rgba(0,0,0,0.6)] hover:border-none">каталог</a>
        </div>
    </div>
  </template>
  
  <script setup >
import { ref } from 'vue';
import { user } from "@/lib/stores/user.js"

  const prop = defineProps({
    userName: String
  })

  const openUserSettings = ref(false)
  </script>
  
  <style scoped>
    .main-bg{
        background: url(@/assets/img/header-bg.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
  </style>