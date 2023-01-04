<template>
    <div class="grid grid-cols-13 grid-rows-13 gap-x-0.5 gap-y-0.5">
        <div
            class="w-6.5 h-6.5 flex items-center justify-center text-2.5 font-medium border-1 rounded-1.25"
            :class="styleClass(card)"
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

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})

const cards = ref(CARDS)

const styleClass = ({ name }) => {
    const { active = [] } = props.item
    const isActive = active.find(el => el === name)
    const s = name.includes('s')
    const o = name.includes('o')

    if (isActive) {
        return [
            !s && !o && 'bg-blue-700 text-white',
            s && 'bg-amber-300',
            o && 'bg-red-600',
        ]
    }

    return [
        !s && !o && 'bg-blue-300',
        s && 'bg-amber-100',
        o && 'bg-red-100',
    ]
}

</script>
