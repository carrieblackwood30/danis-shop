<template>
    <div class="bg-[rgba(0,0,0,0.4)] w-fit px-4 py-2 m-4 text-white">
            <div class="flex gap-6 px-2 mb-2">
                <h3>Сортировка по: </h3>
                <button class="bg-black px-2" @click="filter('header')">A - Z</button>
                <button class="bg-black px-2" @click="filter('price')">По цене</button>
                <label for="category">Сортировка по категории:</label>
                <select 
                    class="text-black" 
                    name="category" 
                    id="category" 
                    @change="emit('filterByCategory', chosenCategory)"
                    v-model="chosenCategory"
                    >
                    <option selected>Все</option>
                    <option v-for="category in allCategories" :key="category.id" :value="category.name">{{ category.name }}</option>
                </select>
            </div>
            <div class="flex gap-6">
                <h3>Поиск:</h3>
                <input 
                    type="text" 
                    @input="emit('filterByText', textInput)" 
                    v-model="textInput"
                    class="w-full text-black px-2" 
                    placeholder="поиск по наименованию..."
                    >
            </div>
    </div>
</template>

<script setup>
import { allCategories } from "@/types/categories"
import { ref } from "vue";

const chosenCategory = ref("Все")
const textInput = ref("")

const props = defineProps({
    items: Array
})

const emit = defineEmits(["filterByCategory", "filterByText"])

emit("filterByCategory", chosenCategory)
emit("filterByText", textInput)

function filter(target){
    if(target === "header"){
        props.items.sort((a,b) => a.header > b.header ? 1 : -1)
    }
    if(target === "price"){
        props.items.sort((a,b) => a.price > b.price ? 1 : -1)
    }
}

</script>