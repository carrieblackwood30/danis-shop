<template>
    <section>
        <h3 class="text-center font-semibold text-2xl p-8 mb-4">Категории</h3>
        <div class="flex gap-4 flex-wrap justify-center">
            <div 
            v-for="category in allCategories" 
            :key="category.id" 
            class="bg-[#E3DCCF] flex flex-col justify-between p-2 transition-all hover:scale-110"
                >
                <img :src="category.image" class="w-[220px] max-h-[200px] " alt="img">
                <h3 class="text-xl">{{ category.name }}</h3>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { allCategories } from '../types/categories'

</script>

<style scoped>
.sofa{
background: url(@/assets/img/sofa.jpg);
background-repeat: no-repeat;
background-position: center;
background-size: cover;
}

.sofa:hover .sofa-text{
opacity: 1;
scale: 1.4;
}
.sofa:hover{
scale: 1.1;
}
</style>