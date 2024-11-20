<template>
  <div class="flex justify-center absolute text-center w-full h-full bg-neutral-700 ">
    <router-link to="/" class="text-white absolute left-8 border px-2 py-1 rounded-xl border-white mt-10">назад</router-link>
    <section class="bg-main text-black p-4 bg-[#D9D4C9] w-fit m-auto">
      <h1 class="text-2xl m-4">Авторизация</h1>
      <form>

        <div class="flex flex-col gap-4 text-black">
          <input type="email" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Пароль" v-model="password" />
        </div>

        <div class="flex justify-center gap-8 m-4 text-2xl font-semibold">
          <button 
            v-if="buttonToggle" 
            type="button" 
            @click="user.login(email, password)"
            class="bg-white color-main  rounded-xl px-2"
            >
            Зайти
          </button>
          <button 
            v-else 
            type="button" 
            @click="user.register(email, password)"
            class="bg-white color-main  rounded-xl px-2"
            >
            Регистрация
          </button>
        </div>

      </form>

      <button @click="buttonToggle = false" v-if="buttonToggle">нету учетной записи ?</button>
      <button @click="buttonToggle = true" v-if="!buttonToggle">у вас уже есть учетная запись ?</button>
    </section>
  </div>
</template>


<script setup>
    import { user } from "@/lib/stores/user.js";
    import { ref } from "vue";

    const email = ref("")
    const password = ref("")
    const buttonToggle = ref(true)
</script>