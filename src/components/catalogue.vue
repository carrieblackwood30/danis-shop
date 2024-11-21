<template>
    <section id="catalogue">
        <h3 class="text-center font-semibold text-2xl p-8 mb-4">Каталог</h3>
       <div class="flex gap-8" v-if="allItems">
            <div v-for="good in allItems" :key="good.id">
            <h3> {{ good.header }}</h3>
                <div class="flex gap-4 relative w-fit h-fit ">
                    <img 
                    :src="getImg(JSON.parse(good.imgsId)[0])" 
                    alt="" 
                    width="400"
                    >
                </div>
                <h4>{{ good.price }}</h4>
            </div>
       </div>
       <div v-else>
            loading...
       </div>
    </section>
</template>

<script setup>
    import { goods } from "@/lib/stores/items.js";
    import { onBeforeMount, ref } from "vue";
    import { getImg } from "@/lib/stores/file.js";
    
    const allItems = ref()

    onBeforeMount(async() =>{
        await goods.init()
        allItems.value = goods.current
    })
</script>