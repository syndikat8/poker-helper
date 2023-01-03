<template>
    <div class="grid grid-rows-6 grid-cols-1 w-12">
        <div
            class="w-full h-12 flex justify-center items-center border-x-1 border-t-1 last:border-b-1
            last:rounded-b-1.25 first:rounded-t-1.25 text-4.5 font-bold cursor-pointer hover:bg-indigo-500"
            v-for="item in items"
            :key="item.id"
            :style="{ gridRow: item.id }"
            @mouseenter="onMouseenter"
            @mouseleave="onMouseleave"
            @click="onGoToPosition(item)"
        >
            {{ item.name }}
        </div>
    </div>
</template>

<script setup>

defineProps({
    items: {
        type: Array,
        default: () => ([])
    }
})

const onGoToPosition = (item) => {
    console.log('onGoToPosition', item)
}

const onMouseenter = (item) => {
    console.log('onMouseenter')
}

const onMouseleave = (item) => {
    console.log('onMouseleave')
}

</script>