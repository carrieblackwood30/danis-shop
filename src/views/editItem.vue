<template>
    <div class="bg-[#D9D4C9] h-screen">
        <h3 class="text-center p-4 font-semibold text-xl">Управление Контентом</h3>
        <router-link to="/contentManage" class="border w-fit m-4 bg-white px-2">назад</router-link>
        <filters 
            :items="allItems" 
            @filterByCategory="(category) => filterByCategory(category)" 
            @filterByText="(text) => filterByText(text)"
            />
        <div class="flex gap-4 m-8">
            <div v-for="item in allItems" :key="item.id">
                <h3>{{ item.header }}</h3>
                <img  :src="getImg(JSON.parse(item.imgsId)[0])" width="300" alt="loading...">
                <h4>{{ item.price }}</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
    import filters from "@/components/filters.vue";
    import { goods } from "@/lib/stores/items.js";
    import { onBeforeMount, ref } from "vue";
    import { getImg } from "@/lib/stores/file.js";

    const allItems = ref()

    function filterByCategory(category){
        if(category === "Все"){
            allItems.value = goods.current
        }
        else{
            allItems.value = goods.current
            allItems.value = goods.current.filter(item => item.categories === category)
        }
    }

    function filterByText(text){
        allItems.value = goods.current
        allItems.value = goods.current.filter(item => item.header.includes(text))
    }

    onBeforeMount(async() =>{
        await goods.init()
        allItems.value = goods.current
    })
</script>