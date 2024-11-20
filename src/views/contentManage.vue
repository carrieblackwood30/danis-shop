<template>
    <div class="bg-[#D9D4C9] h-screen">
        <h3 class="text-center p-4 font-semibold text-xl">Управление Контентом</h3>
        <router-link to="/" class="border w-fit m-4 bg-white px-2">назад</router-link>
        <div class="flex justify-center gap-16 m-32">
            <router-link to="/addNewItem" class="flex flex-col justify-center items-center">
                <img src="../assets/icons/add-goods.svg" width="80" alt="">
                <h3>Добавить новый товар</h3>
            </router-link>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/icons/edit.svg" width="80" alt="">
                <h3>Редактировать</h3>
            </div>
            <div>
                заказ мебели
            </div>
        </div>
    </div>
</template>

<script setup> 
import { goods } from "../lib/stores/items.js";

</script>