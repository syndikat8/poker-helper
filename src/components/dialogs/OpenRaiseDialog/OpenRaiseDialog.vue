<template>
    <WrapperDialog
        :popupPosition="popupPosition"
        @onMouseenter="onMouseenter"
    >
        <FlopZilla :item="item" />
    </WrapperDialog>
</template>

<script setup>
import WrapperDialog from '@/components/dialogs/WrapperDialog/WrapperDialog.vue'
import FlopZilla from '@/components/FlopZilla/FlopZilla.vue'

defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
    popupPosition: {
        type: Object,
        default: () => ({})
    }
})

const emits = defineEmits(['onMouseenter'])

const onMouseenter = () => {
    emits('onMouseenter')
}
</script>
