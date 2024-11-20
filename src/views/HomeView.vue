<template>
    <div class="bg-[#D9D4C9]">
        <mainHeader :user-name="currentUser"/>
        <mainCategories/>
        <catalogue />
    </div>
</template>


<script setup>
  import mainCategories from "../components/mainCategories.vue";
  import mainHeader from "../components/mainHeader.vue";
  import catalogue from "../components/catalogue.vue";
  import { user } from "../lib/stores/user";
  import { onBeforeMount, ref } from "vue";

  const currentUser = ref(null)

  onBeforeMount(async() => {
    await user.init()
    currentUser.value = user.current.email
  })
</script>