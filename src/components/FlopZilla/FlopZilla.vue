<template>
    <div
        class="grid gap-x-0.5 gap-y-0.5"
        :style="styleWrapper"
    >
        <div
            class="w-6.5 h-6.5 flex items-center justify-center text-2.5 font-medium border-1 rounded-1.25 relative"
            :class="styleClass(card)"
            v-for="card in cards"
            :key="card.name"
        >
            {{ card.name }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

import { CARDS } from '@/constants/cards.js'

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
    cards: {
        type: Array,
        default: CARDS
    },
    countItemInRow: {
        type: Number,
        default: 13
    }
})

const styleWrapper = computed(() => {
    return {
        gridTemplateRows: `repeat(${props.cards.length / props.countItemInRow}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${props.countItemInRow}, minmax(0, 1fr))`,
    }
})

const styleClass = ({ name }) => {
    const { active = [], vsStillAndEarlyPosItems = [], onlyStillItems = [] } = props.item
    const isActive = active.find(el => el === name)
    const s = name.includes('s')
    const o = name.includes('o')

    const vsStillAndEarlyPos = vsStillAndEarlyPosItems.find(item => item === name)
    const onlyStill = onlyStillItems.find(item => item === name)

    if (vsStillAndEarlyPos) {
        return ['bg-green']
    }

    if (onlyStill) {
        return ['bg-indigo-300']
    }

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
