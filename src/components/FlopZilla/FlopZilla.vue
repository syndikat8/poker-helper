<template>
    <div class="grid grid-cols-13 grid-rows-13 gap-x-0.5 gap-y-0.5">
        <div
            class="w-6.5 h-6.5 flex items-center justify-center text-3.25 border-1 rounded-1.25"
            v-for="card in cards"
            :key="card.name"
        >
            {{ card.name }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import { CARDS } from '@/constants/cards.js'

defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})

const cards = ref(CARDS)

</script>
