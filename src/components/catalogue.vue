<template>
    <section id="catalogue">
        <h3 class="text-center font-semibold text-2xl p-8 mb-4">Каталог</h3>
       <div class="flex gap-8">
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
    </section>
</template>

<script setup>
    import { goods } from "@/lib/stores/items.js";
    import { onBeforeMount, ref } from "vue";
    import { getImg } from "@/lib/stores/file.js";
    
    const allItems = ref()
    const imgSwiperCount = ref(0)

    function IncreaseDecreaseBtn(good,type){
        const switchingGood = ref(allItems.value.find(item => item.$id === good.$id))

        if(type === '+' && switchingGood.value){
            imgSwiperCount.value += 1
        }
    }

    onBeforeMount(async() =>{
        await goods.init()
        allItems.value = goods.current
    })
</script>