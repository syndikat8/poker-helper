<template>
    <div class="grid grid-rows-6 grid-cols-1">
        <div
            class="h-12 px-2 flex justify-center items-center border-x-1 border-t-1 last:border-b-1
            last:rounded-b-1.25 first:rounded-t-1.25 text-4.5 font-bold cursor-pointer hover:bg-indigo-500"
            :class="item.width || 'w-12'"
            v-for="item in items"
            :key="item.id"
            :style="{ gridRow: item.id }"
            @mouseenter="onMouseenter(item, $event)"
            @mouseleave="onMouseleave"
            @click="onGoToPosition(item)"
        >
            {{ item.name }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    activeAction: {
        type: Number,
        default: -1
    },
    item: {
        type: Object,
        default: () => ({})
    }
})

const emits = defineEmits(['updateActiveAction', 'onMouseleave'])

const items = computed(() => props.item.positions)

const onGoToPosition = (item) => {
    console.log('onGoToPosition', item)
}

const onMouseenter = (item, { target }) => {
    const { id } = props.item

    const positionElem = target.getBoundingClientRect()

    emits('updateActiveAction', id, item, positionElem)
}

const onMouseleave = () => {
    emits('onMouseleave')
}

</script>