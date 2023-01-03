<template>
    <div
        class="rounded-1.25 w-max px-5 py-1.5 cursor-pointer bg-indigo-500 hover:bg-indigo-600 transition duration-200 text-white"
        @click="onButtonClick"
    >
        {{ name }}
    </div>
</template>

<script setup>

defineProps({
    name: {
        type: String,
        default: 'Add'
    }
})

const emits = defineEmits(['onButton'])

const onButtonClick = () => {
    emits('onButton')
}
</script>

<style scoped>

</style>