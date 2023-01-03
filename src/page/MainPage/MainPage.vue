<template>
    <div class="grid grid-rows-6 grid-cols-1 border-1 rounded-1.25">
        <div
            class="w-12 h-12 flex justify-center items-center border-b-1 last:border-b-0 text-4.5 font-bold cursor-pointer hover:bg-indigo-500"
            v-for="item in itemsPosition"
            :key="item.id"
            @click="onGoToPosition(item)"
        >
            {{ item.name }}
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const itemsPosition = reactive([
    { id: 1, name: 'EP' },
    { id: 2, name: 'MP' },
    { id: 3, name: 'CO' },
    { id: 4, name: 'BTN' },
    { id: 5, name: 'SB' },
    { id: 6, name: 'BB' },
])


const onGoToPosition = (item) => {
    console.log('onGoToPosition', item)
}
</script>
