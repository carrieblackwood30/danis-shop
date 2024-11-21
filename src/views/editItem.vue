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
            <div class="cursor-pointer" v-for="item in allItems" :key="item.id" @click="editThisItem(item)">
                <h3>{{ item.header }}</h3>
                <img :src="getImg(JSON.parse(item.imgsId)[0])" width="300" alt="loading...">
                <h4>{{ item.price }}</h4>
            </div>
        </div>
        <editItemId 
            v-if="toggleSettings"
            :header="chosenHeader"
            :description="chosenDescription"
            :price="chosenPrice"
            :categories="categories"
            :id="chosenId"
        >
            <button
                @click="toggleSettings = false" 
                class="absolute left-4 top-4 text-2xl font-bold bg-white w-8 h-8 rounded-full text-[#151515]"
                > x 
            </button>
        </editItemId>
    </div>
</template>

<script setup>
    import filters from "@/components/filters.vue";
    import { goods } from "@/lib/stores/items.js";
    import { onBeforeMount, ref } from "vue";
    import { getImg } from "@/lib/stores/file.js";
    import editItemId from "../components/editItemId.vue";

    const allItems = ref()
    const toggleSettings = ref(false)

    const chosenHeader = ref("")
    const chosenDescription = ref("")
    const chosenPrice = ref("")
    const categories=  ref("")
    const chosenId = ref("")

    function editThisItem(item){
        chosenHeader.value = item.header
        chosenDescription.value = item.description
        chosenPrice.value = item.price
        categories.value = item.categories
        chosenId.value = item.$id
        toggleSettings.value = true
    }

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