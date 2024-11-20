<template>
    <div class="bg-[#D9D4C9] h-screen">
        <h3 class="text-center p-4 font-semibold text-xl">Добавить новый товар</h3>
        <router-link to="/contentManage" class="border w-fit m-4 bg-white px-2">назад</router-link>
        <form @submit.prevent="addItem()" class="flex gap-1 flex-col m-8 w-[400px]">
            <label class="text-xl" for="header">Заголовок</label>
            <input v-model="header" type="text" id="header" placeholder="заголовок...">
            <label class="text-xl" for="description">Описание</label>
            <textarea v-model="description" name="description" id="description" class="h-[100px]" placeholder="описание"></textarea>
            <label class="text-xl" for="price">Цена</label>
            <input v-model="price" type="number" class="w-[128px]" placeholder="цена">
            <label class="text-xl" for="category">Категория</label>
            <select name="category" id="" v-model="category">
                <option v-for="category in allCategories" :key="category.id" :value="category">{{ category.name }}</option>
            </select>
            <label class="text-xl" for="image">Изображение(до 5шт)</label>
            <input type="file" id="image" @change="getImgInput" multiple>
            <div class="flex gap-4">
                <img v-for="img in previewImgs" :key="img" :src="img" width="100" alt="">
            </div>
            <button class="bg-white px-4 py-2 rounded-lg mt-4">Добавить</button>
        </form>
    </div>
</template>

<script setup>
    import { goods } from "@/lib/stores/items.js";
    import { addFile } from "@/lib/stores/file";
    import { ref } from "vue";
    import { createdId } from '@/lib/stores/file.js';
    import { allCategories } from "@/types/categories"
    
    const header = ref("")
    const description = ref("")
    const price = ref("")
    const chosenImg = ref([])
    const imgsId = ref([])
    const previewImgs = ref([])
    const category = ref("")

    const getImgInput = (e) =>{
    if(chosenImg.value.length < 5){
        chosenImg.value.push(e.target.files[0])
        previewImgs.value.push(URL.createObjectURL(e.target.files[0]))
    }
}

    function addItem(){

        console.log(category.value.name)

        if(
            header.value !== ''
            && description.value !== ''
            && price.value !== ''
        ){
            for (let i = 0; i < chosenImg.value.length; i++) {
                addFile(chosenImg.value[i])
                imgsId.value.push(createdId)
            }

            imgsId.value = JSON.stringify(imgsId.value)
            goods.add({
                header: header.value,
                description: description.value,
                price: price.value,
                imgsId: imgsId.value,
            })
        }

        
    }

</script>