<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.8)]">
        <div class="w-full h-full z-20 max-w-[500px] delay-1000 ml-auto">
            <div class="bg-[#241147] px-16 py-8 rounded-t-xl relative flex flex-col gap-6 justify-center items-center">
                <slot></slot>
                <div class="flex gap-8 relative items-center w-full justify-center">
                    <h3 class="text-white text-2xl">
                        {{ header }}
                    </h3>
                    <div v-if="headerSwitcher" class="absolute w-full left-0 flex gap-2 bg-[#241147]">
                        <input type="text" class="h-full w-full" placeholder="заголовок..." >
                        <button class="bg-white" @click="updateData()">принять</button>
                    </div>
                    
                    <div class="bg-white w-6 h-6 rounded-full cursor-pointer" @click="headerSwitcher = true">
                        <img src="../assets/icons/pencil.svg" class="w-full"  alt="">
                    </div>
                </div>
            </div>
            <div>
                {{ id }}
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        id: String,
        header: String,
        description: String,
        price: Number,
        categories: String,
    })

    const headerSwitcher = ref("")
    function updateData(){
        
    }

</script>