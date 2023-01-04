<template>
    <div
        class="fixed rounded-1.25 border-1 w-max bg-indigo-200 px-1 py-1"
        :style="popupPosition"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
    >
        <slot></slot>
    </div>
</template>

<script setup>

defineProps({
    popupPosition: {
        type: Object,
        default: () => ({})
    }
})
const emits = defineEmits(['onMouseenter', 'onMouseleave'])

const onMouseenter = () => {
    emits('onMouseenter')
}

const onMouseleave = () => {
    emits('onMouseleave')
}

</script>